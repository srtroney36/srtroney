"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CrmLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/crm/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      if (response.ok) {
        router.refresh();
        router.push("/crm");
      } else {
        const data = await response.json().catch(() => null);
        setError(data?.error || "Invalid CRM credentials.");
        setLoading(false);
      }
    } catch {
      setError("Unable to connect to the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="crm-auth-page">
      <div className="crm-auth-panel">
        <Link className="back-link" href="/" style={{ marginBottom: "20px", display: "inline-block" }}>
          ← Back to portfolio
        </Link>
        <p className="eyebrow">SRT RONEY / PRIVATE CRM</p>
        <h1>Control room.</h1>
        <p>Review incoming project conversations and keep the next useful action visible.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
              disabled={loading}
              placeholder="admin"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              disabled={loading}
              placeholder="••••••••••••"
            />
          </label>
          {error && <p className="crm-error">{error}</p>}
          <button className="button button-primary" type="submit" disabled={loading}>
            {loading ? "Verifying credentials..." : "Enter CRM"}
            <span>↗</span>
          </button>
        </form>
      </div>
    </main>
  );
}
