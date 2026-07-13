/* eslint-disable @next/next/no-html-link-for-pages -- Static hosting uses document navigation between pre-rendered routes. */
import Image from "next/image";

const serviceDetails = [
  {
    id: "development",
    number: "01",
    eyebrow: "Development",
    title: "Digital products that are ready for real work.",
    description:
      "We design and develop high-performing digital products that are fast, scalable, and easy to use.",
    services: [
      "Custom website development",
      "Web application development",
      "SaaS product development",
      "Mobile application development",
      "E-commerce solutions",
      "API and third-party integrations",
      "Platform maintenance and optimisation",
    ],
    flow: ["Scope", "Build", "Integrate", "Release"],
    note: "A product path shaped around the people using it and the work it needs to support.",
  },
  {
    id: "strategy",
    number: "02",
    eyebrow: "Strategy",
    title: "A clearer path before development begins.",
    description:
      "We help you make confident technology decisions by defining the right product, features, technology, and roadmap around your business goals.",
    services: [
      "Digital product strategy",
      "Technology consulting",
      "Product discovery and planning",
      "MVP definition",
      "User journey mapping",
      "Technical roadmaps",
      "Process improvement",
      "Growth and scalability planning",
    ],
    flow: ["Discover", "Prioritise", "Roadmap", "Align"],
    note: "One focused direction for the business problem, product experience, and technical plan.",
  },
  {
    id: "ai-automations",
    number: "03",
    eyebrow: "AI automations",
    title: "Automation that keeps useful work moving.",
    description:
      "We create intelligent automation systems that reduce manual work, connect your tools, and help your team operate more efficiently.",
    services: [
      "AI agents and assistants",
      "Automated business workflows",
      "CRM and sales automation",
      "Customer support automation",
      "Lead generation and qualification systems",
      "Reporting and data automation",
      "Internal knowledge assistants",
      "Third-party platform integrations",
    ],
    flow: ["Signal", "Route", "Assist", "Review"],
    note: "Practical systems for repetitive work, connected information, and better day-to-day decisions.",
  },
];

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MenuIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export default function ServicesPage() {
  return (
    <main className="site-main services-page">
      <div className="services-ambient" aria-hidden="true"><i /><i /></div>
      <header className="site-header services-header">
        <div className="container nav-wrap">
          <a className="brand" href="/" aria-label="Forge Intelligence AI home">
            <span className="brand-mark"><Image src="/forge-intelligence-logo.png" alt="" width={48} height={48} priority unoptimized /></span>
            <span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span>
          </a>
          <nav className="services-nav" aria-label="Services navigation">
            <a href="/#about">About</a>
            <a href="#development">Development</a>
            <a href="#strategy">Strategy</a>
            <a href="#ai-automations">AI automations</a>
            <a href="/projects">Projects</a>
            <a className="nav-cta" href="/#contact">Start a project <Arrow /></a>
          </nav>
          <details className="static-mobile-menu">
            <summary aria-label="Open navigation"><MenuIcon /></summary>
            <nav aria-label="Mobile services navigation">
              <a href="/#about">About</a><a href="/services">Services</a><a href="/#process">Approach</a><a href="/projects">Projects</a><a href="/#outcomes">What we build</a><a href="/#faq">FAQ</a><a className="nav-cta" href="/#contact">Start a project <Arrow /></a>
            </nav>
          </details>
        </div>
      </header>

      <section className="services-hero">
        <div className="container services-hero-grid">
          <div className="services-hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Forge / Capabilities</p>
            <h1>Three disciplines.<br /><em>One delivery loop.</em></h1>
            <p>Choose the support you need—strategy to set direction, development to bring it to life, or AI automation to keep it moving.</p>
            <div className="services-hero-actions">
              <a className="button button-primary" href="/#contact">Start your project <Arrow /></a>
              <a className="text-link" href="#development">Compare the services <Arrow /></a>
            </div>
          </div>
          <div className="services-orbit-panel services-signal-board" role="img" aria-label="Forge capability signal board: strategy, development, and AI automations connected in one delivery loop">
            <div className="signal-board-topline"><span>FORGE / CAPABILITY SIGNALS</span><i><b /></i></div>
            <div className="signal-route" aria-hidden="true"><i /><i /><i /></div>
            <div className="signal-modules">
              <div className="signal-module"><span>01 / Strategy</span><strong>Focus the decision.</strong><small>Business goals, priorities, and the roadmap.</small></div>
              <div className="signal-module is-active"><span>02 / Development</span><strong>Build the system.</strong><small>Digital products ready for real work.</small></div>
              <div className="signal-module"><span>03 / AI automation</span><strong>Keep work moving.</strong><small>Connected workflows for the team.</small></div>
            </div>
            <div className="signal-board-foot"><span>ONE CONNECTED DELIVERY LOOP</span><span>01 — 03</span></div>
          </div>
        </div>
      </section>

      <section className="delivery-current" aria-labelledby="delivery-current-title">
        <div className="container delivery-current-shell">
          <div className="delivery-current-visual" aria-hidden="true">
            <div className="current-noise" />
            <div className="current-route current-route-one" />
            <div className="current-route current-route-two" />
            <div className="current-route current-route-three" />
            <div className="current-kicker"><i /> FORGE / DELIVERY CURRENT</div>
            <div className="current-copy"><span>CONNECTED DELIVERY</span><strong>Work<br /><em>in motion.</em></strong><small>A clear path from the first decision to the system your team can use.</small></div>
            <div className="current-meter"><span>01</span><i><b /></i><span>03</span></div>
          </div>
          <div className="delivery-current-detail">
            <p className="eyebrow">How the work connects</p>
            <h2 id="delivery-current-title">A delivery system that keeps the <em>important work moving.</em></h2>
            <p className="delivery-current-lede">We connect business context, product development, and automation in one practical delivery loop.</p>
            <ol className="delivery-current-list">
              <li><span>01</span><strong>Define the direction</strong><p>Align goals, priorities, user needs, and the right technical path.</p></li>
              <li><span>02</span><strong>Build and connect</strong><p>Create the product, integrations, and reliable foundations it needs.</p></li>
              <li><span>03</span><strong>Automate useful work</strong><p>Connect the workflow so the team can move with less manual effort.</p></li>
            </ol>
            <div className="delivery-current-output"><span>DELIVERY FOCUS</span><strong>Strategy → software → automation</strong></div>
            <a className="text-link" href="/#contact">Start a conversation <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="services-jump" aria-label="Jump to a service">
        <div className="container">
          {serviceDetails.map((service) => (
            <a href={`#${service.id}`} key={service.id}><span>{service.number}</span>{service.eyebrow}<Arrow /></a>
          ))}
        </div>
      </section>

      <section className="services-detail-list" aria-label="Forge services">
        {serviceDetails.map((service, serviceIndex) => (
          <article className={serviceIndex % 2 === 0 ? "service-detail" : "service-detail service-detail-reversed"} id={service.id} key={service.id}>
            <div className="container service-detail-grid">
              <div className="service-detail-copy">
                <p className="eyebrow"><span className="service-detail-number">{service.number}</span> {service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p className="service-detail-lede">{service.description}</p>
                <ul>
                  {service.services.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}
                </ul>
              </div>
              <div className="service-flow-card glass-card">
                <div className="service-flow-heading"><span>FORGE / WORKFLOW</span><i><b /></i></div>
                <p>{service.note}</p>
                <ol aria-label={`${service.eyebrow} workflow`}>
                  {service.flow.map((step, index) => (
                    <li className={index === 1 ? "is-current" : undefined} key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </li>
                  ))}
                </ol>
                <div className="service-flow-line" aria-hidden="true"><i /><i /><i /><i /></div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="services-closing">
        <div className="container services-closing-inner glass-card">
          <div>
            <p className="eyebrow">A connected approach</p>
            <h2>Strategy, development, and automation—<em>in the same conversation.</em></h2>
          </div>
          <a className="button button-primary" href="/#contact">Tell us about your project <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="/"><span className="brand-mark"><Image unoptimized src="/forge-intelligence-logo.png" alt="" width={42} height={42} /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a>
          <p>Development, strategy, and AI automation<br />for ambitious businesses.</p>
          <div className="footer-links"><div><span>Explore</span><a href="/#about">About</a><a href="#development">Development</a><a href="#strategy">Strategy</a><a href="/projects">Projects</a></div><div><span>Connect</span><a href="mailto:domingo@oneenterprise.ai">Email us</a><a href="/#contact">Start a project</a><a href="/#faq">FAQ</a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="/">Privacy</a><a href="/">Terms</a></span></div>
      </footer>
    </main>
  );
}
