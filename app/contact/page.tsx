"use client";

import { ValidationError, useForm } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

export default function ContactPage() {
  const [formState, submitForm] = useForm("mkodnbyq");

  return (
    <main className="site-main contact-page">
      <Header />
      <section className="contact-hero" data-motion-reveal="flow">
        <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
        <div className="container contact-layout">
          <div className="contact-intro">
            <p className="eyebrow" data-motion-item><span className="eyebrow-dot" /> Start a project</p>
            <h1 data-motion-item>Let&apos;s turn the right idea into <em>useful work.</em></h1>
            <p className="contact-lede" data-motion-item>Tell us what you are trying to build, improve, or automate. We will help you find the clearest next step.</p>
            <div className="contact-points" aria-label="What happens next" data-motion-item>
              <div><span>01</span><p><strong>Share the context</strong>What you need, where it is getting stuck, and what success looks like.</p></div>
              <div><span>02</span><p><strong>We review the opportunity</strong>We connect the business need to a practical product, technology, or automation path.</p></div>
              <div><span>03</span><p><strong>Move with clarity</strong>You leave with a grounded recommendation for the work ahead.</p></div>
            </div>
          </div>

          <section className="contact-form-card" aria-labelledby="contact-form-title" data-motion-item>
            <p className="eyebrow">Project enquiry</p>
            <h2 id="contact-form-title">Tell us what&apos;s moving next.</h2>
            <p>We read every enquiry and will respond with the most useful next step.</p>
            {formState.succeeded ? (
              <div className="contact-success" role="status"><strong>Thank you—we have your message.</strong><p>We will be in touch soon.</p></div>
            ) : (
              <form onSubmit={submitForm}>
                <input type="hidden" name="_subject" value="New Forge Intelligence AI project enquiry" />
                <label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
                <label><span>Work email</span><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /><ValidationError prefix="Email" field="email" errors={formState.errors} /></label>
                <label><span>Company <small>(optional)</small></span><input name="company" autoComplete="organization" placeholder="Your company" /></label>
                <label><span>What are you working on?</span><textarea name="message" required rows={5} placeholder="A product, workflow, business challenge, or opportunity..." /><ValidationError prefix="Message" field="message" errors={formState.errors} /></label>
                <button className="button button-primary" type="submit" disabled={formState.submitting}>{formState.submitting ? "Sending..." : <>Send project enquiry <Arrow /></>}</button>
                {formState.errors ? <p className="contact-error" role="alert">We could not send your message. Please try again, or email us directly.</p> : null}
              </form>
            )}
            <a className="contact-email" href="mailto:domingo@oneenterprise.ai">Prefer email? <span>domingo@oneenterprise.ai</span></a>
          </section>
        </div>
      </section>
      <footer className="site-footer" data-motion-reveal="flow">
        <div className="container footer-top" data-motion-item>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark"><Image unoptimized src="/forge-mark.png" alt="" width={42} height={42} /></span>
            <span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span>
          </Link>
          <p>Development, strategy, and AI automation<br />for ambitious businesses.</p>
          <div className="footer-links">
            <div><span>Explore</span><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link></div>
            <div><span>Connect</span><a href="mailto:domingo@oneenterprise.ai">Email us</a><Link href="/contact">Start your project</Link></div>
          </div>
        </div>
        <div className="container footer-bottom" data-motion-item><span>© 2026 Forge Intelligence AI</span><span>Built with intent <span className="footer-dot">●</span></span><span><a href="#top">Privacy</a><a href="#top">Terms</a></span></div>
      </footer>
    </main>
  );
}
