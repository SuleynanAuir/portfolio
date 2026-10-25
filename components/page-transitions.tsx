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
  const zh = /(^|\/)zh(\/|$)/.test(pathname);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastFlash = -Infinity;
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
    const reveal = (panel?: HTMLElement) => {
      if (performance.now() - lastFlash < 500) return;
      lastFlash = performance.now();
      play(
        flash.current,
        [{ opacity: 0 }, { opacity: 0.18, offset: 0.15 }, { opacity: 0 }],
        420,
      );
      play(
        panel ?? content.current,
        [
          { opacity: 0.35 },
          { opacity: 1 },
        ],
        360,
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
        current = entry.target;
        setActive(panels.current.indexOf(entry.target as HTMLElement));
        if (!first) reveal(entry.target as HTMLElement);
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
          aria-label={zh ? "分屏导航" : "Page navigation"}
        >
          <button
            onClick={() => move(active - 1)}
            disabled={active === 0}
            aria-label={zh ? "上一页" : "Previous page"}
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
            aria-label={zh ? "下一页" : "Next page"}
          >
            <ChevronDown size={17} />
          </button>
        </nav>
      )}
    </>
  );
}
