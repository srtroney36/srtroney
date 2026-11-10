import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="srt roney home">
          <span className="brand-badge">
            <Image src="/FAVICON-BLACK.svg" alt="" width={34} height={34} priority />
          </span>
          <span>srt roney</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="mailto:hello@srtroney.com?subject=Project%20proposal">Contact</a>
        </nav>
      </header>

      {/* 1. HERO */}
      <section id="top" className="hero-section">
        <div className="hero-container">
          <h1 className="hero-first-line">
            I tested and <span className="hero-text-fade">failed at</span>{" "}
            <span className="hero-text-fail-stat">99%</span> of digital strategies.
          </h1>

          <div className="hero-visual-stage">
            <div className="hero-glow" aria-hidden="true" />

            <div className="hero-portrait-frame">
              <Image
                className="hero-portrait"
                src="/srt roney hero image.png"
                alt="SRT Roney"
                width={1122}
                height={1402}
                priority
              />
              <Image
                className="hero-portrait-blur"
                src="/srt roney hero image.png"
                alt=""
                width={1122}
                height={1402}
                aria-hidden="true"
                priority
              />

              {/* Glass container matching exact width of the photo */}
              <div className="hero-photo-glass">
                <p className="hero-glass-text">
                  Trying to document<br />
                  <span className="hero-text-highlight">the 1% that survives.</span>
                </p>
              </div>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:hello@srtroney.com?subject=Project%20proposal">
                Bring me a problem <span>↗</span>
              </a>
              <a
                className="button button-secondary button-hero-youtube"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>Watch me on youtube</span>
                <span className="youtube-play-glow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 SRT RONEY</span>
        <span>Investigate. Test. Build what works.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
