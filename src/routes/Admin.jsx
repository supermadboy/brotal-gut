import { useState, useEffect } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;500&display=swap');
`;

const styles = `
  ${FONTS}
  .admin-root {
    min-height: 100vh;
    background: #1a1209;
    background-image: radial-gradient(ellipse at 20% 50%, #2e1f0a 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 20%, #1f1508 0%, transparent 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans 3', sans-serif;
    padding: 2rem;
  }
  .admin-card {
    background: #f5ede0;
    border-radius: 2px;
    padding: 3rem;
    width: 100%;
    max-width: 560px;
    box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(180,140,80,0.2);
    position: relative;
  }
  .admin-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #8B5E2B, #C49A3C, #8B5E2B);
  }
  .admin-badge {
    display: inline-block;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #8B5E2B;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .admin-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    color: #1a1209;
    margin: 0 0 0.25rem 0;
    line-height: 1.2;
  }
  .admin-subtitle {
    font-size: 0.85rem;
    color: #7a6045;
    margin: 0 0 2rem 0;
    font-weight: 300;
  }
  .admin-label {
    display: block;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8B5E2B;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .admin-input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: #fff;
    border: 1px solid #d4b896;
    border-radius: 2px;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 0.95rem;
    color: #1a1209;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .admin-input:focus {
    border-color: #8B5E2B;
    box-shadow: 0 0 0 3px rgba(139,94,43,0.1);
  }
  .admin-textarea {
    resize: vertical;
    min-height: 130px;
    line-height: 1.6;
  }
  .admin-field {
    margin-bottom: 1.5rem;
  }
  .admin-hint {
    font-size: 0.75rem;
    color: #a08060;
    margin-top: 0.4rem;
    font-weight: 300;
  }
  .admin-btn {
    width: 100%;
    padding: 0.9rem;
    background: #1a1209;
    color: #f5ede0;
    border: none;
    border-radius: 2px;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    margin-top: 0.5rem;
  }
  .admin-btn:hover:not(:disabled) {
    background: #2e1f0a;
  }
  .admin-btn:active:not(:disabled) {
    transform: scale(0.99);
  }
  .admin-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .admin-divider {
    border: none;
    border-top: 1px solid #d4b896;
    margin: 2rem 0;
  }
  .admin-toast {
    padding: 0.75rem 1rem;
    border-radius: 2px;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
  .admin-toast.success {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #a5d6a7;
  }
  .admin-toast.error {
    background: #fdecea;
    color: #c62828;
    border: 1px solid #ef9a9a;
  }
  .admin-current {
    background: #ede3d4;
    border-left: 3px solid #C49A3C;
    padding: 0.75rem 1rem;
    border-radius: 0 2px 2px 0;
    font-size: 0.875rem;
    color: #4a3520;
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 1.5rem;
  }
  .admin-current-label {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8B5E2B;
    font-weight: 500;
    margin-bottom: 0.4rem;
    font-style: normal;
  }
`;

// ── Password Gate ──────────────────────────────────────────
function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/admin-disclaimer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify", password }),
      });
      if (res.ok) {
        onUnlock(password);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-card">
      <span className="admin-badge">Backstube Admin</span>
      <h1 className="admin-title">Willkommen zurück</h1>
      <p className="admin-subtitle">
        Bitte gib das Passwort ein, um fortzufahren.
      </p>
      {error && (
        <div className="admin-toast error">
          Falsches Passwort. Bitte nochmal versuchen.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="admin-field">
          <label className="admin-label">Passwort</label>
          <input
            type="password"
            className="admin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="admin-btn"
          disabled={loading || !password}
        >
          {loading ? "Prüfe …" : "Einloggen"}
        </button>
      </form>
    </div>
  );
}

// ── Editor ─────────────────────────────────────────────────
function Editor({ password }) {
  const [current, setCurrent] = useState("");
  const [text, setText] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/disclaimer")
      .then((r) => r.json())
      .then(({ text }) => {
        if (text) {
          setCurrent(text);
          setText(text);
        }
      })
      .catch(() => {});
  }, []);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin-disclaimer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update", password, text }),
      });
      if (res.ok) {
        setCurrent(text);
        showToast("Disclaimer erfolgreich gespeichert ✓");
      } else {
        showToast("Fehler beim Speichern. Bitte nochmal versuchen.", "error");
      }
    } catch {
      showToast("Netzwerkfehler. Bitte nochmal versuchen.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    if (!window.confirm("Disclaimer wirklich löschen?")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin-disclaimer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update", password, text: "" }),
      });
      if (res.ok) {
        setCurrent("");
        setText("");
        showToast("Disclaimer wurde gelöscht ✓");
      } else {
        showToast("Fehler beim Löschen.", "error");
      }
    } catch {
      showToast("Netzwerkfehler.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-card">
      <span className="admin-badge">Backstube Admin</span>
      <h1 className="admin-title">Disclaimer bearbeiten</h1>
      <p className="admin-subtitle">
        Neuigkeiten aus der Backstube – direkt auf der Website.
      </p>

      {toast && <div className={`admin-toast ${toast.type}`}>{toast.msg}</div>}

      {current && (
        <>
          <div className="admin-current">
            <div className="admin-current-label">Aktuell aktiv</div>
            {current}
          </div>
        </>
      )}

      <hr className="admin-divider" />

      <div className="admin-field">
        <label className="admin-label">Neuer Text</label>
        <textarea
          className="admin-input admin-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="z.B. Ab Freitag gibt es frische Dinkelbrötchen – nur solange der Vorrat reicht!"
        />
        <p className="admin-hint">
          Leer lassen und speichern → Disclaimer wird ausgeblendet.
        </p>
      </div>

      <button className="admin-btn" onClick={handleSave} disabled={loading}>
        {loading ? "Speichert …" : "Speichern"}
      </button>

      {current && (
        <button
          className="admin-btn"
          onClick={handleClear}
          disabled={loading}
          style={{
            marginTop: "0.75rem",
            background: "transparent",
            color: "#8B5E2B",
            border: "1px solid #d4b896",
          }}
        >
          Disclaimer ausblenden
        </button>
      )}
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────
export default function Admin() {
  const [password, setPassword] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <div className="admin-root">
        {!password ? (
          <PasswordGate onUnlock={setPassword} />
        ) : (
          <Editor password={password} />
        )}
      </div>
    </>
  );
}
