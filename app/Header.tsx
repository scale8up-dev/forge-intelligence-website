"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Projects", "/projects"],
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

function CloseIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export default function Header({ isHome = false }: { isHome?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label="Forge Intelligence AI home">
          <span className="brand-mark"><Image src="/forge-intelligence-logo.png" alt="" width={48} height={48} priority unoptimized /></span>
          <span className="brand-name"><strong>Forge</strong><span>Intelligence AI</span></span>
        </a>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav id="main-navigation" className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([label, href]) => {
            const isActive = pathname === href;
            return (
              <a
                className={isActive ? "active" : undefined}
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
          <a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
        </nav>
      </div>
    </header>
  );
}
