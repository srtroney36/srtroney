import type { Metadata } from "next";
import Link from "next/link";
import { disciplines, getDiscipline } from "../disciplines";

type Props = { params: Promise<{ discipline: string }> };

export function generateStaticParams() {
  return disciplines.map((discipline) => ({ discipline: discipline.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { discipline: slug } = await params;
  const discipline = getDiscipline(slug);
  return { title: discipline?.label ?? "Work", description: discipline?.summary ?? "Selected work by SRT Roney." };
}

export default async function DisciplinePage({ params }: Props) {
  const { discipline: slug } = await params;
  const discipline = getDiscipline(slug);

  if (!discipline) return <main className="detail-page"><Link className="back-link" href="/work">← Back to work</Link><h1>Work not found.</h1></main>;

  return (
    <main className={`detail-page discipline-detail discipline-${discipline.accent}`}>
      <Link className="back-link" href="/work">← Back to all disciplines</Link>
      <p className="eyebrow">{discipline.eyebrow}</p>
      <h1>{discipline.label}.</h1>
      <p className="detail-lead">{discipline.summary}</p>
      <div className="discipline-detail-grid">{discipline.projects.map((project) => <article key={project.title}><span className="card-kicker">{discipline.label}</span><h2>{project.title}</h2><p>{project.description}</p><strong>{project.result}</strong><div className="project-placeholder">Project detail / case study coming next</div></article>)}</div>
    </main>
  );
}
