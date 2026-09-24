import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCrmSession } from "@/lib/crm-auth";
import ContactList from "./contact-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CRM Control Room | SRT Roney",
  description: "Private CRM and inbound lead management for SRT Roney.",
};

export default async function CrmPage() {
  const session = await getCrmSession();
  if (!session) {
    redirect("/crm/login");
  }

  let contacts: Array<{
    id: string;
    name: string;
    email: string;
    message: string;
    source: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }> = [];
  let dbError: string | null = null;

  try {
    contacts = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to load contacts from database:", error);
    dbError = "Unable to connect to the database. Verify that PostgreSQL is running.";
  }

  const serialized = contacts.map((contact) => ({
    ...contact,
    createdAt: contact.createdAt.toISOString(),
  }));

  const newCount = contacts.filter((c) => c.status === "new").length;
  const reviewingCount = contacts.filter((c) => c.status === "reviewing").length;

  return (
    <main className="crm-page">
      <header className="crm-header">
        <div>
          <Link className="crm-brand" href="/">
            srt roney <span>/ crm</span>
          </Link>
          <p className="eyebrow">PRIVATE CONTROL ROOM</p>
        </div>
        <div className="crm-header-actions">
          <Link className="crm-back-portfolio" href="/" target="_blank">
            View Live Site ↗
          </Link>
          <form action="/api/crm/logout" method="post">
            <button className="crm-logout" type="submit">
              Sign out ↗
            </button>
          </form>
        </div>
      </header>

      {dbError && (
        <div className="crm-alert-banner">
          <strong>Database Notice:</strong> {dbError}
        </div>
      )}

      <section className="crm-overview">
        <div>
          <p className="eyebrow">INBOX / PROJECT LEADS</p>
          <h1>Contact control.</h1>
          <p>
            Track incoming conversations, prioritize real business problems, and move leads to the next useful action.
          </p>
        </div>
        <div className="crm-stat">
          <strong>{newCount}</strong>
          <span>New submissions</span>
        </div>
        <div className="crm-stat">
          <strong>{reviewingCount}</strong>
          <span>In review</span>
        </div>
        <div className="crm-stat">
          <strong>{contacts.length}</strong>
          <span>Total leads</span>
        </div>
      </section>

      <section className="crm-section-heading">
        <div>
          <p className="eyebrow">LEAD INBOX</p>
          <h2>All submissions</h2>
        </div>
        <div className="crm-status-indicator">
          <span className="live-dot" />
          <span className="crm-live">DATABASE {dbError ? "OFFLINE" : "CONNECTED"}</span>
        </div>
      </section>

      <ContactList contacts={serialized} />
    </main>
  );
}
