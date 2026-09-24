import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCrmSession } from "@/lib/crm-auth";
import ContactList from "./contact-list";

export default async function CrmPage() {
  if (!(await getCrmSession())) redirect("/crm/login");
  const contacts = await prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } });
  const serialized = contacts.map((contact) => ({ ...contact, createdAt: contact.createdAt.toISOString() }));
  const newCount = contacts.filter((contact) => contact.status === "new").length;

  return <main className="crm-page"><header className="crm-header"><div><Link className="crm-brand" href="/">srt roney <span>/ crm</span></Link><p className="eyebrow">PRIVATE CONTROL ROOM</p></div><form action="/api/crm/logout" method="post"><button className="crm-logout" type="submit">Sign out ↗</button></form></header><section className="crm-overview"><div><p className="eyebrow">INBOX / PROJECT LEADS</p><h1>Contact control.</h1><p>Review the people and problems arriving through the public site.</p></div><div className="crm-stat"><strong>{newCount}</strong><span>New submissions</span></div><div className="crm-stat"><strong>{contacts.length}</strong><span>Total contacts</span></div></section><section className="crm-section-heading"><div><p className="eyebrow">INCOMING WORK</p><h2>Contact submissions</h2></div><span className="crm-live">DATABASE CONNECTED</span></section><ContactList contacts={serialized} /></main>;
}
