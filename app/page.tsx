"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Approach", "process"],
  ["FAQ", "faq"],
];

const services = [
  { number: "01", icon: "spark", title: "Product strategy", description: "Position the opportunity, sharpen the roadmap, and decide what is worth building first." },
  { number: "02", icon: "layers", title: "Software development", description: "Design and build dependable SaaS products, internal tools, and customer platforms." },
  { number: "03", icon: "chart", title: "AI automations", description: "Connect the busywork, surface the right context, and make operations move without the drag." },
  { number: "04", icon: "shield", title: "Systems that scale", description: "Production hardening, observability, and support that keep the work useful after launch." },
];

const faqs = [
  ["What kind of teams do you work with?", "We partner with founders, product leaders, and lean operations teams who need a senior partner across strategy, development, and AI automation."],
  ["How do you scope an engagement?", "We begin with the business outcome and the constraints around it. From there, we define the smallest meaningful system, the right sequence, and the level of collaboration required."],
  ["Do you work with an existing design or codebase?", "Yes. We can extend your existing product, modernise its foundations, or start from a validated concept. Every engagement begins with a pragmatic technical and product audit."],
  ["How do you handle AI automations?", "We start with clear jobs, useful data, human review points, and measurable fallback behaviour. The result is an accountable workflow, not an automation that only works once."],
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
  return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState<"idle" | "error">("idle");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
        section.classList.add("is-visible");
      }
    });
    root.classList.add("scroll-ready");

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12, rootMargin: "0px 0px -9%" },
    );
    sections.forEach((section) => observer.observe(section));

    if (reduceMotion) {
      return () => {
        observer.disconnect();
        root.classList.remove("scroll-ready");
      };
    }

    let frame = 0;
    const updateScrollDepth = () => {
      frame = 0;
      const depth = Math.min(window.scrollY, 900);
      root.style.setProperty("--liquid-shift", `${depth * 0.07}px`);
      root.style.setProperty("--liquid-shift-inverse", `${depth * -0.046}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollDepth);
    };

    updateScrollDepth();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("scroll-ready");
      root.style.removeProperty("--liquid-shift");
      root.style.removeProperty("--liquid-shift-inverse");
    };
  }, []);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormState("error");
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Forge Intelligence AI — ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject:\n${data.get("message")}`);
    window.location.href = `mailto:hello@forgeintelligence.ai?subject=${subject}&body=${body}`;
  }

  return (
    <main className="site-main">
      <div className="ambient-field" aria-hidden="true"><i /><i /><i /></div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Forge Intelligence AI home">
            <span className="brand-mark"><Image src="/forge-intelligence-logo.png" alt="" width={48} height={48} priority unoptimized /></span>
            <span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span>
          </a>
          <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation"><Icon name={menuOpen ? "close" : "menu"} /></button>
          <nav id="main-navigation" className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <Icon name="arrow" /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-dot" /> Strategy · Development · AI automations</p>
            <div className="availability-note"><i /> A focused practice for high-consequence product work</div>
            <h1>Make strategy feel <em>real</em> in the systems people use.</h1>
            <p className="hero-lede">Forge Intelligence AI shapes the product, builds the software, and automates the work around it—so momentum does not disappear between the plan and the launch.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <Icon name="arrow" /></a><a className="text-link" href="#process">See the approach <Icon name="arrow" /></a></div>
            <div className="capability-rail" aria-label="Forge core capabilities"><span>Strategy</span><span>Development</span><span>AI automations</span></div>
            <p className="hero-note">A connected practice for the decisions, systems, and workflows that matter next.</p>
          </div>
          <div className="hero-visual holo-shell" role="img" aria-label="Forge delivery system: strategy, development, and AI automations working together">
            <div className="holo-orb holo-orb-one" /><div className="holo-orb holo-orb-two" /><div className="holo-scanline" /><div className="liquid-ribbon liquid-ribbon-one" /><div className="liquid-ribbon liquid-ribbon-two" />
            <div className="visual-topline"><span>FORGE / CAPABILITY MAP</span><span className="live-status"><i /> CONNECTED WORKFLOWS</span></div>
            <div className="visual-heading"><span className="visual-kicker">A clear path through the work</span><strong>Strategy, software,<br />and automation—connected.</strong></div>
            <div className="system-map">
              <div className="map-line line-one" /><div className="map-line line-two" /><div className="map-line line-three" />
              <div className="map-node node-one glass-card"><span>01</span><strong>Strategy</strong><small>Focus on the decision that matters</small></div>
              <div className="map-node node-two active glass-card"><span>02</span><strong>Develop</strong><small>Shape the useful system</small><b>Build with intent</b></div>
              <div className="map-node node-three glass-card"><span>03</span><strong>Automate</strong><small>Make the workflow keep moving</small></div>
            </div>
            <div className="visual-foot"><span>STRATEGY → DELIVERY</span><strong>ONE CONNECTED LOOP</strong><span className="mini-bar"><i /></span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" data-reveal><div className="container trust-inner"><p>One connected practice, from direction to delivery</p><div className="trust-items"><span>STRATEGY</span><span>DEVELOP</span><span>AUTOMATE</span><span>MEASURE</span><span>EVOLVE</span></div></div></section>

      <section className="capability-ticker" aria-label="Forge capabilities"><div className="ticker-track"><span>PRODUCT STRATEGY</span><i>✦</i><span>SOFTWARE DEVELOPMENT</span><i>✦</i><span>AI AUTOMATIONS</span><i>✦</i><span>PRODUCT STRATEGY</span><i aria-hidden="true">✦</i><span aria-hidden="true">SOFTWARE DEVELOPMENT</span><i aria-hidden="true">✦</i><span aria-hidden="true">AI AUTOMATIONS</span><i aria-hidden="true">✦</i></div></section>

      <section className="section services" id="services" data-reveal><div className="container"><div className="section-intro"><div><p className="eyebrow">What we do</p><h2>What we <em>make</em> move.</h2></div><p className="section-note">A single practice that carries the thinking into the product, then into the work it needs to perform.</p></div><div className="service-grid">{services.map((service) => <article className="service-card glass-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="icon-box"><Icon name={service.icon} /></span></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" className="card-link">Explore service <Icon name="arrow" /></a></article>)}</div></div></section>

      <section className="section about" id="about" data-reveal><div className="container about-grid"><div className="about-panel glass-card"><div className="about-hologram"><Image unoptimized src="/forge-intelligence-logo.png" alt="Forge Intelligence AI" width={280} height={280} /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="about-panel-label">DESIGNING THE SYSTEM</div><div className="about-panel-stat"><strong>3</strong><span>connected disciplines,<br />one clear direction</span></div></div><div className="about-copy"><p className="eyebrow">A better way to build</p><h2>Less hand-off.<br /><em>More momentum.</em></h2><p>Important initiatives often get stranded between a strategy deck, an engineering backlog, and a manual operations team. Forge keeps the work connected: make the right call, shape the system, then automate what should not need another meeting.</p><p>Clear trade-offs, reliable systems, and a product that is easier to own are built into the same delivery loop.</p><div className="stat-row"><div><strong>Strategy</strong><span>decide what matters</span></div><div><strong>Software</strong><span>build what works</span></div><div><strong>Automation</strong><span>remove repeatable drag</span></div></div><a className="text-link" href="#process">How we work <Icon name="arrow" /></a></div></div></section>

      <section className="section process" id="process" data-reveal><div className="container process-layout"><div className="process-intro"><p className="eyebrow">The Forge approach</p><h2>One clear path from <em>question</em> to system.</h2><p className="section-note">A deliberate delivery loop that keeps product decisions, software, and automation in the same conversation.</p><a className="text-link" href="#contact">Discuss your next move <Icon name="arrow" /></a></div><div className="process-grid">{[["01", "Set the direction", "We align on the business outcome, the customer, and the few decisions that unlock the right work."], ["02", "Design & develop", "We turn the plan into a clear product model, technical system, and working software."], ["03", "Automate the busywork", "We connect tools, data, and AI where repeatable work is slowing the team down."], ["04", "Measure and improve", "We harden the system, learn from real use, and make the next release easier than the first."]].map(([number, title, text]) => <article className="process-step glass-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="section outcomes" id="outcomes" data-reveal><div className="container"><div className="section-intro"><div><p className="eyebrow">What takes shape</p><h2>Systems with a clearer<br /><em>next move.</em></h2></div><p className="section-note">The work is deliberately practical: leave with the thinking, product, and workflow you need to keep moving.</p></div><div className="outcome-grid"><article className="outcome-card"><span>01</span><h3>Decision systems</h3><p>Clear priorities, product direction, and a plan your team can actually use.</p></article><article className="outcome-card"><span>02</span><h3>Useful software</h3><p>SaaS products, internal tools, and customer experiences designed around real work.</p></article><article className="outcome-card"><span>03</span><h3>Connected workflows</h3><p>AI automations and integrations that give recurring work a more reliable path.</p></article></div></div></section>

      <section className="section principles" data-reveal><div className="container principles-grid"><div><p className="eyebrow">Why Forge</p><h2>Good systems create<br /><em>operating leverage.</em></h2><p className="section-note">The details are not decoration. They are how strategy turns into software your customers and team can rely on.</p></div><div className="principle-list">{[["01", "Strategy before sprints", "We get the decision, customer, and opportunity clear before adding delivery velocity."], ["02", "Production-grade development", "We build useful software with the quality, visibility, and care it needs to last."], ["03", "Automation with accountability", "Every AI workflow has a clear owner, observable output, and a sensible human fallback."]].map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="section faq" id="faq" data-reveal><div className="container faq-grid"><div><p className="eyebrow">Questions, answered</p><h2>A little more<br /><em>context.</em></h2><p className="section-note">Still curious? Tell us whether you need strategy, development, automation, or the full connected system.</p><a className="button button-outline" href="#contact">Ask us anything <Icon name="arrow" /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}><span>{question}</span><i>+</i></button><div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-label={question}><p>{answer}</p></div></div>)}</div></div></section>

      <section className="cta" id="contact" data-reveal><div className="container cta-inner"><div><p className="eyebrow">Ready when you are</p><h2>Make the next<br /><em>move count.</em></h2></div><div className="cta-form-wrap glass-card"><p>Tell us what needs to move: your strategy, your software, your operations, or all three. We will open an email draft with the details you share.</p><form onSubmit={submitForm} noValidate><div className="form-row"><label><span>Name</span><input name="name" required placeholder="Your name" /></label><label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" /></label></div><label><span>What are you working on?</span><textarea name="message" required rows={3} placeholder="A few details about the product, workflow, or opportunity..." /></label><div className="form-footer"><button className="button button-light" type="submit">Open email draft <Icon name="arrow" /></button>{formState === "error" && <span className="form-message error">Please complete the required fields.</span>}</div></form></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Image unoptimized src="/forge-intelligence-logo.png" alt="" width={42} height={42} /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a><p>Strategy, development, and AI automations<br />for ambitious teams.</p><div className="footer-links"><div><span>Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#outcomes">Capabilities</a></div><div><span>Connect</span><a href="mailto:hello@forgeintelligence.ai">Email us</a><a href="#contact">Start a project</a><a href="#faq">FAQ</a></div></div></div><div className="container footer-bottom"><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="#top">Privacy</a><a href="#top">Terms</a></span></div></footer>
    </main>
  );
}
