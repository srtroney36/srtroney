"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

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
    const response = await fetch("/api/crm/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
    if (response.ok) router.push("/crm");
    else setError("Invalid CRM credentials.");
    setLoading(false);
  }

  return <main className="crm-auth-page"><div className="crm-auth-panel"><p className="eyebrow">SRT RONEY / PRIVATE CRM</p><h1>Control room.</h1><p>Review incoming project conversations and keep the next useful action visible.</p><form onSubmit={handleSubmit}><label>Username<input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>{error && <p className="crm-error">{error}</p>}<button className="button button-primary" disabled={loading}>{loading ? "Signing in..." : "Enter CRM"}<span>↗</span></button></form></div></main>;
}
