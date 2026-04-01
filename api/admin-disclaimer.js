// api/admin-disclaimer.js
//
// Benötigte Umgebungsvariablen in Vercel:
//   ADMIN_PASSWORD     – frei wählbares Passwort für deine Freundin
//   VERCEL_API_TOKEN   – Vercel API Token (Settings → Tokens)
//   EDGE_CONFIG_ID     – die ID deines Edge Configs (z.B. "ecfg_xxxxxxxxxxxx")
//                        findest du in der Edge Config URL:
//                        https://vercel.com/dashboard/stores/edge-config/ecfg_xxx/...

// ── Rate Limiting (In-Memory, pro Deployment) ────────────
const attemptLimiter = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 Sekunden
const MAX_ATTEMPTS = 5; // 5 Versuche pro Fenster

function getRateLimitKey(ip) {
  return `${ip}:${Math.floor(Date.now() / RATE_LIMIT_WINDOW)}`;
}

function checkRateLimit(ip) {
  const key = getRateLimitKey(ip);
  const count = (attemptLimiter.get(key) ?? 0) + 1;
  attemptLimiter.set(key, count);

  // Alte Einträge entfernen (cleanup)
  for (const [k] of attemptLimiter) {
    if (!k.startsWith(ip)) continue;
    const windowTime = parseInt(k.split(":")[1]);
    if (Math.floor(Date.now() / RATE_LIMIT_WINDOW) - windowTime > 2) {
      attemptLimiter.delete(k);
    }
  }

  return count <= MAX_ATTEMPTS;
}

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // ── Rate Limiting ────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Bitte versuche es später." }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { action, password, text } = body;

  // ── Input Validierung ────────────────────────────────────
  if (typeof password !== "string" || password.length > 500) {
    return new Response("Invalid password", { status: 400 });
  }
  if (text !== undefined && (typeof text !== "string" || text.length > 2000)) {
    return new Response("Text zu lang (max 2000 Zeichen)", { status: 400 });
  }
  if (!["verify", "update"].includes(action)) {
    return new Response("Invalid action", { status: 400 });
  }

  // ── Passwort prüfen ──────────────────────────────────────
  if (password !== process.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // ── Nur verifizieren (Login-Check) ───────────────────────
  if (action === "verify") {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // ── Disclaimer aktualisieren ─────────────────────────────
  if (action === "update") {
    const token = process.env.VERCEL_API_TOKEN;
    const edgeConfigId = process.env.EDGE_CONFIG_ID;

    if (!token || !edgeConfigId) {
      console.error("Missing env vars for update");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    try {
      const vercelRes = await fetch(
        `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                operation: "upsert",
                key: "disclaimer",
                value: text ?? "",
              },
            ],
          }),
        },
      );

      if (!vercelRes.ok) {
        console.error("Vercel API error:", vercelRes.status);
        return new Response(
          JSON.stringify({ error: "Failed to update disclaimer" }),
          { status: 500, headers: { "Content-Type": "application/json" } },
        );
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Update error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to update disclaimer" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }
  }

  return new Response("Unknown action", { status: 400 });
}

export const config = {
  runtime: "edge",
};
