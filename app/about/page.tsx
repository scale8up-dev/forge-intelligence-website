import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import ProjectCta from "../ProjectCta";

export const metadata: Metadata = {
  title: "About Us | Forge Intelligence AI",
  description: "Meet the founding team behind Forge Intelligence AI. We bridge the gap between ambitious business vision and custom AI execution.",
};

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
              Forge Intelligence AI
            </p>
            <h1>
              Strategy, engineering,
              <br />
              <em>and AI, working as one team.</em>
            </h1>
            <p className="about-hero-lede">
              We help ambitious businesses turn a real operational opportunity into a useful, dependable system.
            </p>
            <div className="about-hero-principles" aria-label="Forge principles">
              <span>01&nbsp;&nbsp; Start with evidence</span>
              <span>02&nbsp;&nbsp; Build for adoption</span>
              <span>03&nbsp;&nbsp; Improve in the open</span>
            </div>
          </div>
          
          <aside className="about-hero-statement">
            <p className="about-hero-card-label">Why Forge</p>
            <p className="about-hero-card-quote">
              Clear direction before code. A working system before scale.
            </p>
            <p className="about-hero-description">
              Forge was built to close the gap between a smart idea and the operational change it needs to create. Our team stays involved from the first decision through launch and improvement.
            </p>
            <div className="about-hero-card-footer">
              <span>Strategy</span><i /><span>Software</span><i /><span>AI automation</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" aria-labelledby="team-heading">
        <div className="container">
          <header className="team-section-head">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />The team behind Forge</p>
              <h2 id="team-heading">The people you build with.</h2>
            </div>
            <p>Strategy, engineering, and operations in one delivery team, close enough to make the work move.</p>
          </header>

          <div className="team-grid">
            {team.map((member, index) => (
              <article key={member.name} className="team-card glass-card">
                <span className="team-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="method-section" aria-labelledby="method-heading">
        <div className="container">
          <header className="method-section-head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                Our delivery framework
              </p>
              <h2 id="method-heading">The FORGE Method™</h2>
            </div>
            <p>A five-part operating rhythm that keeps strategy, build quality, and measurable progress connected.</p>
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
      <section className="about-feature" aria-labelledby="about-feature-heading">
        <div className="container">
          <div className="about-feature-panel">
            <p className="about-feature-kicker"><i /> Built for the work ahead</p>
            <h2 id="about-feature-heading">The right technology should make the next decision clearer.</h2>
            <p>Forge brings strategy, software development, and AI automation into one focused delivery loop, so ambitious teams can move from an important idea to a useful system with confidence.</p>
          </div>
        </div>
      </section>
      <ProjectCta />

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-top">
          <Link className="brand footer-brand" href="/">
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
          </Link>
          <p>
            Development, strategy, and AI automation
            <br />
            for ambitious businesses.
          </p>
          <div className="footer-links">
            <div>
              <span>Explore</span>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
            </div>
            <div>
              <span>Connect</span>
              <a href="mailto:domingo@oneenterprise.ai">Email us</a>
              <Link href="/#contact">Start your project</Link>
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
