import type { Metadata } from "next";
import Link from "next/link";
import { disciplines } from "./disciplines";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore SRT Roney's work across design, branding, photography, video, web, ecommerce, advertising, and business systems.",
};

export default function WorkPage() {
  return (
    <main className="detail-page">
      <Link className="back-link" href="/#work">← Back to the field notes</Link>
      <p className="eyebrow">01 / Selected work</p>
      <h1>Proof over promises.</h1>
      <p className="detail-lead">A living archive of work across disciplines. Each practice has its own trail of projects, experiments, outcomes, and lessons.</p>
      <div className="discipline-index">{disciplines.map((discipline, index) => <section className={`discipline-block discipline-${discipline.accent}`} key={discipline.slug}><div className="discipline-heading"><div><span className="card-kicker">{String(index + 1).padStart(2, "0")} / {discipline.eyebrow}</span><h2>{discipline.label}</h2><p>{discipline.summary}</p></div><Link className="section-link" href={`/work/${discipline.slug}`} aria-label={`View ${discipline.label} work`}>View discipline <span>↗</span></Link></div><div className="discipline-projects">{discipline.projects.slice(0, 3).map((project) => <article key={project.title}><h3>{project.title}</h3><p>{project.description}</p><strong>{project.result} ↗</strong></article>)}</div></section>)}</div>
    </main>
  );
}
