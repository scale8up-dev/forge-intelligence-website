"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["What we build", "outcomes"],
  ["Approach", "process"],
  ["FAQ", "faq"],
];

const services = [
  { number: "01", icon: "layers", title: "Development", description: "High-performing digital products that are fast, scalable, easy to use, and ready for the real work behind them." },
  { number: "02", icon: "spark", title: "Strategy", description: "The product, features, technology, and roadmap shaped around the business outcome before development begins." },
  { number: "03", icon: "chart", title: "AI automations", description: "Practical AI systems that reduce manual work, connect your tools, and help the team operate more efficiently." },
  { number: "04", icon: "shield", title: "Launch & scale", description: "Reliable integrations, testing, optimisation, and ongoing improvement as the product and business grow." },
];

const faqs = [
  ["What can you help us build?", "We build conversion-focused websites, custom digital platforms, AI-powered workflows, and scalable SaaS products—from an early MVP through to a production-ready system."],
  ["How do you approach strategy?", "We begin with the business, users, opportunities, and constraints. Then we define the right solution, scope, priorities, user experience, and technical roadmap."],
  ["Do you work with an existing product or codebase?", "Yes. We can extend an existing platform, modernise its foundations, or shape a new product from a validated idea. We start with a pragmatic product and technical review."],
  ["What AI automations do you build?", "We create practical workflows for operations, CRM and sales, support, lead qualification, reporting, knowledge assistance, and third-party integrations."],
  ["Can you support the product after launch?", "Yes. We support launch, monitor performance, and continue improving the product as your business grows—or hand over a documented, maintainable system to your team."],
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
            <p className="eyebrow"><span className="eyebrow-dot" /> Development · Strategy · AI automations</p>
            <div className="availability-note"><i /> Build smarter. Move faster. Automate more.</div>
            <h1>Build the right<br /><em>system next.</em></h1>
            <p className="hero-lede">We help ambitious businesses turn ideas into powerful digital products through strategic thinking, expert development, and intelligent AI automation.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Start your project <Icon name="arrow" /></a><a className="text-link" href="#services">Explore our services <Icon name="arrow" /></a></div>
            <div className="capability-rail" aria-label="Forge core capabilities"><span>Digital products</span><span>SaaS development</span><span>AI workflows</span></div>
          </div>
          <div className="hero-visual holo-shell" role="img" aria-label="Forge delivery system: strategy, development, and AI automations working together">
            <div className="holo-orb holo-orb-one" /><div className="holo-orb holo-orb-two" /><div className="liquid-ribbon liquid-ribbon-one" />
            <div className="visual-topline"><span>FORGE / DELIVERY SYSTEM</span><span className="live-status"><i /> BUILD READY</span></div>
            <div className="hero-visual-core">
              <span>FROM BRIEF TO BUSINESS VALUE</span>
              <strong>One clear path.<br />Built to move.</strong>
              <p>Strategy, development, and automation in one delivery loop.</p>
            </div>
            <div className="delivery-stack" aria-hidden="true">
              <div className="delivery-step"><span>01</span><strong>Strategise</strong><small>Define the right move</small></div>
              <div className="delivery-step active"><span>02</span><strong>Develop</strong><small>Build the useful system</small></div>
              <div className="delivery-step"><span>03</span><strong>Automate</strong><small>Keep work moving</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" data-reveal><div className="container trust-inner"><p>From strategy to scalable digital solutions</p><div className="trust-items"><span>DISCOVER</span><span>STRATEGISE</span><span>DESIGN</span><span>DEVELOP</span><span>IMPROVE</span></div></div></section>

      <section className="capability-ticker" aria-label="Forge capabilities"><div className="ticker-track"><span>PRODUCT STRATEGY</span><i>✦</i><span>SOFTWARE DEVELOPMENT</span><i>✦</i><span>AI AUTOMATIONS</span><i>✦</i><span>PRODUCT STRATEGY</span><i aria-hidden="true">✦</i><span aria-hidden="true">SOFTWARE DEVELOPMENT</span><i aria-hidden="true">✦</i><span aria-hidden="true">AI AUTOMATIONS</span><i aria-hidden="true">✦</i></div></section>

      <section className="section services" id="services" data-reveal><div className="container"><div className="section-intro"><div><p className="eyebrow">Our services</p><h2>Development-led.<br /><em>Strategy-backed.</em></h2></div><p className="section-note">We bring development, strategy, and AI automation together so the right solution moves from idea to execution without losing its purpose.</p></div><div className="service-grid">{services.map((service) => <article className="service-card glass-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="icon-box"><Icon name={service.icon} /></span></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" className="card-link">Explore service <Icon name="arrow" /></a></article>)}</div></div></section>

      <section className="section about" id="about" data-reveal><div className="container about-grid"><div className="about-panel glass-card"><div className="about-hologram"><Image unoptimized src="/forge-intelligence-logo.png" alt="Forge Intelligence AI" width={280} height={280} /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="about-panel-label">FROM IDEA TO EXECUTION</div><div className="about-panel-stat"><strong>3</strong><span>connected disciplines,<br />one practical solution</span></div></div><div className="about-copy"><p className="eyebrow">From strategy to scalable digital solutions</p><h2>Technology that works<br /><em>for your business.</em></h2><p>Great technology starts with a clear direction. We work closely with your team to understand your goals, identify opportunities, and create the right solution for your business.</p><p>Whether you need a new digital product, a stronger technology strategy, or smarter ways to automate daily operations, we help you move from idea to execution.</p><div className="stat-row"><div><strong>Discover</strong><span>understand the opportunity</span></div><div><strong>Build</strong><span>create the right solution</span></div><div><strong>Improve</strong><span>grow with confidence</span></div></div><a className="text-link" href="#process">How we work <Icon name="arrow" /></a></div></div></section>

      <section className="section process" id="process" data-reveal><div className="container process-layout"><div className="process-intro"><p className="eyebrow">How we work</p><h2>From the right question<br />to the <em>right system.</em></h2><p className="section-note">A clear delivery path that keeps business goals, product decisions, software, and automation in the same conversation.</p><a className="text-link" href="#contact">Tell us about your project <Icon name="arrow" /></a></div><div className="process-grid">{[["01", "Discover", "We begin by understanding your business, users, challenges, and goals."], ["02", "Strategise", "We define the solution, scope, priorities, user experience, and technical roadmap."], ["03", "Design", "We create clear, intuitive interfaces that make your product easy and enjoyable to use."], ["04", "Develop", "We build, integrate, test, and optimise your solution using reliable technologies."], ["05", "Launch and improve", "We support the launch, monitor performance, and continue improving the product as your business grows."]].map(([number, title, text]) => <article className="process-step glass-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="section outcomes" id="outcomes" data-reveal><div className="container"><div className="section-intro"><div><p className="eyebrow">What we can build</p><h2>Solutions that create<br /><em>lasting value.</em></h2></div><p className="section-note">Modern digital products and workflows shaped around your customers, operations, and the growth you are building toward.</p></div><div className="outcome-grid"><article className="outcome-card"><span>01</span><h3>Websites that drive results</h3><p>Modern, responsive, conversion-focused websites that communicate your value and support business growth.</p></article><article className="outcome-card"><span>02</span><h3>Custom digital platforms</h3><p>Tailored applications built around your workflows, customers, and operational requirements.</p></article><article className="outcome-card"><span>03</span><h3>AI-powered workflows</h3><p>Connected systems that manage repetitive tasks, move information, and support better decisions.</p></article><article className="outcome-card"><span>04</span><h3>Scalable SaaS products</h3><p>From early MVPs to production-ready platforms, we help bring software ideas to market and prepare them for growth.</p></article></div></div></section>

      <section className="section principles" data-reveal><div className="container principles-grid"><div><p className="eyebrow">Why work with us</p><h2>Built for clear decisions<br />and <em>long-term growth.</em></h2><p className="section-note">Technology should make your business simpler, not more complicated. We build with the context and care that makes each next move easier.</p></div><div className="principle-list">{[["01", "Strategy before development", "We do not build technology without understanding the business problem behind it."], ["02", "Solutions built around you", "Every product and automation is tailored to your goals, processes, and users."], ["03", "Development and AI expertise", "We combine dependable software development with modern AI and automation capabilities."], ["04", "Clear communication", "You receive regular updates, transparent timelines, and full visibility throughout the project."], ["05", "Built for long-term growth", "We create scalable solutions that can evolve as your customers, team, and business grow."]].map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="section faq" id="faq" data-reveal><div className="container faq-grid"><div><p className="eyebrow">Questions, answered</p><h2>A little more<br /><em>context.</em></h2><p className="section-note">Tell us whether you need development, strategy, AI automation, or the full connected solution.</p><a className="button button-outline" href="#contact">Ask us anything <Icon name="arrow" /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}><span>{question}</span><i>+</i></button><div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-label={question}><p>{answer}</p></div></div>)}</div></div></section>

      <section className="cta" id="contact" data-reveal><div className="container cta-inner"><div><p className="eyebrow">Ready to build something better?</p><h2>Turn the right idea<br />into a <em>scalable solution.</em></h2></div><div className="cta-form-wrap glass-card"><p>Tell us about your idea, challenge, or business process. We will help identify the right strategy and turn it into a scalable digital solution.</p><form onSubmit={submitForm} noValidate><div className="form-row"><label><span>Name</span><input name="name" required placeholder="Your name" /></label><label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" /></label></div><label><span>What are you working on?</span><textarea name="message" required rows={3} placeholder="A few details about the product, workflow, or opportunity..." /></label><div className="form-footer"><button className="button button-light" type="submit">Book a discovery call <Icon name="arrow" /></button>{formState === "error" && <span className="form-message error">Please complete the required fields.</span>}</div></form></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Image unoptimized src="/forge-intelligence-logo.png" alt="" width={42} height={42} /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a><p>Development, strategy, and AI automation<br />for ambitious businesses.</p><div className="footer-links"><div><span>Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#outcomes">What we build</a></div><div><span>Connect</span><a href="mailto:hello@forgeintelligence.ai">Email us</a><a href="#contact">Start your project</a><a href="#faq">FAQ</a></div></div></div><div className="container footer-bottom"><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="#top">Privacy</a><a href="#top">Terms</a></span></div></footer>
    </main>
  );
}
