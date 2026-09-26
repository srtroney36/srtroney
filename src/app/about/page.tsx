import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SRT Roney | Multidisciplinary Hybrid Operator",
  description:
    "Shohanur Rahman Talukder Roney (SRT Roney) is a multidisciplinary hybrid operator working across cinema visuals, full-stack software, automation pipelines, and consumer psychology.",
};

const chapters = [
  {
    period: "PRE-2022",
    chapter: "CHAPTER 00",
    title: "Before Zero: The Autodidact Spark",
    description:
      "A curiosity-driven autodidact phase in Savar. Dissecting computer hardware, pulling apart server configurations, ripping open templates, and learning how the internet was physically and logically wired together.",
    takeaway: "Core literacy acquired, but zero commercial direction.",
    isCurrent: false,
  },
  {
    period: "2022 — 2023",
    chapter: "CHAPTER 01",
    title: "The Creative Years: Light & Cinema",
    description:
      "Thousands of hours behind cinema cameras, studio lighting, lens physics, and precision color grading in DaVinci Resolve Studio. Obsessed with visual storytelling, framing, and commercial product aesthetics.",
    takeaway: "Aesthetic taste developed, but learned that 'great art' without distribution yields zero revenue.",
    isCurrent: false,
  },
  {
    period: "2023 — 2024",
    chapter: "CHAPTER 02",
    title: "The System Builder: Modern Web & Automation",
    description:
      "Diving deep into modern web engineering—TypeScript, Next.js, headless architectures, SQL databases, API pipelines, and automation tools. Building software from raw requirements to deployment.",
    takeaway: "Technical ability became razor-sharp, but code in a ghost town without an audience solves nothing.",
    isCurrent: false,
  },
  {
    period: "2024 — 2025",
    chapter: "CHAPTER 03",
    title: "The Marketer: Behavioral Psychology & Ads",
    description:
      "Performance marketing, Meta ads management, search indexing, consumer behavioral psychology, conversion rate optimization, and direct-response copywriting.",
    takeaway: "Understood how attention flows, but isolated marketing disconnected from product delivery burns cash.",
    isCurrent: false,
  },
  {
    period: "2026 — PRESENT",
    chapter: "CHAPTER 04",
    title: "The Hybrid Synthesis: The Honest Lab",
    description:
      "Starting again with total synthesis. Disjointed disciplines are not a business—they are siloed weapons. Now uniting cinema visuals, code, automation, and psychology into one single repeatable problem-solving method.",
    takeaway: "Documenting in broad daylight. Testing the 99% of failures to isolate the 1% that survives.",
    isCurrent: true,
  },
];

const principles = [
  {
    index: "01",
    title: "Radical Candor",
    description:
      "No guru theatre. I document what broke with the exact same rigor as what succeeded. If an experiment collapses, the transparent autopsy leaves behind a better map for everyone.",
  },
  {
    index: "02",
    title: "End-to-End Velocity",
    description:
      "Real problems don't respect department boundaries. A single hybrid operator who commands the camera, the code editor, and the conversion funnel executes without 8-week cross-department meetings.",
  },
  {
    index: "03",
    title: "The 1% Survival Filter",
    description:
      "99% of digital advice, growth hacks, and template formulas are fleeting noise. We run live-fire experiments to identify the 1% of durable levers that consistently generate leverage.",
  },
  {
    index: "04",
    title: "Fast Feedback Loops",
    description:
      "A hypothesis that takes six months to validate is dead on arrival. Prototype in 48 hours, deploy to real people, and let objective telemetry decide the next iteration.",
  },
  {
    index: "05",
    title: "Relentless Craftsmanship",
    description:
      "Speed is never an excuse for fragile architecture or ugly aesthetics. Fast and beautiful are not mutually exclusive—clean code and cinematic rhythm earn compounding trust.",
  },
  {
    index: "06",
    title: "Skin in the Game",
    description:
      "Theory is cheap. I don't give advice on systems I haven't personally deployed, broken, and repaired with my own hands in real production environments.",
  },
];

const arsenal = [
  {
    category: "Visual & Cinema",
    items: [
      "Cinema Cameras",
      "Prime Glass",
      "DaVinci Resolve Studio",
      "Studio Lighting Rigs",
      "Figma",
      "Color Science",
    ],
  },
  {
    category: "Software & Web",
    items: [
      "Next.js (App Router)",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL & Prisma",
      "REST & GraphQL APIs",
    ],
  },
  {
    category: "Automation & Ops",
    items: [
      "Custom Headless CRM",
      "Make.com / n8n",
      "Webhook Pipelines",
      "Docker Containers",
      "Linux VPS",
      "Cloudflare Edge",
    ],
  },
  {
    category: "Growth & Strategy",
    items: [
      "Consumer Psychology",
      "Meta Ads Manager",
      "CRO Testing",
      "Funnel Architecture",
      "Direct Copywriting",
      "SEO Indexing",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="about-page-shell">
      {/* 1. SITE HEADER */}
      <header className="site-header">
        <Link className="brand" href="/" aria-label="srt roney home">
          <span className="brand-badge">
            <Image src="/FAVICON-BLACK.svg" alt="" width={34} height={34} priority />
          </span>
          <span>srt roney</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/about" className="active">About</Link>
        </nav>
      </header>

      {/* 2. MAIN ABOUT CONTENT */}
      <main className="about-content-wrap">
        {/* Top Control Bar */}
        <div className="about-top-bar">
          <Link className="about-back-link" href="/">
            ← Return to journal
          </Link>
          <div className="about-status-tag">
            <span className="pulse-dot" aria-hidden="true" />
            <span>OPERATOR PROFILE // SAVAR, BD</span>
          </div>
        </div>

        {/* Hero Dossier */}
        <section className="about-hero">
          <p className="about-eyebrow">DOSSIER // 01 · OPERATOR PROFILE</p>
          <h1>The discipline to test, fail, and build what actually survives.</h1>
          <p className="about-hero-lead">
            I’m Shohanur Rahman Talukder Roney (SRT Roney)—a multidisciplinary hybrid operator.
            I live in the messy intersection between cinema cameras, full-stack software, automated
            workflows, and consumer psychology.
          </p>

          {/* Telemetry Data Grid */}
          <div className="about-telemetry-grid">
            <div className="telemetry-item">
              <span className="telemetry-label">IDENTIFIER</span>
              <span className="telemetry-value">Shohanur Rahman Talukder (SRT Roney)</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">BASE COORDINATES</span>
              <span className="telemetry-value">Savar, Dhaka, Bangladesh (UTC+6)</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">CORE ARCHITECTURE</span>
              <span className="telemetry-value">Creative × Code × Marketing Systems</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">OPERATING THESIS</span>
              <span className="telemetry-value">Documenting the 1% that survives</span>
            </div>
          </div>
        </section>

        {/* Origin & Narrative Section */}
        <section className="about-section-wrap">
          <div className="about-story-grid">
            {/* Left: Portrait Card */}
            <div className="about-portrait-card">
              <div className="about-portrait-inner">
                <Image
                  className="about-portrait-img"
                  src="/srt roney hero image.png"
                  alt="SRT Roney Portrait"
                  width={1122}
                  height={1402}
                  priority
                />
                <div className="about-portrait-badge">
                  <span>OPERATOR NO. 01</span>
                  <span>SAVAR, BD // 2026</span>
                </div>
              </div>
            </div>

            {/* Right: The Real Story */}
            <div className="about-story-content">
              <div className="about-section-header">
                <p className="about-eyebrow">01 / ORIGIN & REALITY</p>
                <h2>Who the hell is Roney?</h2>
              </div>

              <div className="about-story-text">
                <p>
                  I&apos;m an autodidact who got lost somewhere between cinema cameras, lines of code,
                  consumer psychology, marketing campaigns, and the internet.
                </p>
                <p>
                  I started in Savar with zero industry connections, zero venture backing, and zero
                  shortcuts. My curriculum was tearing down hardware, reading open-source code at 3 AM,
                  shooting thousands of lighting test frames, and building web apps that nobody asked for
                  until I figured out how things actually click.
                </p>

                <div className="about-quote-box">
                  “I haven&apos;t built a giant conglomerate yet. I&apos;m not rich, and I don&apos;t pretend
                  to be. But I am relentlessly disciplined, technically capable, and willing to work in broad
                  daylight.”
                </div>

                <p>
                  Over the years, I saw the modern digital landscape fracture into dysfunctional silos:
                  <strong> designers</strong> who make things that look gorgeous but convert terribly,
                  <strong> engineers</strong> who write beautiful code for products that nobody ever finds,
                  and <strong>marketers</strong> who sell pipe dreams because they cannot build or deliver
                  the actual experience.
                </p>
                <p>
                  I chose a different path: becoming a <strong>hybrid operator</strong>. Someone who can
                  hold the camera, grade the footage, architect the Next.js database, hook up the automated
                  pipeline, and write the direct-response copy that moves real human beings.
                </p>
                <p>
                  <strong>This website is my scientific journal.</strong> I document the 99% of digital
                  strategies that fail so we can double down on the 1% that endures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chronological Timeline Section */}
        <section className="about-section-wrap">
          <div className="about-section-header">
            <p className="about-eyebrow">02 / CHRONOLOGICAL EVOLUTION</p>
            <h2>How the toolkit was forged.</h2>
            <p className="about-section-subtitle">
              Not an autobiography of unearned victories—an honest log of disciplines accumulated
              through live trial, error, and hard resets.
            </p>
          </div>

          <div className="about-timeline-grid">
            {chapters.map((item) => (
              <article
                key={item.chapter}
                className={`timeline-card ${item.isCurrent ? "timeline-card-current" : ""}`}
              >
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-chapter">{item.chapter}</span>
                </div>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="timeline-takeaway">
                    <span>Key Lesson:</span> {item.takeaway}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Operating Principles */}
        <section className="about-section-wrap">
          <div className="about-section-header">
            <p className="about-eyebrow">03 / OPERATING CODE</p>
            <h2>How I make decisions.</h2>
            <p className="about-section-subtitle">
              Non-negotiable principles that govern how I run experiments, build software, and interact
              with reality.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <div key={principle.index} className="principle-card">
                <span className="principle-index">{principle.index} // PRINCIPLE</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Arsenal / Toolkit */}
        <section className="about-section-wrap">
          <div className="about-section-header">
            <p className="about-eyebrow">04 / THE ARSENAL</p>
            <h2>Weapons of choice.</h2>
            <p className="about-section-subtitle">
              Battle-tested hardware, frameworks, and workflows used to create cinematic media and
              high-performance digital software.
            </p>
          </div>

          <div className="arsenal-grid">
            {arsenal.map((col) => (
              <div key={col.category} className="arsenal-card">
                <div className="arsenal-icon-title">
                  <h3>{col.category}</h3>
                </div>
                <div className="arsenal-tags">
                  {col.items.map((item) => (
                    <span key={item} className="arsenal-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <section className="about-cta-box">
          <p className="about-eyebrow">05 / DIRECT LINE</p>
          <h2>Have a real problem that spans multiple disciplines?</h2>
          <p>
            I don&apos;t offer generic agency packages or empty corporate buzzwords. I isolate the
            core bottleneck, form a testable hypothesis, and build the solution that works.
          </p>
          <div className="about-cta-actions">
            <a
              className="button button-light"
              href="mailto:hello@srtroney.com?subject=Problem%20Worth%20Solving"
            >
              hello@srtroney.com <span>↗</span>
            </a>
            <Link className="button button-primary" href="/work">
              View selected work <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      {/* 3. SITE FOOTER */}
      <footer className="site-footer">
        <span>© 2026 SRT RONEY</span>
        <span>Investigate. Test. Build what works.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
