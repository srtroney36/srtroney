import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manifesto",
  description: "The working principles behind SRT Roney's experiments and digital work.",
};

export default function ManifestoPage() {
  return (
    <main className="detail-page">
      <Link className="back-link" href="/#manifesto">← Back to the field notes</Link>
      <p className="eyebrow">00 / The manifesto</p>
      <h1>Nobody shows you the messy middle.</h1>
      <p className="detail-lead">The internet is full of polished outcomes and missing context. This is a working document for the part in between: the uncertainty, experiments, failures, and decisions that make useful work possible.</p>
      <div className="detail-columns">
        <article><span>01</span><h2>Build before it feels ready.</h2><p>A good idea becomes useful only after it meets a real person, a real constraint, and a real deadline.</p></article>
        <article><span>02</span><h2>Measure what changes a decision.</h2><p>Views and compliments are signals, not outcomes. I look for evidence that changes what gets built next.</p></article>
        <article><span>03</span><h2>Keep the lesson.</h2><p>A failed launch can still pay for itself when the insight is documented and reused with discipline.</p></article>
      </div>
      <blockquote className="detail-quote">“If I fail, the work should still leave behind a better map.”</blockquote>
    </main>
  );
}
