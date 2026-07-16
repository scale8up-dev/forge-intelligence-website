"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteChrome() {
  const [showTop, setShowTop] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollFrame = 0;
    let pointerFrame = 0;
    let latestPointer: PointerEvent | null = null;
    let previousShowTop = false;
    const supportsPointerAura = window.matchMedia("(hover: hover) and (pointer: fine)").matches
      && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateScroll = () => {
      scrollFrame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
      const nextShowTop = window.scrollY > window.innerHeight * 0.7;
      if (nextShowTop !== previousShowTop) {
        previousShowTop = nextShowTop;
        setShowTop(nextShowTop);
      }
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    const updatePointer = () => {
      pointerFrame = 0;
      if (!latestPointer) return;
      document.documentElement.style.setProperty("--pointer-x", `${latestPointer.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${latestPointer.clientY}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      latestPointer = event;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updatePointer);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (supportsPointerAura) window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (supportsPointerAura) window.removeEventListener("pointermove", onPointerMove);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="pointer-aura" aria-hidden="true" />
      <button className={showTop ? "back-to-top is-visible" : "back-to-top"} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        ↑
      </button>
    </>
  );
}
