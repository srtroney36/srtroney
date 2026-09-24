import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Collaboration",
  description: "Propose a project and build the right multidisciplinary team for your next experiment with SRT Roney.",
};

export default function CollaboratePage() {
  return <main className="detail-page collaborate-page"><Link className="back-link" href="/#collaborate">← Back to the field notes</Link><p className="eyebrow">06 / Client collaboration</p><h1>The right team for the right experiment.</h1><p className="detail-lead">You bring the problem. I help clarify the experiment, find the right specialists, and keep the work moving from first brief to useful outcome.</p><div className="collaboration-steps"><article><span>01</span><h2>Tell me what is stuck.</h2><p>Share the business problem, opportunity, or idea you want to test.</p></article><article><span>02</span><h2>Get a focused team.</h2><p>I match the work with the right combination of creative, technical, media, or growth talent.</p></article><article><span>03</span><h2>Run a useful experiment.</h2><p>One clear direction, a small capable team, and evidence you can use for the next decision.</p></article></div><section className="collaboration-cta"><p className="eyebrow">Start with a short brief</p><h2>What should we test?</h2><p>Send the context, desired outcome, timeline, and any constraints. I will reply with the first useful question.</p><a className="button button-primary" href="mailto:hello@srtroney.com?subject=Project%20experiment%20brief">Send a project brief <span>↗</span></a></section></main>;
}
