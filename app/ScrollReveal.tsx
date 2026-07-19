"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion-reveal]"),
    );

    if (!targets.length) return;

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-motion-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    targets.forEach((target) => observer.observe(target));

    // bfcache restore: the effect does not re-run, so make sure the reveal
    // gate is still present and in-viewport sections are not left hidden.
    const handlePageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      root.classList.add("motion-ready");
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      observer.disconnect();
      window.removeEventListener("pageshow", handlePageShow);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
