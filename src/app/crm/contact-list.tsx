"use client";

import { useState } from "react";

type Contact = { id: string; name: string; email: string; message: string; source: string; status: string; createdAt: string };

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  const [items, setItems] = useState(contacts);
  const [saving, setSaving] = useState<string | null>(null);

  async function updateStatus(id: string, status: string) {
    setSaving(id);
    const response = await fetch("/api/crm/contacts", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    if (response.ok) setItems((current) => current.map((item) => item.id === id ? { ...item, status } : item));
    setSaving(null);
  }

  if (!items.length) return <div className="crm-empty">No contact submissions yet. New portfolio inquiries will appear here.</div>;

  return <div className="crm-contact-list">{items.map((contact) => <article className="crm-contact" key={contact.id}><div className="crm-contact-top"><div><span className="crm-status">{contact.status}</span><h2>{contact.name}</h2><a href={`mailto:${contact.email}`}>{contact.email}</a></div><time dateTime={contact.createdAt}>{new Date(contact.createdAt).toLocaleDateString()}</time></div><p>{contact.message}</p><div className="crm-contact-actions"><span>Source: {contact.source}</span><label>Status<select value={contact.status} disabled={saving === contact.id} onChange={(event) => updateStatus(contact.id, event.target.value)}><option value="new">New</option><option value="reviewing">Reviewing</option><option value="replied">Replied</option><option value="archived">Archived</option></select></label></div></article>)}</div>;
}
