import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="srt roney home">
          <Image src="/FAVICON-01.svg" alt="" width={34} height={34} priority />
          <span>srt roney</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#how-i-work">How I work</a>
          <a href="#work">Work</a>
          <a href="#ground-truth">Ground truth</a>
          <a href="#lab">The lab</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Bring me a problem</a>
        </nav>
      </header>

      {/* 1. HERO */}
      <section id="top" className="hero-section">
        <div className="eyebrow"><span className="live-dot" /> Independent builder / Savar, Bangladesh / 2026</div>
        <div className="hero-grid">
          <div className="hero-copy-column">
            <p className="hero-intro">Hi, I&apos;m <span>SRT Roney.</span></p>
            <h1>I investigate real problems, test solutions, and build what works.</h1>
            <p className="hero-copy">
              I build the useful parts of ambitious ideas. Working across technology, automation, marketing, creative, psychology, and digital systems—sometimes I build the solution myself, sometimes I assemble the right specialists.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Bring me a problem <span>↗</span></a>
              <a className="text-link" href="#work">Explore the work <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <Image className="hero-portrait" src="/SRT RONEY IMAGE.webp" alt="SRT Roney at work" width={1200} height={1600} priority />
            <span className="portrait-stamp">SRT / BUILDER<br />FIELD PORTRAIT 001</span>
            <aside className="lab-note">
              <div className="note-topline"><span>FIELD NOTE 001</span><span>ACTIVE</span></div>
              <p className="note-label">How I operate</p>
              <p className="note-title">The best work starts where the brief gets uncomfortable.</p>
              <p className="note-body">I don&apos;t start with a service checklist. I isolate the bottleneck keeping a business stuck, test the hypothesis, and build what actually works.</p>
              <div className="note-footer"><span>Last updated</span><strong>24 SEP 2026</strong></div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. HOW I WORK */}
      <section id="how-i-work" className="manifesto-section">
        <div className="manifesto-intro">
          <div className="heading-with-link">
            <Link className="section-link" href="/manifesto" aria-label="Read the full manifesto" title="Read the full manifesto">Manifesto <span>↗</span></Link>
            <div>
              <p className="eyebrow">01 / Methodology</p>
              <h2>I don&apos;t start with a service. I start with a problem.</h2>
            </div>
          </div>
          <p>The best work starts where the brief gets uncomfortable. Instead of selling disconnected deliverables, I run an investigation: uncover what is actually stuck, form a testable hypothesis, build the leanest solution, and measure the real outcome.</p>
        </div>
        <div className="manifesto-list">
          <div>
            <span>01</span>
            <p><strong>Problem &amp; Hypothesis:</strong> Isolate the real constraint and form a testable bet before touching production code or ad spend.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>Test &amp; Build:</strong> Deploy the fastest working prototype using whatever tools the problem demands—code, automation, or creative.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Measure &amp; Learn:</strong> Track whether a business metric actually moved. Retain the data, discard what failed, and scale what works.</p>
          </div>
          <blockquote>&quot;Problem → Hypothesis → Test → Build → Measure → Learn. Skills are just the tools.&quot;</blockquote>
        </div>
      </section>

      {/* 3. SELECTED WORK */}
      <section id="work" className="section-block">
        <div className="section-heading">
          <span className="section-index">02</span>
          <Link className="section-link" href="/work" aria-label="See the full work archive" title="See the full work archive">View work <span>↗</span></Link>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Evidence of problem-solving.</h2>
          </div>
        </div>
        <div className="work-grid">
          <article className="work-card work-card-featured">
            <span className="card-kicker">AUTOMATION / 2024</span>
            <h3>Less waiting, more follow-up.</h3>
            <p><strong>Problem:</strong> High-intent inbound leads went cold during manual intake.<br /><strong>What I did:</strong> Built an automated 45-second response and qualification pipeline.<br /><strong>Lesson:</strong> Speed to lead changes conversion far more than ad budget.</p>
            <strong>+340% speed to lead <span>↗</span></strong>
          </article>
          <article className="work-card">
            <span className="card-kicker">E-COMMERCE / 2022</span>
            <h3>From product to purchase.</h3>
            <p><strong>Problem:</strong> High customer acquisition costs with sub-1.0 initial ROAS.<br /><strong>What I did:</strong> Tested stripped-down landing pages, bundled offers, and creative angles.<br /><strong>Lesson:</strong> Friction in checkout kills traffic that marketing already paid for.</p>
            <strong>2.8 blended ROAS <span>↗</span></strong>
          </article>
          <article className="work-card">
            <span className="card-kicker">MEDIA / ONGOING</span>
            <h3>Attention is an input.</h3>
            <p><strong>Problem:</strong> Useful technical products failing from zero audience reach.<br /><strong>What I did:</strong> Ran documentary-style video experiments testing hook psychology and retention.<br /><strong>Lesson:</strong> Attention is an engineering input that can be quantified.</p>
            <strong>4.2M organic views <span>↗</span></strong>
          </article>
        </div>
      </section>

      {/* 4. GROUND TRUTH */}
      <section id="ground-truth" className="ground-truth-section">
        <div className="ground-truth-heading">
          <p className="eyebrow">03 / Ground truth</p>
          <h2>Things I&apos;ve actually done.</h2>
          <p>These are the tools and experiences I have accumulated while solving real problems—not a theoretical service list.</p>
        </div>
        <div className="evidence-grid">
          <article className="evidence-built">
            <h3><span>✓</span> I&apos;ve built</h3>
            <ul>
              <li>Production e-commerce stores with custom checkout logic</li>
              <li>Tailored internal management dashboards for local businesses</li>
              <li>100+ video campaigns from scripting to graded master</li>
              <li>Automated data-scraping workflows for lead discovery</li>
            </ul>
          </article>
          <article className="evidence-sold">
            <h3><span>✓</span> I&apos;ve sold</h3>
            <ul>
              <li>Commercial product photography and brand media</li>
              <li>Complete website redesigns with custom CMS setup</li>
              <li>Monthly growth consulting to local retail shops</li>
              <li>Custom automation solutions that save 10+ manual hours/wk</li>
            </ul>
          </article>
          <article className="evidence-tested">
            <h3><span>✓</span> I&apos;ve tested</h3>
            <ul>
              <li>Cold email vs personalized Loom video messaging</li>
              <li>Broad-audience Facebook targeting vs lookalikes in BD</li>
              <li>Short-form organic video algorithms across TikTok/YouTube</li>
              <li>Minimalist brutalist landing pages versus corporate templates</li>
            </ul>
          </article>
          <article className="evidence-failed">
            <h3><span>×</span> I&apos;ve failed at</h3>
            <ul>
              <li>Launching a digital asset store without an existing audience</li>
              <li>Overpromising turnaround times on bloated contracts</li>
              <li>Relying on third-party platform algorithm trends for traffic</li>
              <li>Spending weeks tweaking graphics instead of pitching clients</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 5. THE LAB */}
      <section id="lab" className="section-block lab-section">
        <div className="section-heading">
          <span className="section-index">04</span>
          <Link className="section-link" href="/lab" aria-label="Open the complete experiment log" title="Open the complete experiment log">Open lab <span>↗</span></Link>
          <div>
            <p className="eyebrow">The open lab</p>
            <h2>What I am investigating right now.</h2>
          </div>
        </div>
        <div className="experiment-list">
          <div className="experiment-row">
            <span className="status status-testing">Testing</span>
            <div>
              <h3>Can a sharp teardown beat a generic pitch?</h3>
              <p>50 tailored video audits for local e-commerce teams identifying high-friction revenue leaks.</p>
            </div>
            <span className="experiment-number">01</span>
          </div>
          <div className="experiment-row">
            <span className="status status-validated">Validated</span>
            <div>
              <h3>Do operational fixes command better pricing?</h3>
              <p>Packaging direct revenue-leak fixes instead of selling disconnected services.</p>
            </div>
            <span className="experiment-number">02</span>
          </div>
          <div className="experiment-row">
            <span className="status status-failed">Learned</span>
            <div>
              <h3>What does a failed launch leave behind?</h3>
              <p>Documenting live post-mortems, balance sheets, and the operational data that survives dead ideas.</p>
            </div>
            <span className="experiment-number">03</span>
          </div>
        </div>
      </section>

      {/* 6. POST-MORTEMS / THE GRAVEYARD */}
      <section id="graveyard" className="graveyard-section">
        <div className="graveyard-heading">
          <div>
            <p className="eyebrow">05 / Post-mortem repository</p>
            <h2>The graveyard.</h2>
            <p>Failed experiments are useful data. Ideas that crashed in reality—and what survived.</p>
          </div>
          <span className="buried-stamp">8 ideas buried</span>
        </div>
        <div className="burial-grid">
          <article>
            <div className="burial-meta"><span>BURIAL_01</span><span>LOST: ৳12,000</span></div>
            <h3>The &quot;all-in-one&quot; freelance retainer</h3>
            <p><strong>Expected:</strong> Clients want one person to handle videos, websites, SEO, and copywriting for ৳50,000/mo.</p>
            <p><strong>Reality:</strong> They thought I was a generalist who wasn&apos;t master of anything. Zero conversions.</p>
            <div className="burial-lesson"><strong>Lesson:</strong> Positioning as a generalist kills pricing power. Specialize on the spearhead, deliver generalism as back-end execution.</div>
          </article>
          <article>
            <div className="burial-meta"><span>BURIAL_02</span><span>LOST: 3 WEEKS TIME</span></div>
            <h3>Building the &quot;perfect&quot; design system first</h3>
            <p><strong>Expected:</strong> Spending 3 weeks tuning design tokens makes future production frictionless.</p>
            <p><strong>Reality:</strong> Product proposition changed on day 4. 100% of components discarded.</p>
            <div className="burial-lesson"><strong>Lesson:</strong> Polish is a form of procrastination. Sell before building design architecture.</div>
          </article>
          <article>
            <div className="burial-meta"><span>BURIAL_03</span><span>LOST: ৳8,500 ADS</span></div>
            <h3>Cold Meta ads to a free consultation call</h3>
            <p><strong>Expected:</strong> Business owners clicking Facebook ads will schedule calls to fix their website.</p>
            <p><strong>Reality:</strong> Leads were students and non-decision makers looking for free homework help.</p>
            <div className="burial-lesson"><strong>Lesson:</strong> High-intent B2B clients don&apos;t book random ads without existing authority or peer referral.</div>
          </article>
        </div>
        <p className="graveyard-footer">Failure isn&apos;t the opposite of progress. <strong>It is structured data.</strong></p>
      </section>

      {/* 7. FIELD DISPATCHES */}
      <section id="watch" className="watch-section">
        <div className="watch-heading">
          <div>
            <p className="eyebrow">06 / Dispatches from the field</p>
            <h2>See me investigate in public.</h2>
            <p>Video investigations, economic breakdowns, and live problem-solving uploaded on YouTube.</p>
          </div>
          <a className="button button-youtube" href="https://youtube.com" target="_blank" rel="noreferrer">Watch field notes <span>↗</span></a>
        </div>
        <div className="video-grid">
          <article className="video-card">
            <div className="video-frame"><span className="video-tag tag-yellow">Business tested</span><span className="play-button">▶</span><span className="video-duration">14:22</span></div>
            <div className="video-copy">
              <h3>How does a local vending machine actually make money in Bangladesh?</h3>
              <p>Unpacking the actual capital expenditures, restocking logistics, electricity fees, and real net profit margins.</p>
            </div>
          </article>
          <article className="video-card">
            <div className="video-frame"><span className="video-tag tag-cyan">I tried it</span><span className="play-button">▶</span><span className="video-duration">18:40</span></div>
            <div className="video-copy">
              <h3>I sent 100 cold outreach videos in 7 days: exactly what happened</h3>
              <p>The full screen recording of replies, ghosting, rude rejections, and the one client that actually booked.</p>
            </div>
          </article>
          <article className="video-card">
            <div className="video-frame"><span className="video-tag tag-red">Consumer psych</span><span className="play-button">▶</span><span className="video-duration">11:15</span></div>
            <div className="video-copy">
              <h3>Why bad websites sometimes outsell award-winning designs</h3>
              <p>Breaking down the cognitive load difference between slick agency portfolios and high-friction buying psychology.</p>
            </div>
          </article>
        </div>
      </section>

      {/* 8. TOOLKIT */}
      <section id="rabbit-hole" className="section-block rabbit-section">
        <div className="section-heading">
          <span className="section-index">07</span>
          <div>
            <p className="eyebrow">The toolkit</p>
            <h2>The tools I use to investigate problems.</h2>
            <p className="section-subtitle">Skills are instruments, not separate identities or disconnected services. I deploy whatever combination the problem requires.</p>
          </div>
        </div>
        <div className="rabbit-grid">
          <div>
            <span className="rabbit-label rabbit-yellow">Marketing</span>
            <p>SEO, direct response, ad economics, consumer behavior, and funnel friction analysis.</p>
          </div>
          <div>
            <span className="rabbit-label rabbit-pink">Creative</span>
            <p>Lighting, color, short-form pacing, sound design, and editorial message hierarchy.</p>
          </div>
          <div>
            <span className="rabbit-label rabbit-cyan">Tech &amp; code</span>
            <p>JavaScript, TypeScript, APIs, webhooks, automation workflows, and headless systems.</p>
          </div>
          <div>
            <span className="rabbit-label rabbit-green">Business</span>
            <p>Pricing mechanics, client operations, unit economics, positioning, and retention systems.</p>
          </div>
        </div>
      </section>

      {/* 9. ABOUT / JOURNEY */}
      <section id="journey" className="journey-section">
        <div className="section-heading">
          <span className="section-index">08</span>
          <div>
            <p className="eyebrow">The chronological map</p>
            <h2>How the toolkit was built.</h2>
            <p className="section-subtitle">Not an autobiography of victory—a log of how different disciplines were accumulated to approach problems from multiple angles.</p>
          </div>
        </div>
        <div className="journey-timeline">
          <article>
            <div className="journey-story">
              <span>PRE-2022</span>
              <h3>CHAPTER 00 — BEFORE ZERO</h3>
              <p>Curiosity-driven autodidact phase. Dissecting everything online, pulling apart templates, learning how computers, servers, and visual media function.</p>
            </div>
            <div className="journey-lesson">Key takeaway: Absorbed foundational computer literacy, but had no market direction.</div>
          </article>
          <article>
            <div className="journey-story">
              <span>2022 - 2023</span>
              <h3>CHAPTER 01 — THE CREATIVE YEARS</h3>
              <p>Deep dive into cameras, lighting, color grading in DaVinci Resolve, commercial product photography, and motion storytelling.</p>
            </div>
            <div className="journey-lesson">Key takeaway: Aesthetic taste developed, but learned that &quot;great art&quot; does not automatically produce revenue.</div>
          </article>
          <article>
            <div className="journey-story">
              <span>2023 - 2024</span>
              <h3>CHAPTER 02 — THE BUILDER</h3>
              <p>Building websites, custom WordPress setups, JavaScript, frontend architectures, databases, and automated workflows.</p>
            </div>
            <div className="journey-lesson">Key takeaway: Technical ability was solid, but building without audience or sales leads to ghost towns.</div>
          </article>
          <article>
            <div className="journey-story">
              <span>2024 - 2025</span>
              <h3>CHAPTER 03 — THE MARKETER</h3>
              <p>Performance marketing, Meta ads, SEO indexing, consumer psychology, conversion rate optimization, sales copy.</p>
            </div>
            <div className="journey-lesson">Key takeaway: Understood how traffic moves, but isolated marketing disconnected from product delivery falls flat.</div>
          </article>
          <article className="journey-current">
            <div className="journey-story">
              <span>2026 — PRESENT</span>
              <h3>CHAPTER 04 — THE RESET</h3>
              <p><strong>Starting again.</strong> Disjointed skills are not a business. Synthesizing creative, code, and marketing into one repeatable problem-solving method.</p>
            </div>
            <div className="journey-lesson">&quot;Now I am synthesizing every single piece into one honest digital lab. This is where the true experiment begins.&quot;</div>
          </article>
        </div>
      </section>

      {/* 10. ABOUT / DOSSIER */}
      <section id="about" className="about-section">
        <div className="about-dossier">
          <p className="eyebrow">09 / Dossier</p>
          <div className="about-heading-row">
            <h2>Who the hell is Roney?</h2>
            <Link className="section-link" href="/about" aria-label="Open the full profile" title="Open the full profile">About me <span>↗</span></Link>
          </div>
          <div className="about-meta">
            <span>Identifier: SRT Roney</span>
            <span>Location: Savar, Dhaka, Bangladesh</span>
            <span>Discipline: Hybrid operator</span>
          </div>
        </div>
        <div className="about-copy">
          <p>I&apos;m Roney. A curious person who got lost somewhere between cinema cameras, lines of code, consumer psychology, marketing campaigns, and the internet.</p>
          <p>I&apos;ve spent thousands of hours learning tools, testing software, mastering lighting, and figuring out how to build digital experiences from zero. I&apos;ve had projects succeed, and I&apos;ve had projects collapse flat on their face.</p>
          <p>I haven&apos;t built a giant conglomerate yet. I&apos;m not rich, and I don&apos;t pretend to be. But I am relentlessly disciplined, technically capable, and willing to work in broad daylight. <strong>This website is my scientific journal.</strong></p>
        </div>
      </section>

      {/* 11. TALENT NETWORK */}
      <section id="talent" className="talent-section">
        <div>
          <p className="eyebrow">10 / Specialist network</p>
          <h2>Your talent, matched to meaningful work.</h2>
          <p>When a complex problem requires more than one discipline, I assemble curated specialists—designers, developers, editors, strategists, and operators. If you have exceptional craft and want to work on real, focused experiments without marketplace noise, join the network.</p>
        </div>
        <div className="talent-panel">
          <span>CURATED NETWORK / SPECIALIST ROSTER</span>
          <strong>Are you a specialist looking for the right challenge?</strong>
          <Link className="button button-primary" href="/talent">Join the talent network <span>↗</span></Link>
        </div>
      </section>

      {/* 12. COLLABORATE / CLIENT PROJECTS */}
      <section id="collaborate" className="collaborate-section">
        <div>
          <p className="eyebrow">11 / Client collaboration</p>
          <h2>Find the right team for the right problem.</h2>
          <p>Have an ambitious project or a bottleneck that spans multiple disciplines? I don&apos;t personally do every single task—I isolate the core problem and assemble the right solution. Tell me what you are trying to make, fix, or test.</p>
        </div>
        <div className="collaborate-flow">
          <div>
            <span>01</span>
            <strong>Understand the problem</strong>
            <p>We clarify the outcome, isolate constraints, and define the kind of help you actually need.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Assemble the team</strong>
            <p>I match the experiment with the right combination of vetted specialist skills.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Run the work</strong>
            <p>You get one accountable point of contact and a solution built around measurable progress.</p>
          </div>
          <Link className="button button-primary" href="/collaborate">Propose an experiment <span>↗</span></Link>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section id="contact" className="contact-section">
        <p className="eyebrow">12 / Direct line</p>
        <h2>Have a real problem worth testing?</h2>
        <p>Tell me what is stuck. I will come back with a useful first question.</p>
        <a className="button button-light" href="mailto:hello@srtroney.com?subject=Project%20proposal">hello@srtroney.com <span>↗</span></a>
      </section>


      <footer className="site-footer">
        <span>© 2026 SRT RONEY</span>
        <span>Investigate. Test. Build what works.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
