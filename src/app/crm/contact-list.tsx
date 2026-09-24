"use client";

import { useState } from "react";

export type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  source: string;
  status: string;
  createdAt: string;
};

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "reviewing", label: "Reviewing" },
  { value: "replied", label: "Replied" },
  { value: "archived", label: "Archived" },
] as const;

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = months[d.getUTCMonth()];
    const year = d.getUTCFullYear();
    const hours = String(d.getUTCHours()).padStart(2, "0");
    const mins = String(d.getUTCMinutes()).padStart(2, "0");
    return `${day} ${month} ${year} ${hours}:${mins} UTC`;
  } catch {
    return iso;
  }
}

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  const [items, setItems] = useState<Contact[]>(contacts);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const counts = {
    all: items.length,
    new: items.filter((c) => c.status === "new").length,
    reviewing: items.filter((c) => c.status === "reviewing").length,
    replied: items.filter((c) => c.status === "replied").length,
    archived: items.filter((c) => c.status === "archived").length,
  };

  const filteredItems = items.filter((contact) => {
    if (activeTab !== "all" && contact.status !== activeTab) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.message.toLowerCase().includes(query)
    );
  });

  async function updateStatus(id: string, status: string) {
    setSavingId(id);
    setActionError(null);
    try {
      const response = await fetch("/api/crm/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (response.ok) {
        setItems((current) =>
          current.map((item) => (item.id === id ? { ...item, status } : item))
        );
      } else {
        const data = await response.json().catch(() => null);
        setActionError(data?.error || "Failed to update contact status.");
      }
    } catch {
      setActionError("Network error while updating status.");
    } finally {
      setSavingId(null);
    }
  }

  async function deleteContact(id: string, name: string) {
    const confirmed = window.confirm(`Are you sure you want to delete the submission from ${name}?`);
    if (!confirmed) return;

    setDeletingId(id);
    setActionError(null);
    try {
      const response = await fetch("/api/crm/contacts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setItems((current) => current.filter((item) => item.id !== id));
      } else {
        const data = await response.json().catch(() => null);
        setActionError(data?.error || "Failed to delete contact.");
      }
    } catch {
      setActionError("Network error while deleting contact.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="crm-workspace">
      {actionError && <div className="crm-alert-error">{actionError}</div>}

      <div className="crm-toolbar">
        <div className="crm-tabs" role="tablist">
          {STATUS_OPTIONS.map((tab) => {
            const count = counts[tab.value as keyof typeof counts] ?? 0;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.value}
                className={`crm-tab ${activeTab === tab.value ? "active" : ""}`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
                <span className="crm-tab-badge">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="crm-search-box">
          <input
            type="search"
            placeholder="Search leads by name, email, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="crm-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              className="crm-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="crm-empty">
          {searchQuery
            ? `No submissions match "${searchQuery}".`
            : activeTab === "all"
            ? "No contact submissions in the database yet. Public inquiries from the site will appear here."
            : `No submissions with status "${activeTab}".`}
        </div>
      ) : (
        <div className="crm-contact-list">
          {filteredItems.map((contact) => {
            const isSaving = savingId === contact.id;
            const isDeleting = deletingId === contact.id;

            return (
              <article
                className={`crm-contact crm-status-${contact.status}`}
                key={contact.id}
                style={{ opacity: isDeleting ? 0.4 : 1 }}
              >
                <div className="crm-contact-top">
                  <div>
                    <div className="crm-badge-row">
                      <span className={`crm-status-pill status-${contact.status}`}>
                        {contact.status}
                      </span>
                      <span className="crm-source-tag">source: {contact.source}</span>
                    </div>
                    <h2>{contact.name}</h2>
                    <div className="crm-contact-meta">
                      <a className="crm-email-link" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <time dateTime={contact.createdAt}>{formatDate(contact.createdAt)}</time>
                </div>

                <div className="crm-message-container">
                  <p className="crm-message-text">{contact.message}</p>
                </div>

                <div className="crm-contact-actions">
                  <div className="crm-action-group">
                    <label className="crm-status-label">
                      <span>Status</span>
                      <select
                        value={contact.status}
                        disabled={isSaving || isDeleting}
                        onChange={(event) => updateStatus(contact.id, event.target.value)}
                        className="crm-select"
                      >
                        <option value="new">New</option>
                        <option value="reviewing">Reviewing</option>
                        <option value="replied">Replied</option>
                        <option value="archived">Archived</option>
                      </select>
                    </label>
                    {isSaving && <span className="crm-inline-spin">Saving...</span>}
                  </div>

                  <div className="crm-btn-group">
                    <a
                      className="button-crm-secondary"
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(
                        "Re: Project inquiry - SRT Roney"
                      )}`}
                    >
                      Draft Reply ↗
                    </a>
                    <button
                      type="button"
                      className="button-crm-danger"
                      disabled={isDeleting || isSaving}
                      onClick={() => deleteContact(contact.id, contact.name)}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
