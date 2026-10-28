"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

/** Animate arrivals without intercepting links or delaying navigation. */
export function PageTransitions({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const flash = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const panels = useRef<HTMLElement[]>([]);
  const [pages, setPages] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const play = (
      element: HTMLElement | null,
      keyframes: Keyframe[],
      duration: number,
    ) => {
      if (!element || reduced.matches) return;
      const animation = element.animate(keyframes, {
        duration,
        easing: "ease-out",
      });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const reveal = (panel?: HTMLElement, direction = 1) => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      play(
        flash.current,
        [
          { opacity: 0, transform: "scaleX(0)" },
          { opacity: 0.9, transform: "scaleX(0.65)", offset: 0.45 },
          { opacity: 0, transform: "scaleX(1)" },
        ],
        700,
      );
      play(
        panel ?? content.current,
        [
          { opacity: 0.2, transform: `translateY(${direction * 18}px)` },
          { opacity: 1, transform: "translateY(0)" },
        ],
        580,
      );
    };
    panels.current = Array.from(
      document.querySelectorAll<HTMLElement>("[data-page-panel]"),
    );
    setPages(panels.current.map((panel) => panel.dataset.pageLabel ?? ""));
    setActive(0);
    if (panels.current.length > 1)
      document.documentElement.classList.add("paged-home");
    reveal();
    let current: Element | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((item) => item.isIntersecting);
        if (!entry || entry.target === current) return;
        const first = current === null;
        const previous = panels.current.indexOf(current as HTMLElement);
        const next = panels.current.indexOf(entry.target as HTMLElement);
        current = entry.target;
        setActive(next);
        if (!first) reveal(entry.target as HTMLElement, next >= previous ? 1 : -1);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    panels.current.forEach((panel) => observer.observe(panel));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      document.documentElement.classList.remove("paged-home");
    };
  }, [pathname]);
  const move = (index: number) =>
    panels.current[index]?.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  return (
    <>
      <div ref={content} className="route-content">
        {children}
      </div>
      <div ref={flash} className="page-flash" aria-hidden="true" />
      {pages.length > 1 && (
        <nav
          className="page-stepper"
          aria-label="Page navigation"
        >
          <button
            onClick={() => move(active - 1)}
            disabled={active === 0}
            aria-label="Previous page"
          >
            <ChevronUp size={17} />
          </button>
          <span title={pages[active]}>
            {String(active + 1).padStart(2, "0")}{" "}
            <small>/ {String(pages.length).padStart(2, "0")}</small>
          </span>
          <button
            onClick={() => move(active + 1)}
            disabled={active === pages.length - 1}
            aria-label="Next page"
          >
            <ChevronDown size={17} />
          </button>
        </nav>
      )}
    </>
  );
}
