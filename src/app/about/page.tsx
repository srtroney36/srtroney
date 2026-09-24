import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SRT Roney",
  description: "About SRT Roney, a hybrid operator working across creative, software, and growth.",
};

export default function AboutPage() {
  return (
    <main className="detail-page">
      <Link className="back-link" href="/#about">← Back to the field notes</Link>
      <p className="eyebrow">03 / About</p>
      <h1>A hybrid operator for the messy middle.</h1>
      <p className="detail-lead">I work between the camera, the code editor, and the customer conversation.</p>
      <div className="about-detail"><p>That combination lets me make the story clearer, the experience faster, and the next step more measurable. I have spent years learning visual production, web development, automation, marketing, and sales because real problems rarely stay inside one discipline.</p><p>No guru theatre. Just thoughtful execution, visible trade-offs, and a bias toward shipping something we can learn from.</p><p className="about-signoff">SRT RONEY<br /><span>Savar, Bangladesh / 2026</span></p></div>
    </main>
  );
}
