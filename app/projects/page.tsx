/* eslint-disable @next/next/no-html-link-for-pages -- Static hosting uses document navigation between pre-rendered routes. */

import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "./data";
import Header from "../Header";
import ProjectCta from "../ProjectCta";

export const metadata: Metadata = {
  title: "Projects | Forge Intelligence AI",
  description:
    "Explore digital products, AI systems, web platforms, and mobile applications built by Forge Intelligence AI.",
};

function Arrow() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <main className="site-main projects-page">
      <div className="ambient-field" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <Header />

      <section className="projects-hero">
        <div className="projects-hero-orb" aria-hidden="true" />
        <div className="container projects-hero-grid">
          <div className="projects-hero-content">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Forge / Selected work
            </p>

            <h1>
              Useful systems.
              <br />
              <em>Built to move.</em>
            </h1>
          </div>

          <div className="projects-visual-panel">
            <p className="projects-hero-description">
              Digital products, AI systems, web platforms, and mobile
              experiences designed around real people and meaningful business
              outcomes.
            </p>
            
            <div className="projects-visual-deco glass-card">
              <div className="deco-header">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="deco-title">Selected Case Studies</span>
              </div>
              <div className="deco-body">
                <div className="deco-row">
                  <span className="label">AI Sizing Engine</span>
                  <span className="val">Delivered</span>
                </div>
                <div className="deco-row">
                  <span className="label">Custom SaaS CRM</span>
                  <span className="val">Active</span>
                </div>
                <div className="deco-row">
                  <span className="label">Mobile Fitness App</span>
                  <span className="val">Scale Stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="projects-catalogue"
        aria-labelledby="projects-heading"
      >
        <div className="container">
          <header className="projects-catalogue-head">
            <div>
              <span className="projects-count">
                {String(projects.length).padStart(2, "0")}
              </span>

              <h2 id="projects-heading">Selected projects</h2>
            </div>

            <span className="projects-disciplines">
              AI · Web · Mobile
            </span>
          </header>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <a
                  className="project-image"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} project`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} project interface`}
                    width={720}
                    height={450}
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 900px) 50vw,
                      (max-width: 1280px) 33vw,
                      25vw
                    "
                    unoptimized
                  />

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </a>

                <div className="project-card-body">
                  <div className="project-card-heading">
                    <h3>{project.name}</h3>

                    <a
                      className="project-arrow-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name}`}
                    >
                      <Arrow />
                    </a>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div
                    className="project-tags"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}

                    {project.tags.length > 3 && (
                      <span aria-label={`${project.tags.length - 3} more technologies`}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectCta eyebrow="Your project could be next" title="Bring us the challenge." emphasis="We will shape the system." />

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="/">
            <span className="brand-mark">
              <Image
                unoptimized
                src="/forge-intelligence-logo.png"
                alt=""
                width={42}
                height={42}
              />
            </span>

            <span className="brand-name">
              <strong>Forge</strong>
              <span>Intelligence AI</span>
            </span>
          </a>

          <p>
            Development, strategy, and AI automation
            <br />
            for ambitious businesses.
          </p>

          <div className="footer-links">
            <div>
              <span>Explore</span>
              <a href="/#about">About</a>
              <a href="/services">Services</a>
              <a href="/projects">Projects</a>
            </div>

            <div>
              <span>Connect</span>
              <a href="mailto:domingo@oneenterprise.ai">Email us</a>
              <a href="/#contact">Start a project</a>
              <a href="/#faq">FAQ</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Forge Intelligence AI</span>

          <span>
            Built with intent <span className="footer-dot">●</span>
          </span>

          <span>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
