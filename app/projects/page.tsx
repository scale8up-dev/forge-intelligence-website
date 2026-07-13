/* eslint-disable @next/next/no-html-link-for-pages -- Static hosting uses document navigation between pre-rendered routes. */
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "./data";

export const metadata: Metadata = {
  title: "Projects | Forge Intelligence AI",
  description: "Explore digital products, AI systems, web platforms, and mobile applications built by Forge Intelligence AI.",
};

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

export default function ProjectsPage() {
  return (
    <main className="site-main projects-page">
      <div className="ambient-field" aria-hidden="true"><i /><i /><i /></div>
      <header className="site-header services-header">
        <div className="container nav-wrap">
          <a className="brand" href="/" aria-label="Forge Intelligence AI home"><span className="brand-mark"><Image src="/forge-intelligence-logo.png" alt="" width={48} height={48} priority unoptimized /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a>
          <nav className="services-nav" aria-label="Projects navigation"><a href="/#about">About</a><a href="/services">Services</a><a href="/#process">Approach</a><a href="/#outcomes">What we build</a><a className="nav-cta" href="/#contact">Start a project <Arrow /></a></nav>
        </div>
      </header>

      <section className="projects-hero">
        <div className="container projects-hero-grid">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> Forge / Selected work</p><h1>Useful systems.<br /><em>Built to move.</em></h1></div>
          <p>Digital products, AI systems, web platforms, and mobile experiences shaped around real people and real business work.</p>
        </div>
      </section>

      <section className="projects-catalogue" aria-label="Forge projects">
        <div className="container">
          <div className="projects-catalogue-head"><span>{String(projects.length).padStart(2, "0")} projects</span><span>AI · Web · Mobile</span></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                  <Image src={project.image} alt={`${project.name} project interface`} width={960} height={560} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </a>
                <div className="project-card-body"><p>{project.category}</p><h2>{project.name}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.url} target="_blank" rel="noreferrer">View project <Arrow /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-closing"><div className="container projects-closing-inner glass-card"><div><p className="eyebrow">Your project could be next</p><h2>Bring us the challenge.<br /><em>We will shape the system.</em></h2></div><a className="button button-primary" href="/#contact">Start a project <Arrow /></a></div></section>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="/"><span className="brand-mark"><Image unoptimized src="/forge-intelligence-logo.png" alt="" width={42} height={42} /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a><p>Development, strategy, and AI automation<br />for ambitious businesses.</p><div className="footer-links"><div><span>Explore</span><a href="/#about">About</a><a href="/services">Services</a><a href="/projects">Projects</a></div><div><span>Connect</span><a href="mailto:domingo@oneenterprise.ai">Email us</a><a href="/#contact">Start a project</a><a href="/#faq">FAQ</a></div></div></div><div className="container footer-bottom"><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="/">Privacy</a><a href="/">Terms</a></span></div></footer>
    </main>
  );
}
