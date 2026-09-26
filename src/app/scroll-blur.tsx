"use client";

import { useEffect, useState } from "react";

export function ScrollBlur() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrolled = scrollY > 20;
      setIsScrolled(scrolled);

      // Check if user has reached the footer
      const footer = document.querySelector("footer, .site-footer");
      let atFooter = false;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Trigger as footer enters viewport bottom edge (+40px buffer)
        atFooter = rect.top <= window.innerHeight + 40;
      } else {
        const scrollBottom = window.innerHeight + scrollY;
        const totalHeight = document.documentElement.scrollHeight;
        atFooter = totalHeight - scrollBottom <= 140;
      }

      setIsAtFooter(atFooter);

      const html = document.documentElement;
      if (scrolled) {
        html.classList.add("has-scrolled");
      } else {
        html.classList.remove("has-scrolled");
      }

      if (atFooter) {
        html.classList.add("at-footer");
      } else {
        html.classList.remove("at-footer");
      }
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });

    // Hook into Lenis if present now or when initialized
    let attachedLenis: { off: (event: string, cb: () => void) => void } | null = null;
    const hookLenis = () => {
      const lenis = (window as unknown as { lenis?: { on: (event: string, cb: () => void) => void; off: (event: string, cb: () => void) => void } }).lenis;
      if (lenis && typeof lenis.on === "function" && !attachedLenis) {
        lenis.on("scroll", updateScrollState);
        attachedLenis = lenis;
        updateScrollState();
        return true;
      }
      return false;
    };

    hookLenis();
    const onLenisReady = () => hookLenis();
    window.addEventListener("lenis:ready", onLenisReady);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.removeEventListener("lenis:ready", onLenisReady);
      if (attachedLenis && typeof attachedLenis.off === "function") {
        attachedLenis.off("scroll", updateScrollState);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`viewport-blur-top ${isScrolled ? "is-scrolled" : ""}`}
        aria-hidden="true"
      />
      <div
        className={`viewport-blur-bottom ${
          isScrolled && !isAtFooter ? "is-scrolled" : ""
        } ${isAtFooter ? "at-footer" : ""}`}
        aria-hidden="true"
        style={{
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
        }}
      />
    </>
  );
}
