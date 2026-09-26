"use client";

import { useEffect, useState } from "react";

export function ScrollBlur() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Blur activates when scrolling away from top (hero section)
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      if (scrolled) {
        document.documentElement.classList.add("has-scrolled");
      } else {
        document.documentElement.classList.remove("has-scrolled");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`viewport-blur-top ${isScrolled ? "is-scrolled" : ""}`}
        aria-hidden="true"
      />
      <div
        className={`viewport-blur-bottom ${isScrolled ? "is-scrolled" : ""}`}
        aria-hidden="true"
        style={{
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
        }}
      />
    </>
  );
}
