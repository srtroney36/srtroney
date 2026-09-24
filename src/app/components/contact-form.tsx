"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill out all fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error || "Unable to send message. Please try again or email directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again or send an email directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-success">
        <div className="success-icon">✓</div>
        <h3>Message received.</h3>
        <p>Thank you for reaching out. I review incoming project notes daily and will get back to you with a useful first question.</p>
        <button
          type="button"
          className="button button-light"
          onClick={() => setStatus("idle")}
          style={{ marginTop: "16px" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <label className="contact-form-field">
          <span>Your name</span>
          <input
            type="text"
            required
            placeholder="e.g. Alex Rivera"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "submitting"}
          />
        </label>

        <label className="contact-form-field">
          <span>Email address</span>
          <input
            type="email"
            required
            placeholder="alex@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting"}
          />
        </label>
      </div>

      <label className="contact-form-field">
        <span>What is stuck or what should we test?</span>
        <textarea
          required
          rows={4}
          placeholder="Briefly describe the business problem, idea, or hypothesis you want to explore..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "submitting"}
        />
      </label>

      {status === "error" && errorMessage && (
        <div className="contact-form-error" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="contact-form-actions">
        <button
          type="submit"
          className="button button-light"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending inquiry..." : "Send direct message"}
          <span>↗</span>
        </button>
        <span className="contact-form-hint">
          Saved directly to the private project inbox.
        </span>
      </div>
    </form>
  );
}
