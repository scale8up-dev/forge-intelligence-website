import type { Metadata } from "next";
import Image from "next/image";
import Header from "../Header";
import ProjectCta from "../ProjectCta";

export const metadata: Metadata = {
  title: "About Us | Forge Intelligence AI",
  description: "Meet the founding team behind Forge Intelligence AI. We bridge the gap between ambitious business vision and custom AI execution.",
};

function Arrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const team = [
  {
    name: "Dr. Kelley Gurley",
    role: "Founding Member & Partner",
    bio: "Leads business integration strategy, model alignment, and client readiness programs to ensure high-impact AI deployment across enterprise workflows.",
    image: "/images/kelley-gurley.jpg"
  },
  {
    name: "Domingo Silvas",
    role: "Founding Member & CEO",
    bio: "CEO of Silvas Enterprise and Founder of Results Driven Strategy. Domingo directs business strategy, project scoping, and enterprise solution alignment.",
    image: "/images/domingo-silvas.jpg"
  },
  {
    name: "Muhammad Hamza Adnan",
    role: "Co-Founder & CTO",
    bio: "Machine Learning Engineer expert in GenAI, LLMs, and MLOps. AWS Solutions Architect building scalable AI-powered systems.",
    image: "/images/hamza-adnan.png"
  },
  {
    name: "Gregory Vaughn",
    role: "COO - Director of Operations",
    bio: "Over 30 years of leadership in large-scale project management, ensuring operational excellence and scalable AI solutions with measurable impact.",
    image: "/images/greg-vaughn.png"
  }
];

const methodology = [
  {
    step: "01",
    name: "Frame",
    desc: "We audit your manual workflows, define concrete baseline success metrics, and protect all operational data under strict NDAs."
  },
  {
    step: "02",
    name: "Orchestrate",
    desc: "We construct custom retrieval-grounded model logic, secure API integrations, and coordinate multi-agent system handoffs."
  },
  {
    step: "03",
    name: "Refine",
    desc: "We deploy safety guardrails, tone evaluations, and rigorous prompt-injection defenses to ensure absolute production stability."
  },
  {
    step: "04",
    name: "Generate",
    desc: "We deliver functional prototypes built on your real data within two weeks, integrating seamlessly into your existing SaaS platform."
  },
  {
    step: "05",
    name: "Evolve",
    desc: "We monitor execution logs, optimize token costs, and scale capabilities continuously on monthly Care Plan retainers."
  }
];

export default function AboutPage() {
  return (
    <main className="site-main about-page">
      <div className="ambient-field" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-orb" aria-hidden="true" />
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              The People Behind the Systems
            </p>
            <h1>
              Elite strategy.
              <br />
              <em>Custom execution.</em>
            </h1>
          </div>
          
          <div className="about-visual-panel">
            <p className="about-hero-description">
              Forge Intelligence AI was founded to bridge the gap between ambitious business vision and custom AI execution. We combine strategic product thinking, enterprise software development, and deep AI automation to build tools that work.
            </p>
            
            <div className="about-visual-deco glass-card">
              <div className="deco-header">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="deco-title">Forge Method™ Nodes</span>
              </div>
              <div className="deco-body">
                <div className="node-line">
                  <span className="node-label">Frame</span>
                  <span className="node-status green">Audit Ready</span>
                </div>
                <div className="node-line">
                  <span className="node-label">Orchestrate</span>
                  <span className="node-status blue">Multi-Agent</span>
                </div>
                <div className="node-line">
                  <span className="node-label">Evolve</span>
                  <span className="node-status cyan">Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" aria-labelledby="team-heading">
        <div className="container">
          <header className="team-section-head">
            <h2 id="team-heading">Our Team</h2>
          </header>

          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card glass-card">
                <div className="team-photo-wrap">
                  <Image
                    unoptimized
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    width={320}
                    height={320}
                    className="team-photo"
                  />
                </div>
                <div className="team-info">
                  <span className="team-role">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="method-section" aria-labelledby="method-heading">
        <div className="container">
          <header className="method-section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Our Delivery Framework
            </p>
            <h2 id="method-heading">The FORGE Method™</h2>
          </header>

          <div className="method-grid">
            {methodology.map((m) => (
              <div key={m.step} className="method-card glass-card">
                <span className="method-step">{m.step}</span>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ProjectCta />

      {/* Footer */}
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
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/projects">Projects</a>
            </div>
            <div>
              <span>Connect</span>
              <a href="mailto:domingo@oneenterprise.ai">Email us</a>
              <a href="/#contact">Start your project</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Forge Intelligence AI</span>
          <span>Built with intent <span className="footer-dot">●</span></span>
          <span>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
