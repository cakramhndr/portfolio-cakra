import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string;
  scrub?: boolean | number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, ...options.from },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start || "top 85%",
            toggleActions: "play none none reverse",
            ...(options.scrub !== undefined && { scrub: options.scrub }),
          },
          ...options.to,
        },
      );
    });

    return () => ctx.revert();
  }, [options.from, options.to, options.start, options.scrub]);

  return ref;
}

export function useHeroReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const children = el.querySelectorAll("[data-reveal]");
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
