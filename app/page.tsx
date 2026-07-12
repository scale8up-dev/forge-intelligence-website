"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["How it works", "process"],
  ["Work", "work"],
  ["FAQ", "faq"],
];

const services = [
  {
    number: "01",
    icon: "spark",
    title: "MVP engineering",
    description: "From a sharp brief to a reliable product your first customers can use.",
  },
  {
    number: "02",
    icon: "layers",
    title: "Product systems",
    description: "A clear architecture, design system, and delivery rhythm built to scale.",
  },
  {
    number: "03",
    icon: "chart",
    title: "AI-native features",
    description: "Useful intelligence embedded into the workflows that matter to your team.",
  },
  {
    number: "04",
    icon: "shield",
    title: "Production readiness",
    description: "Security, observability, and quality gates that make launch feel calm.",
  },
];

const faqs = [
  ["What kind of teams do you work with?", "We partner with founders, product leaders, and lean teams who need an experienced engineering partner to turn an important idea into a dependable product."],
  ["How quickly can we launch an MVP?", "Most focused MVPs move from kickoff to a production pilot in 6–10 weeks. We scope the smallest useful release first, then build in short, visible increments."],
  ["Do you work with an existing design or codebase?", "Yes. We can extend your existing product, modernise its foundations, or start from a validated concept. Every engagement begins with a pragmatic technical and product audit."],
  ["How do you handle AI reliability?", "We design AI features around clear jobs, observable outputs, human review points, and measurable fallback behaviour. The result is useful software, not a demo that only works once."],
  ["What happens after launch?", "We stay close through launch and can continue as your embedded product engineering team, or hand over a documented, maintainable system to yours."],
];

function Icon({ name }: { name: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "arrow") return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
  if (name === "spark") return <svg {...common}><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></svg>;
  if (name === "layers") return <svg {...common}><path d="m12 3 8 4.3-8 4.4-8-4.4L12 3Z" /><path d="m4 12 8 4.3 8-4.3" /><path d="m4 16.5 8 4.5 8-4.5" /></svg>;
  if (name === "chart") return <svg {...common}><path d="M4 19V5" /><path d="M4 19h17" /><path d="m7 15 3-4 3 2 5-7" /><path d="M18 6h2v2" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 20 6v5.4c0 4.7-3.3 7.9-8 9.6-4.7-1.7-8-4.9-8-9.6V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>;
  if (name === "check") return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === "close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormState("error");
      form.reportValidity();
      return;
    }
    setFormState("success");
    form.reset();
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Forge Intelligence AI home">
            <span className="brand-mark"><Image src="/forge-intelligence-logo.jpeg" alt="" width={46} height={46} priority /></span>
            <span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span>
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <Icon name="arrow" /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Product engineering for ambitious teams</p>
            <h1>Turn your next <em>big idea</em> into a product people trust.</h1>
            <p className="hero-lede">Forge Intelligence AI builds production-ready SaaS MVPs and AI-native software for teams that want momentum without compromising the foundations.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Book a discovery call <Icon name="arrow" /></a><a className="text-link" href="#work">See our approach <Icon name="arrow" /></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>M</span><span>K</span><span>+</span></div><p><strong>Built with care.</strong><br />Trusted by founders who move with intent.</p></div>
          </div>
          <div className="hero-visual" aria-label="Forge product delivery system preview">
            <div className="visual-topline"><span>FORGE / SYSTEM 01</span><span className="live-status"><i /> LIVE BUILD</span></div>
            <div className="visual-heading"><span className="visual-kicker">Your product, in motion</span><strong>From first signal<br />to shipped system.</strong></div>
            <div className="system-map">
              <div className="map-line line-one" /><div className="map-line line-two" /><div className="map-line line-three" />
              <div className="map-node node-one"><span>01</span><strong>Signal</strong><small>Validate the right problem</small></div>
              <div className="map-node node-two active"><span>02</span><strong>Build</strong><small>Ship the useful first version</small><b>In progress</b></div>
              <div className="map-node node-three"><span>03</span><strong>Scale</strong><small>Make it durable by default</small></div>
            </div>
            <div className="visual-foot"><span>PRODUCT VELOCITY</span><strong>+42%</strong><span className="mini-bar"><i /></span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><p>Built for teams who care about the details</p><div className="trust-items"><span>Northstar</span><span>arc / studio</span><span>VERGE</span><span>PALISADE</span><span>kinetic</span></div></div></section>

      <section className="section services" id="services"><div className="container"><div className="section-intro"><div><p className="eyebrow">What we do</p><h2>The people to call when<br /><em>“almost there”</em> isn’t enough.</h2></div><p className="section-note">We combine product thinking, engineering discipline, and AI fluency to make the hard parts feel straightforward.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="icon-box"><Icon name={service.icon} /></span></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" className="card-link">Explore service <Icon name="arrow" /></a></article>)}</div></div></section>

      <section className="section about" id="about"><div className="container about-grid"><div className="about-panel"><div className="about-badge">FI<span>AI</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="about-panel-label">THE FORGE METHOD / 2026</div><div className="about-panel-stat"><strong>1</strong><span>clear product<br />at a time</span></div></div><div className="about-copy"><p className="eyebrow">A better way to build</p><h2>Less theatre.<br /><em>More progress.</em></h2><p>We started Forge because too many great ideas get trapped between a strategy deck and a production incident. Our work is deliberately practical: understand the job, shape the system, and ship something that earns its place.</p><p>Every engagement gets senior attention, honest trade-offs, and a team that treats your product like it has a future.</p><div className="stat-row"><div><strong>24</strong><span>products shipped</span></div><div><strong>6–10<span>wks</span></strong><span>to first pilot</span></div><div><strong>98<span>%</span></strong><span>client retention</span></div></div><a className="text-link" href="#process">How we work <Icon name="arrow" /></a></div></div></section>

      <section className="section process" id="process"><div className="container"><div className="section-intro centered"><p className="eyebrow">The process</p><h2>Clarity at every <em>step.</em></h2><p className="section-note">A simple, senior-led process that keeps the work focused and the feedback loop short.</p></div><div className="process-grid"><div className="process-step"><span>01</span><div><h3>Frame the opportunity</h3><p>We align on the customer, the job to be done, and the smallest proof that matters.</p></div></div><div className="process-step"><span>02</span><div><h3>Shape the system</h3><p>We turn the idea into a clear product model, technical plan, and delivery rhythm.</p></div></div><div className="process-step"><span>03</span><div><h3>Build in the open</h3><p>Weekly releases, visible decisions, and a calm path from prototype to pilot.</p></div></div><div className="process-step"><span>04</span><div><h3>Leave it stronger</h3><p>Production hardening, documentation, and a team that knows what happens next.</p></div></div></div></div></section>

      <section className="section work" id="work"><div className="container"><div className="section-intro"><div><p className="eyebrow">Selected work</p><h2>Small teams.<br /><em>Serious outcomes.</em></h2></div><a className="text-link desktop-link" href="#contact">Start a conversation <Icon name="arrow" /></a></div><div className="work-grid"><article className="case-card case-dark"><div className="case-meta"><span>Operations / AI</span><span>2026</span></div><div className="case-art art-command"><div className="art-window"><div className="window-head"><i /><i /><i /><span>command_center / live</span></div><div className="window-content"><div className="fake-row wide" /><div className="fake-row" /><div className="fake-grid"><i /><i /><i /></div></div></div></div><div className="case-copy"><h3>Northstar command center</h3><p>A decision layer that gave a growing operations team one calm view of the work.</p><span className="result">↓ 31% time to decision</span></div></article><article className="case-card case-paper"><div className="case-meta"><span>Fintech / MVP</span><span>2025</span></div><div className="case-art art-pulse"><div className="pulse-label">PULSE <span>•</span> PERFORMANCE</div><div className="pulse-number">4.8<span>/5</span></div><div className="pulse-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="pulse-caption">customer confidence</div></div><div className="case-copy"><h3>Pulse financial workspace</h3><p>A focused customer experience that made complex decisions feel clear.</p><span className="result">↑ 2.4× activation rate</span></div></article></div></div></section>

      <section className="section principles"><div className="container principles-grid"><div><p className="eyebrow">Why Forge</p><h2>Good software is a<br /><em>trust signal.</em></h2><p className="section-note">The details are not decoration. They are how your customers know you mean it.</p></div><div className="principle-list"><div><span>01</span><h3>Senior by default</h3><p>The person shaping the product is in the room when it gets built.</p></div><div><span>02</span><h3>Useful over impressive</h3><p>We optimise for the smallest release that creates a real customer signal.</p></div><div><span>03</span><h3>Built to be owned</h3><p>Clear systems, clean handoffs, and no dependency on a mystery team.</p></div></div></div></section>

      <section className="section testimonials"><div className="container"><div className="section-intro centered"><p className="eyebrow">Words from the work</p><h2>Good things happen when<br /><em>the signal is clear.</em></h2></div><div className="quote-grid"><blockquote><p>“Forge gave us the confidence to stop debating and start learning. We had a real product in customers’ hands before the old process would have finished a roadmap.”</p><footer><span className="quote-avatar avatar-blue">JL</span><span><strong>Jordan Lee</strong><small>Co-founder, Northstar</small></span></footer></blockquote><blockquote><p>“The rare team that can move fast without leaving a mess behind. Every decision was clear, every release felt intentional.”</p><footer><span className="quote-avatar avatar-sand">SP</span><span><strong>Samira Patel</strong><small>Head of Product, Pulse</small></span></footer></blockquote><blockquote><p>“They understood the business problem before touching the technology. That changed the quality of everything that followed.”</p><footer><span className="quote-avatar avatar-ink">MR</span><span><strong>Marcus Reed</strong><small>Founder, Arc Studio</small></span></footer></blockquote></div></div></section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><p className="eyebrow">Questions, answered</p><h2>A little more<br /><em>context.</em></h2><p className="section-note">Still curious? Tell us what you’re building and we’ll point you in the right direction.</p><a className="button button-outline" href="#contact">Ask us anything <Icon name="arrow" /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><i>+</i></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

      <section className="cta" id="contact"><div className="container cta-inner"><div><p className="eyebrow">Ready when you are</p><h2>Make the next<br /><em>move count.</em></h2></div><div className="cta-form-wrap"><p>Tell us a little about what you’re building. We’ll come back with a thoughtful next step within two business days.</p><form onSubmit={submitForm} noValidate><div className="form-row"><label><span>Name</span><input name="name" required placeholder="Your name" /></label><label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" /></label></div><label><span>What are you working on?</span><textarea name="message" required rows={3} placeholder="A few details about the product or challenge..." /></label><div className="form-footer"><button className="button button-light" type="submit">Start a conversation <Icon name="arrow" /></button>{formState === "success" && <span className="form-message success"><Icon name="check" /> Thanks — we’ll be in touch.</span>}{formState === "error" && <span className="form-message error">Please complete the required fields.</span>}</div></form></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Image src="/forge-intelligence-logo.jpeg" alt="" width={42} height={42} /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a><p>Production-ready software<br />for ambitious teams.</p><div className="footer-links"><div><span>Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a></div><div><span>Connect</span><a href="mailto:hello@forgeintelligence.ai">Email us</a><a href="#contact">Start a project</a><a href="#faq">FAQ</a></div></div></div><div className="container footer-bottom"><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="#top">Privacy</a><a href="#top">Terms</a></span></div></footer>
    </main>
  );
}
