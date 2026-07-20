import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import ProjectCta from "../ProjectCta";
import TeamGrid from "./TeamGrid";

export const metadata: Metadata = {
  title: "About Us | Forge Intelligence AI",
  description: "Meet the founding team behind Forge Intelligence AI. We bridge the gap between ambitious business vision and custom AI execution.",
};

const rootContactHref = "/contact";

const team = [
  {
    name: "Domingo Silvas",
    role: "CEO & Co-Founder",
    bio: "Domingo Silvas is CEO and Co-Founder of Forge Intelligence AI, where he turns complex business challenges into clear strategies and practical systems.",
    details: [
      "He brings more than 25 years of entrepreneurial, operational, and technology leadership to a simple belief: technology should solve meaningful problems, create measurable value, and move a business forward.",
      "Before co-founding Forge Intelligence AI, Domingo built and led more than a dozen companies across technology, consulting, marketing, and business development, achieving seven successful exits ranging from seven to ten figures. His experience includes supporting technology initiatives connected to NASA's manned space program, advising organizations through enterprise growth and transformation, and helping founders move ideas from early-stage concepts into market-ready businesses.",
      "At Forge, Domingo leads the company's vision, business strategy, and client engagement. He works closely with executives, founders, and product owners to identify the right opportunities, clarify the business model, and connect strategy to implementation. His focus is ensuring that every solution begins with a real business need and is designed to improve operations, create new revenue opportunities, or strengthen the organization's ability to scale.",
      "Domingo is also an international speaker, business strategist, podcast host, and author of The Infinite Climb. He has spoken in more than 20 countries and developed business frameworks that help leaders move from ideas to execution with greater clarity and accountability. Throughout his work, he remains focused on helping entrepreneurs and organizations build stronger foundations, embrace practical innovation, and create businesses that can grow beyond their founders."
    ],
    image: "/images/domingo-silvas-team.png"
  },
  {
    name: "Dr. Kelley Gurley",
    role: "COO & Co-Founder",
    bio: "Dr. Kelley Gurley is COO and Co-Founder of Forge Intelligence AI, where she turns strategy into systems that move real work forward.",
    details: [
      "She brings 25 years of enterprise technology and digital transformation leadership to a simple belief: technology should make a business clearer, not more complicated.",
      "Before founding Forge Intelligence AI, Dr. Kelley led large-scale transformation initiatives across healthcare and life sciences, including roles at Takeda, Fresenius, and MedStar. She currently serves as Head of the Transformation and Technology PMO at McCormick and Company, where she connects business outcomes to the systems that deliver them. She holds a Ph.D. in Human-Centered Computing and teaches as an adjunct professor at Northeastern University and Bentley University.",
      "At Forge, Dr. Kelley keeps strategy, development, and AI automation in the same conversation. She works closely with founders and product owners to understand the business problem first, then shapes the product, roadmap, and automation around it. Her focus reflects what guides everything Forge builds: clear foundations, practical AI, and solutions that scale as the business grows.",
      "Dr. Kelley is also a bestselling author, TEDx speaker, and international keynote speaker. She invests in and mentors early-stage founders and is a longtime advocate for microenterprise lending for women entrepreneurs worldwide. She writes and speaks widely about the human side of transformation and why the systems that last are the ones built with care."
    ],
    image: "/images/kelley-gurley-team.png"
  },
  {
    name: "Hamza Adnan",
    role: "CTO",
    bio: "Hamza Adnan leads Forge's technology vision, turning architecture, AI systems, and engineering into products that grow with the business.",
    details: [
      "Alongside his work at Forge, Hamza is CEO and Founder of Osmium Labs and has held technology leadership roles as CTO and Co-Founder of Scale8UP and Business Evolution AI. His experience spans software and AI architecture, engineering management, scalable SaaS development, rapid product delivery, and technical team leadership. Through Osmium Labs, he leads practical AI-powered MVP development, combining product strategy, rapid prototyping, integrations, and automation to move ideas from concept to production.",
      "At Forge, Hamza works closely with founders, executives, product owners, and engineering teams to translate business requirements into dependable technical systems. He helps define the architecture, technology roadmap, development approach, and AI capabilities behind each solution, keeping technical decisions connected to the outcomes the business is trying to achieve.",
      "Hamza brings a hands-on approach to technical leadership across backend and full-stack engineering, cloud-ready application architecture, artificial intelligence, workflow automation, system integrations, testing, deployment, and production reliability. His work reflects practical experience with Python, FastAPI, React, TypeScript, modern development environments, and resilient backend engineering patterns.",
      "As an engineering leader, Hamza emphasizes clear ownership, thoughtful architecture, disciplined execution, and maintainable systems. He works to ensure engineers understand not only what they are building, but why it matters, how it supports the wider business, and how it can evolve without creating unnecessary technical debt.",
      "Hamza holds a Bachelor of Science in Information Technology from the University of the Punjab and completed his A Levels in Computer Science at Beaconhouse Defence Campus. Across his work, he remains focused on turning ambitious ideas into secure, useful, and production-ready systems—and making AI a dependable part of how an organization works rather than another layer of complexity."
    ],
    image: "/images/hamza-adnan-team.png"
  },
  {
    name: "Gregory Vaughn",
    role: "Director of Operations",
    bio: "Gregory Vaughn keeps Forge's delivery running, bringing over 30 years of large-scale project leadership to every engagement.",
    details: [
      "Gregory brings more than 30 years of leadership in large-scale project management to Forge, with a career spent keeping complex programs on schedule, on budget, and accountable to the outcomes they promised.",
      "As Director of Operations, he owns the operating rhythm behind Forge's delivery loop — coordinating the strategy, development, and AI automation workstreams so every engagement moves with clear ownership and dependable timelines.",
      "His focus is operational excellence with measurable impact: making sure the systems Forge ships are not only built well, but land well — adopted by the team, measured against the baseline, and improved after launch."
    ],
    image: "/images/greg-vaughn-team.png"
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
    desc: "We deliver a working prototype built on your real data during the two-week pilot, ready to connect to the tools you already use."
  },
  {
    step: "05",
    name: "Evolve",
    desc: "We monitor execution logs, optimize token costs, and keep improving the system through an ongoing care plan."
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
      <section className="about-hero" data-motion-reveal>
        <div className="about-hero-orb" aria-hidden="true" />
        <div className="container about-hero-grid">
          <div className="about-hero-content motion-stagger">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Forge Intelligence AI
            </p>
            <h1>
              <span className="reveal-line"><span className="reveal-line-text">Strategy, engineering,</span></span>
              <span className="reveal-line"><span className="reveal-line-text"><em>and AI, working as one team.</em></span></span>
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
          
          <aside className="about-hero-statement" data-motion-item>
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
      <section className="team-section" aria-labelledby="team-heading" data-motion-reveal>
        <div className="container">
          <header className="team-section-head" data-motion-item>
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />The team behind Forge</p>
              <h2 id="team-heading">Meet the people who make the work move.</h2>
            </div>
            <p>Strategy, engineering, and operations in one delivery team. Meet the people who stay close to the problem, the build, and the outcome.</p>
          </header>

          <TeamGrid team={team} />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="method-section" aria-labelledby="method-heading" data-motion-reveal>
        <div className="container">
          <header className="method-section-head" data-motion-item>
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                Our delivery framework
              </p>
              <h2 id="method-heading">The FORGE Method™</h2>
            </div>
            <p>A five-part operating rhythm that keeps strategy, build quality, and measurable progress connected.</p>
          </header>

          <div className="method-grid motion-stagger">
            {methodology.map((m) => (
              <div key={m.step} className="method-card glass-card" data-motion-item>
                <span className="method-step">{m.step}</span>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-feature" aria-labelledby="about-feature-heading" data-motion-reveal>
        <div className="container">
          <div className="about-feature-panel" data-motion-item>
            <p className="about-feature-kicker"><i /> Built for the work ahead</p>
            <h2 id="about-feature-heading">The right technology should make the next decision clearer.</h2>
            <p>Forge brings strategy, software development, and AI automation into one focused delivery loop, so ambitious teams can move from an important idea to a useful system with confidence.</p>
          </div>
        </div>
      </section>
      <ProjectCta />

      {/* Footer */}
      <footer className="site-footer" data-motion-reveal="flow">
        <div className="container footer-top" data-motion-item>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">
              <Image
                unoptimized
                src="/forge-mark.png"
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
              <a href={rootContactHref}>Start your project</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom" data-motion-item>
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
