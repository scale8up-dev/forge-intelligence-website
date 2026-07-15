"use client";

import Image from "next/image";
import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import { featuredProjects } from "./projects/data";
import Header from "./Header";
import ProjectCta from "./ProjectCta";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Approach", "process"],
  ["Projects", "projects"],
  ["What we build", "outcomes"],
  ["FAQ", "faq"],
];

const services = [
  { number: "01", icon: "layers", title: "Development", description: "High-performing digital products that are fast, scalable, easy to use, and ready for the real work behind them.", flow: ["Scope", "Build", "Release"] },
  { number: "02", icon: "spark", title: "Strategy", description: "The product, features, technology, and roadmap shaped around the business outcome before development begins.", flow: ["Discover", "Prioritize", "Align"] },
  { number: "03", icon: "chart", title: "AI automations", description: "Practical AI systems that reduce manual work, connect your tools, and help the team operate more efficiently.", flow: ["Signal", "Route", "Assist"] },
  { number: "04", icon: "shield", title: "Launch & scale", description: "Reliable integrations, testing, optimization, and ongoing improvement as the product and business grow.", flow: ["Test", "Launch", "Improve"] },
];

const principles = [
  ["01", "Strategy before development", "We do not build technology without understanding the business problem behind it."],
  ["02", "Built around you", "Every product and automation is tailored to your goals, processes, and users."],
  ["03", "Development and AI expertise", "We combine dependable software development with modern AI and automation capabilities."],
  ["04", "Clear communication", "You receive regular updates, transparent timelines, and full visibility throughout the project."],
  ["05", "Built for long-term growth", "We create scalable solutions that can evolve as your customers, team, and business grow."],
];

const faqs = [
  ["What can you help us build?", "We build conversion-focused websites, custom digital platforms, AI-powered workflows, and scalable SaaS products—from an early MVP through to a production-ready system."],
  ["How do you approach strategy?", "We begin with the business, users, opportunities, and constraints. Then we define the right solution, scope, priorities, user experience, and technical roadmap."],
  ["Do you work with an existing product or codebase?", "Yes. We can extend an existing platform, modernize its foundations, or shape a new product from a validated idea. We start with a pragmatic product and technical review."],
  ["What AI automations do you build?", "We create practical workflows for operations, CRM and sales, support, lead qualification, reporting, knowledge assistance, and third-party integrations."],
  ["Can you support the product after launch?", "Yes. We support launch, monitor performance, and continue improving the product as your business grows—or hand over a documented, maintainable system to your team."],
];

const processSteps = [
  ["01", "Discover", "We begin by understanding your business, users, challenges, and goals."],
  ["02", "Strategize", "We define the solution, scope, priorities, user experience, and technical roadmap."],
  ["03", "Design", "We create clear, intuitive interfaces that make your product easy and enjoyable to use."],
  ["04", "Develop", "We build, integrate, test, and optimize your solution using reliable technologies."],
  ["05", "Launch and improve", "We support the launch, monitor performance, and continue improving the product as your business grows."],
];

const solutionStories = [
  ["01", "Digital presence", "Websites that drive results", "Modern, responsive, conversion-focused websites that communicate your value and support business growth."],
  ["02", "Business systems", "Custom digital platforms", "Tailored applications built around your workflows, customers, and operational requirements."],
  ["03", "Connected operations", "AI-powered workflows", "Connected systems that manage repetitive tasks, move information, and support better decisions."],
  ["04", "Product ventures", "Scalable SaaS products", "From early MVPs to production-ready platforms, we help bring software ideas to market and prepare them for growth."],
];

const testimonials = [
  {
    text: "The team at Forge Intelligence AI was incredible to work with. Domingo’s leadership, Hamza’s technical brilliance, Greg’s responsiveness, and Michael’s GoHighLevel mastery made everything come together beautifully. I couldn’t have asked for a better team.",
    author: "Susan Ann Marion, M.S.",
    role: "Founder of Prep For Independence",
    avatarClass: "avatar-blue",
    initials: "SM"
  },
  {
    text: "Working with the team has been simple, easy, and such a positive experience. They quickly understood what I wanted, suggested possible options, and helped me to see the full potential of the website. The Forge Intelligence AI team is quick to respond to questions and has managed the project ahead of schedule and with features that enhance the user-experience. As a non-tech person, I was worried about working directly with a development team, but they are absolutely fantastic. Everything is explained in detail, and they are very open to answering questions, listening to my ideas, and implementing them in the project. I would highly recommend the Forge Intelligence AI team to anyone looking for a custom designed website that offers automation and unique features and options.",
    author: "Mardi Winder",
    role: "Be Your Success · Positive Communication Systems, LLC",
    websites: ["www.poscs.com", "www.divorcecoach4women.com"],
    phone: "(903) 573-6634",
    avatarClass: "avatar-sand",
    initials: "MW"
  },
  {
    text: "Before meeting Domingo and the team, I had no knowledge of how to implement my idea at creating an Ai driven fitness and nutrition app. I wanted to create something unique to the market and for people over 40. There are a ton of fitness apps out there, but none that do all that our app does. After the initial meeting with Domingo, I knew this was the company that could make this happen. The entire team has been very professional. They have always met deadlines and stayed exactly on budget. Their work is fantastic and because of them, my idea has become a reality. To anyone checking these guys out, they are the real deal and can most definitely help you to bring your vision to reality.",
    author: "Michael Evors",
    role: "Owner, Prime Age Fit, LLC",
    tagline: "AI-driven fitness and nutrition app",
    image: "/images/michael-evors.png"
  }
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const [formState, submitForm] = useForm("mkodnbyq");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 992) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxProjectIndex = featuredProjects.length - visibleCount;

  const nextProject = () => {
    setProjectIndex((prev) => (prev >= maxProjectIndex ? 0 : prev + 1));
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev <= 0 ? maxProjectIndex : prev - 1));
  };

  const getTransformStyle = () => {
    if (visibleCount === 3) {
      return `calc(-${projectIndex} * (33.333% + 9.33px))`;
    } else if (visibleCount === 2) {
      return `calc(-${projectIndex} * (50% + 14px))`;
    } else {
      return `calc(-${projectIndex} * (100% + 20px))`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectIndex((prev) => (prev >= maxProjectIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [projectIndex, maxProjectIndex]);

  useEffect(() => {
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

    return () => {
      observer.disconnect();
      root.classList.remove("scroll-ready");
    };
  }, []);



  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-process-step]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveProcessStep(Number((entry.target as HTMLElement).dataset.processStep ?? 0));
        }
      }),
      { rootMargin: "-28% 0px -42%", threshold: 0.18 },
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);



  return (
    <main className="site-main">
      <div className="ambient-field" aria-hidden="true"><i /><i /><i /></div>
      <Header isHome />

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-dot" /> Development · Strategy · AI automations</p>
            <div className="availability-note"><i /> Build smarter. Move faster. Automate more.</div>
            <h1>Prove it before you<br /><em>build it.</em></h1>
            <p className="hero-lede">We turn one real business workflow into a working AI system, then build the product, agent, or automation that earns its next step.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Reserve a pilot slot <Icon name="arrow" /></a><a className="text-link" href="/services">Explore our services <Icon name="arrow" /></a></div>
            <div className="capability-rail" aria-label="Forge core capabilities"><span>Digital products</span><span>SaaS development</span><span>AI workflows</span></div>
          </div>
          <div className="hero-visual holo-shell" role="img" aria-label="Forge delivery system: strategy, development, and AI automations working together">
            <div className="holo-orb holo-orb-one" /><div className="holo-orb holo-orb-two" /><div className="liquid-ribbon liquid-ribbon-one" />
            <div className="visual-topline"><span>FORGE / DELIVERY SYSTEM</span><span className="live-status"><i /> BUILD READY</span></div>
            <div className="hero-visual-core">
              <span>FROM BRIEF TO BUSINESS VALUE</span>
              <strong>One clear path.<br />Built to move.</strong>
              <p>Strategy, development, and automation in one delivery loop.</p>
              <div className="delivery-stack" aria-hidden="true">
                <div className="delivery-step"><span>01</span><strong>Strategize</strong><small>Define the right move</small></div>
                <div className="delivery-step active"><span>02</span><strong>Develop</strong><small>Build the useful system</small></div>
                <div className="delivery-step"><span>03</span><strong>Automate</strong><small>Keep work moving</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" data-reveal><div className="container trust-inner"><p>From strategy to scalable digital solutions</p><div className="trust-items"><span>DISCOVER</span><span>STRATEGIZE</span><span>DESIGN</span><span>DEVELOP</span><span>IMPROVE</span></div></div></section>

      <section className="capability-ticker" aria-label="Forge capabilities"><div className="ticker-track">{[0, 1, 2, 3, 4, 5].map((group) => <div className="ticker-group" aria-hidden={group > 0} key={group}><i>✦</i><span>PRODUCT STRATEGY</span><i>✦</i><span>SOFTWARE DEVELOPMENT</span><i>✦</i><span>AI AUTOMATIONS</span></div>)}</div></section>

      <section className="impact-band" data-reveal aria-label="Forge in numbers">
        <div className="container">
          <div className="impact-heading"><p className="eyebrow">Forge in numbers</p><p>One connected team for the work that moves your business forward.</p></div>
          <div className="impact-grid">
            <article><strong>03</strong><span>connected disciplines</span><p>Strategy, development, and automation working from the same brief.</p></article>
            <article><strong>01</strong><span>clear delivery loop</span><p>From the first question to a system your team can actually use.</p></article>
            <article><strong>∞</strong><span>room to grow</span><p>Flexible foundations that evolve as your customers and operations do.</p></article>
          </div>
        </div>
      </section>

      <section className="section services" id="services" data-reveal><div className="container"><div className="section-intro"><div><p className="eyebrow">Our services</p><h2>Development-led.<br /><em>Strategy-backed.</em></h2></div><div><p className="section-note">We bring development, strategy, and AI automation together so the right solution moves from idea to execution without losing its purpose.</p><a className="text-link section-detail-link" href="/services">See detailed services <Icon name="arrow" /></a></div></div><div className="service-grid capability-deck">{services.map((service) => <article className="service-card glass-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="icon-box"><Icon name={service.icon} /></span></div><h3>{service.title}</h3><p>{service.description}</p><div className="service-mini-flow" aria-label={`${service.title} workflow`}>{service.flow.map((step, index) => <span key={step}><i>{String(index + 1).padStart(2, "0")}</i>{step}</span>)}</div><a href={service.title === "Strategy" ? "/services#strategy" : service.title === "AI automations" ? "/services#ai-automations" : "/services#development"} className="card-link">Explore service <Icon name="arrow" /></a></article>)}</div></div></section>

      <section className="section about" id="about" data-reveal><div className="container about-grid"><div className="about-panel glass-card"><Image className="about-architecture" unoptimized src="/images/forge-glass-architecture.webp" alt="" aria-hidden="true" width={960} height={601} sizes="(max-width: 900px) 100vw, 48vw" /><div className="about-hologram"><div className="hologram-logo-wrap"><Image unoptimized src="/forge-mark.png" alt="Forge Intelligence AI Logo" width={96} height={96} /></div></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="about-panel-label">FROM IDEA TO EXECUTION</div><div className="about-panel-stat"><strong>3</strong><span>connected disciplines,<br />one practical solution</span></div></div><div className="about-copy"><p className="eyebrow">From strategy to scalable digital solutions</p><h2>Technology that works<br /><em>for your business.</em></h2><p>Great technology starts with a clear direction. We work closely with your team to understand your goals, identify opportunities, and create the right solution for your business.</p><p>Whether you need a new digital product, a stronger technology strategy, or smarter ways to automate daily operations, we help you move from idea to execution.</p><a className="text-link" href="#process">How we work <Icon name="arrow" /></a></div></div></section>

      <section className="section process" id="process" data-reveal><div className="container process-layout"><div className="process-intro"><p className="eyebrow">How we work</p><h2>From the right question<br />to the <em>right system.</em></h2><p className="section-note">A clear delivery path that keeps business goals, product decisions, software, and automation in the same conversation.</p><div className="process-progress" aria-hidden="true"><span>{String(activeProcessStep + 1).padStart(2, "0")}</span><i><b style={{ transform: `scaleX(${(activeProcessStep + 1) / processSteps.length})` }} /></i><span>05</span></div><a className="text-link" href="#contact">Tell us about your project <Icon name="arrow" /></a></div><div className="process-grid">{processSteps.map(([number, title, text], index) => <article className={activeProcessStep === index ? "process-step glass-card is-active" : "process-step glass-card"} data-process-step={index} key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="section featured-projects" id="projects" data-reveal>
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>Products made for<br /><em>real momentum.</em></h2>
            </div>
            <div>
              <p className="section-note">A selection of digital products and AI systems shaped around real customers, workflows, and growth opportunities.</p>
              <a className="text-link section-detail-link" href="/projects">View all projects <Icon name="arrow" /></a>
            </div>
          </div>

          <div className="featured-project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects">
            <div className="project-viewport">
              <div className="project-track" style={{ transform: `translateX(${getTransformStyle()})` }}>
                {featuredProjects.map((project, index) => (
                  <article className="featured-project-card" key={project.name}>
                    <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                      <Image src={project.image} alt={`${project.name} project interface`} width={960} height={560} sizes="(max-width: 700px) 100vw, 50vw" unoptimized />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </a>
                    <div className="featured-project-copy">
                      <p>{project.category}</p>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <a className="text-link" href={project.url} target="_blank" rel="noreferrer">View project <Icon name="arrow" /></a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            <div className="solution-controls">
              <p aria-live="polite">{String(projectIndex + 1).padStart(2, "0")} <span>/ 0{maxProjectIndex + 1}</span></p>
              <div>
                <button type="button" aria-label="Show previous project" onClick={prevProject}><Icon name="arrow" /></button>
                <button type="button" aria-label="Show next project" onClick={nextProject}><Icon name="arrow" /></button>
              </div>
              <div className="solution-dots">
                {Array.from({ length: maxProjectIndex + 1 }).map((_, index) => (
                  <button type="button" className={projectIndex === index ? "is-active" : undefined} aria-label={`Show project ${index + 1}`} key={index} onClick={() => setProjectIndex(index)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section outcomes" id="outcomes" data-reveal><div className="container"><div className="section-intro"><div><p className="eyebrow">Solution stories</p><h2>Systems built around<br /><em>real work.</em></h2></div><p className="section-note">A focused look at the products and workflows we can shape around your customers, operations, and next stage of growth.</p></div><div className="solution-carousel" role="region" aria-roledescription="carousel" aria-label="Forge solution stories"><div className="solution-viewport"><div className="solution-track" style={{ transform: `translateX(-${solutionIndex * 100}%)` }}>{solutionStories.map(([number, label, title, text], index) => <article className="solution-slide" aria-hidden={solutionIndex !== index} key={number}><div className="solution-index"><span>{number}</span><i /></div><div className="solution-copy"><p>{label}</p><h3>{title}</h3><p>{text}</p><a className="text-link" href="#contact" tabIndex={solutionIndex === index ? 0 : -1}>Discuss this system <Icon name="arrow" /></a></div><div className="solution-art has-flow-image" aria-hidden="true">
  {number === "01" && <Image className="solution-art-image" unoptimized src="/images/forge-digital-presence.jpg" alt="" width={960} height={601} sizes="(max-width: 900px) 100vw, 33vw" />}
  {number === "02" && <Image className="solution-art-image" unoptimized src="/images/forge-business-systems.jpg" alt="" width={960} height={601} sizes="(max-width: 900px) 100vw, 33vw" />}
  {number === "03" && <Image className="solution-art-image" unoptimized src="/images/forge-delivery-flow.webp" alt="" width={960} height={601} sizes="(max-width: 900px) 100vw, 33vw" />}
  {number === "04" && <Image className="solution-art-image" unoptimized src="/images/forge-product-ventures.jpg" alt="" width={960} height={601} sizes="(max-width: 900px) 100vw, 33vw" />}
  <div className="solution-orbit" />
  <div className="solution-line line-a" />
  <div className="solution-line line-b" />
  <span>{number}</span>
</div></article>)}</div></div><div className="solution-controls"><p aria-live="polite">{String(solutionIndex + 1).padStart(2, "0")} <span>/ 0{solutionStories.length}</span></p><div><button type="button" aria-label="Show previous solution story" onClick={() => setSolutionIndex((index) => (index - 1 + solutionStories.length) % solutionStories.length)}><Icon name="arrow" /></button><button type="button" aria-label="Show next solution story" onClick={() => setSolutionIndex((index) => (index + 1) % solutionStories.length)}><Icon name="arrow" /></button></div><div className="solution-dots">{solutionStories.map(([number], index) => <button type="button" className={solutionIndex === index ? "is-active" : undefined} aria-label={`Show solution story ${index + 1}`} aria-current={solutionIndex === index ? "true" : undefined} key={number} onClick={() => setSolutionIndex(index)} />)}</div></div></div></div></section>

      <section className="section principles" data-reveal><div className="container principles-grid"><div><p className="eyebrow">Why work with us</p><h2>Built for clear decisions<br />and <em>long-term growth.</em></h2><p className="section-note">Technology should make your business simpler, not more complicated. We build with the context and care that makes each next move easier.</p></div><div className="principle-list principle-bento">{principles.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section testimonials" id="testimonials" data-reveal>
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Client feedback</p>
              <h2>What our partners<br /><em>say about us.</em></h2>
            </div>
            <p className="section-note">Direct feedback from the founders and product owners we collaborate with to build custom applications and automations.</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <article className="testimonial-card glass-card" key={index}>
                <div className="testimonial-content">
                  <span className="quote-icon">“</span>
                  <p>{item.text}</p>
                </div>
                <footer className="testimonial-footer">
                  {item.image ? (
                    <span className="quote-avatar" style={{ overflow: "hidden", display: "grid", placeItems: "center" }}>
                      <Image unoptimized src={item.image} alt={item.author} width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </span>
                  ) : (
                    <span className={`quote-avatar ${item.avatarClass}`}>{item.initials}</span>
                  )}
                  <div className="meta">
                    <strong>{item.author}</strong>
                    <small>{item.role}</small>
                    {item.phone && <small>{item.phone}</small>}
                    {item.websites && (
                      <small className="links">
                        {item.websites.map((web, idx) => (
                          <a href={`http://${web}`} target="_blank" rel="noopener noreferrer" key={web}>
                            {web}
                          </a>
                        ))}
                      </small>
                    )}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-feature" data-reveal aria-labelledby="trust-feature-title">
        <div className="container">
          <div className="trust-feature-panel">
            <div className="trust-feature-kicker"><i /> Built for the real world</div>
            <h2 id="trust-feature-title">Your business depends on systems that are clear, reliable, and built to last.</h2>
            <div className="trust-feature-bottom">
              <p>We take that responsibility seriously. From the first architecture decision to the final handoff, we build with maintainability, sensible integrations, and long-term ownership in mind.</p>
              <div className="trust-feature-badges" aria-label="Forge delivery principles"><span><strong>01</strong> Clear foundations</span><span><strong>02</strong> Secure workflows</span><span><strong>03</strong> Built to evolve</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq" id="faq" data-reveal><div className="container faq-grid"><div><p className="eyebrow">Questions, answered</p><h2>A little more<br /><em>context.</em></h2><p className="section-note">Tell us whether you need development, strategy, AI automation, or the full connected solution.</p><a className="button button-outline" href="#contact">Ask us anything <Icon name="arrow" /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}><span>{question}</span><i>+</i></button><div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-label={question}><p>{answer}</p></div></div>)}</div></div></section>

      <section className="cta" id="contact" data-reveal><div className="container cta-inner"><div><p className="eyebrow">Ready to build something better?</p><h2>Turn the right idea<br />into a <em>scalable solution.</em></h2></div><div className="cta-form-wrap glass-card"><p>Tell us about your idea, challenge, or business process. We will help identify the right strategy and turn it into a scalable digital solution.</p>{formState.succeeded ? <div className="form-success" role="status"><strong>Message sent.</strong><p>Thanks for reaching out. We will be in touch soon.</p></div> : <form onSubmit={submitForm}><input type="hidden" name="_subject" value="New Forge Intelligence AI project enquiry" /><div className="form-row"><label><span>Name</span><input name="name" required placeholder="Your name" autoComplete="name" /></label><label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" autoComplete="email" /><div className="form-field-error"><ValidationError prefix="Email" field="email" errors={formState.errors} /></div></label></div><label><span>What are you working on?</span><textarea name="message" required rows={3} placeholder="A few details about the product, workflow, or opportunity..." /><div className="form-field-error"><ValidationError prefix="Message" field="message" errors={formState.errors} /></div></label><div className="form-footer"><button className="button button-light" type="submit" disabled={formState.submitting}>{formState.submitting ? "Sending..." : <>Book a discovery call <Icon name="arrow" /></>}</button>{formState.errors && <span className="form-message error">We could not send your message. Please try again.</span>}</div></form>}</div></div></section>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Image unoptimized src="/forge-intelligence-logo.png" alt="" width={42} height={42} /></span><span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span></a><p>Development, strategy, and AI automation<br />for ambitious businesses.</p><div className="footer-links"><div><span>Explore</span><a href="#about">About</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="#outcomes">What we build</a></div><div><span>Connect</span><a href="mailto:domingo@oneenterprise.ai">Email us</a><a href="#contact">Start your project</a><a href="#faq">FAQ</a></div></div></div><div className="container footer-bottom"><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="#top">Privacy</a><a href="#top">Terms</a></span></div></footer>
    </main>
  );
}
