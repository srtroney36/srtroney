import type { Metadata } from "next";
import Link from "next/link";
import { AboutAnimations } from "./animations";

export const metadata: Metadata = {
  title: "About SRT Roney | An Autobiography",
  description:
    "Shohanur Rahman Talukder Roney (SRT Roney) — An autodidact's autobiography on starting from zero in Savar, tearing down hardware, mastering cinema and code, and documenting what survives.",
};

export default function AboutPage() {
  return (
    <div className="autobio-shell">
      <AboutAnimations />

      {/* ── MINIMAL TOP BAR ── */}
      <header className="autobio-nav anim-fade-in">
        <Link className="autobio-brand" href="/" aria-label="Return home">
          <span>srt roney</span>
        </Link>
        <div className="autobio-nav-meta">
          <span className="autobio-folio-dot" aria-hidden="true" />
          <span>AUTOBIOGRAPHY // 2026</span>
        </div>
      </header>

      {/* ── THE AUTOBIOGRAPHY ESSAY ── */}
      <main className="autobio-canvas">
        <article className="autobio-document">
          {/* Header Folio */}
          <header className="autobio-header anim-section">
            <div className="autobio-kicker anim-slide-up">
              <span>DOSSIER</span>
              <span className="kicker-sep">/</span>
              <span>SAVAR, BANGLADESH</span>
            </div>

            <h1 className="autobio-title anim-slide-up">
              Who the hell <br />
              <span className="autobio-gradient-title">is Roney?</span>
            </h1>

            <p className="autobio-subtitle anim-slide-up">
              Notes on starting from zero, failing in public, and building what actually survives.
            </p>
          </header>

          {/* Opening Lead Statement */}
          <section className="autobio-lead-movement anim-section">
            <p className="autobio-lead-text anim-slide-up">
              I’m an autodidact who got lost somewhere between cinema cameras, lines of code,
              consumer psychology, marketing campaigns, and the internet.
            </p>
          </section>

          {/* Chapter I */}
          <section className="autobio-chapter anim-section">
            <div className="chapter-label anim-slide-up">
              <span>CHAPTER 01</span>
              <span className="chapter-label-line" aria-hidden="true" />
              <span>THE CURRICULUM</span>
            </div>

            <h2 className="chapter-heading anim-slide-up">
              Zero connections. Zero venture backing. Zero shortcuts.
            </h2>

            <div className="chapter-prose anim-slide-up">
              <p>
                I started in Savar with nothing more than raw curiosity and an internet connection.
                There was no playbook handed down, no mentor in the room, and no venture capital
                to cushion mistakes.
              </p>
              <p>
                My curriculum was tearing down computer hardware, reading open-source code at 3 AM,
                shooting thousands of lighting test frames, and building web apps that nobody asked for
                until I figured out how things actually click.
              </p>
              <p>
                Most of those early years were defined by failure. Projects built that nobody visited.
                Videos uploaded to dead algorithms. Lines of code committed to repositories that never saw
                real production traffic. But every failed attempt left behind structured data.
              </p>
            </div>
          </section>

          {/* Keynote Monolith Quote */}
          <section className="autobio-quote-break anim-section">
            <blockquote className="autobio-pull-quote anim-slide-up">
              &ldquo;I haven’t built a giant conglomerate yet. I’m not rich, and I don’t pretend
              to be. But I am relentlessly disciplined, technically capable, and willing to work
              in broad daylight.&rdquo;
            </blockquote>
          </section>

          {/* Chapter II */}
          <section className="autobio-chapter anim-section">
            <div className="chapter-label anim-slide-up">
              <span>CHAPTER 02</span>
              <span className="chapter-label-line" aria-hidden="true" />
              <span>THE FRACTURED LANDSCAPE</span>
            </div>

            <h2 className="chapter-heading anim-slide-up">
              The modern digital world has broken itself into silos.
            </h2>

            <div className="chapter-prose anim-slide-up">
              <p>
                Over the years, watching businesses launch and disintegrate, I saw the modern digital
                landscape fracture into three dysfunctional corners:
              </p>

              <div className="autobio-silos-text">
                <div className="silo-entry">
                  <span className="silo-entry-name">Designers</span>
                  <p>
                    who make things that look gorgeous and win awards, but convert terribly because they
                    do not understand unit economics or checkout friction.
                  </p>
                </div>

                <div className="silo-entry">
                  <span className="silo-entry-name">Engineers</span>
                  <p>
                    who write immaculate, architecturally pure software for products that nobody ever finds
                    because they dismiss audience distribution as beneath them.
                  </p>
                </div>

                <div className="silo-entry">
                  <span className="silo-entry-name">Marketers</span>
                  <p>
                    who sell pipe dreams and high-pressure funnels because they lack the technical craft to
                    actually build or deliver the experience they promised.
                  </p>
                </div>
              </div>

              <p>
                When a system fails, each silo points at the other. The designer blames the copy.
                The copywriter blames the dev team. The developer blames the client brief.
                Meanwhile, the business quietly bleeds out.
              </p>
            </div>
          </section>

          {/* Chapter III */}
          <section className="autobio-chapter anim-section">
            <div className="chapter-label anim-slide-up">
              <span>CHAPTER 03</span>
              <span className="chapter-label-line" aria-hidden="true" />
              <span>THE HYBRID OPERATOR</span>
            </div>

            <h2 className="chapter-heading anim-slide-up">
              One person across the entire chain.
            </h2>

            <div className="chapter-prose anim-slide-up">
              <p>
                I chose a different path: becoming a <strong>hybrid operator</strong>.
              </p>
              <p>
                Someone who refuses to respect department borders. Someone who can hold the cinema camera,
                master the color science, architect the Next.js database, hook up the automated webhook
                pipelines, and write the direct-response copy that moves real human beings.
              </p>
              <p>
                Speed and truth do not come from larger committees or eight-week syncs. They come from
                compressed feedback loops—where the person observing the constraint is the exact same person
                engineering the solution.
              </p>
            </div>
          </section>

          {/* Chapter IV */}
          <section className="autobio-chapter anim-section">
            <div className="chapter-label anim-slide-up">
              <span>CHAPTER 04</span>
              <span className="chapter-label-line" aria-hidden="true" />
              <span>THE LABORATORY</span>
            </div>

            <h2 className="chapter-heading anim-slide-up">
              This website is my scientific journal.
            </h2>

            <div className="chapter-prose anim-slide-up">
              <p>
                I tested and failed at 99% of digital strategies—the retainers that went nowhere,
                the ad campaigns that burned budget, the bloated templates that slowed down checkout.
              </p>
              <p>
                Failure is not the opposite of progress; it is structured data. I document every experiment
                in broad daylight so we can discard the 99% of noise and double down on the 1% of durable
                levers that actually move businesses.
              </p>
              <p className="autobio-closing-line">
                Investigate. Test. Build what survives.
              </p>
            </div>
          </section>

          {/* Colophon Sign-off */}
          <footer className="autobio-colophon anim-section">
            <div className="colophon-divider anim-slide-up" aria-hidden="true" />
            <div className="colophon-text anim-slide-up">
              <p className="colophon-author">Shohanur Rahman Talukder (SRT Roney)</p>
              <p className="colophon-location">Savar, Dhaka, Bangladesh · 23.8583° N, 90.2667° E</p>
              <p className="colophon-meta">Documented continuously in the open.</p>
            </div>
          </footer>
        </article>
      </main>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="autobio-site-footer">
        <span>© 2026 SRT RONEY</span>
        <Link href="/">Return to journal ↑</Link>
      </footer>
    </div>
  );
}
