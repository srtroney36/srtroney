import type { Metadata } from "next";
import Link from "next/link";
import TalentDirectory from "./directory";

export const metadata: Metadata = {
  title: "Talent Acquisition",
  description: "Join SRT Roney's curated talent network and get matched with meaningful creative, technical, media, and marketing projects.",
};

export default function TalentPage() {
  return <main className="detail-page talent-page"><Link className="back-link" href="/#talent">← Back to the field notes</Link><p className="eyebrow">05 / Talent acquisition</p><h1>Bring your talent. I&apos;ll find the fit.</h1><p className="detail-lead">This network is for people who want to work on good projects. Tell me what you do, how you work, and what kind of collaboration suits you. I will keep your profile in mind and reach out when the right client project appears.</p><TalentDirectory /><section className="talent-apply"><div><p className="eyebrow">For people who want to work with me</p><h2>Let&apos;s put your craft in the right room.</h2><p>Share your strongest disciplines, availability, location, portfolio, and the kind of work you want more of. I handle the matching and project introduction.</p></div><a className="button button-primary" href="mailto:hello@srtroney.com?subject=Join%20the%20SRT%20Roney%20talent%20network">Join the talent network <span>↗</span></a></section></main>;
}
