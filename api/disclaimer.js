// api/disclaimer.js
import { get } from "@vercel/edge-config";

export default async function handler(req) {
  // kein `res` Parameter
  try {
    const text = await get("disclaimer");
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ text: undefined }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  runtime: "edge",
};
