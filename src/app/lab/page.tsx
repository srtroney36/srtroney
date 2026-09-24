import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Open Lab",
  description: "Current experiments, hypotheses, and post-mortems from SRT Roney.",
};

const experiments = [
  ["Testing", "Can a sharp teardown beat a generic pitch?", "50 tailored video audits for local e-commerce teams."],
  ["Validated", "Do operational fixes command better pricing?", "Packaging revenue-leak fixes instead of selling disconnected services."],
  ["Learned", "What does a failed launch leave behind?", "Post-mortems, numbers, and lessons that survive the idea."],
];

export default function LabPage() {
  return (
    <main className="detail-page">
      <Link className="back-link" href="/#lab">← Back to the field notes</Link>
      <p className="eyebrow">02 / The open lab</p>
      <h1>What I am testing now.</h1>
      <p className="detail-lead">Every experiment starts with a specific hypothesis, a limited input, and a result worth recording.</p>
      <div className="detail-experiments">{experiments.map(([status, title, description], index) => <article key={title}><span className={`status status-${status.toLowerCase()}`}>{status}</span><div><h2>{title}</h2><p>{description}</p></div><span className="experiment-number">0{index + 1}</span></article>)}</div>
    </main>
  );
}
