import type { ReactNode } from "react";
import Link from "next/link";

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

export default function ProjectCta({ eyebrow = "Prove it before you build it", title = "Ready to scope your project?", emphasis = "Start with a 2-week pilot.", children }: { eyebrow?: string; title?: string; emphasis?: string; children?: ReactNode }) {
  return <section className="project-cta"><div className="container project-cta-inner"><div><p className="eyebrow">{eyebrow}</p><h2>{title}<br /><em>{emphasis}</em></h2><p className="project-cta-meta">Fixed fee · Two weeks · Your data · Full credit toward production</p></div><Link className="button button-primary" href="/#contact">{children ?? "Reserve your pilot slot"}<Arrow /></Link></div></section>;
}
