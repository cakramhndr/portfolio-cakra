import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".loading-text", { opacity: 1, duration: 0.5, ease: "power2.out" })
        .to(".loading-bar", {
          width: "100%",
          duration: 1.5,
          ease: "power3.inOut",
        })
        .to(el, { y: "-100%", duration: 0.8, ease: "power3.inOut", delay: 0.3 })
        .set(el, { display: "none" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <p className="loading-text font-display text-3xl font-bold gradient-text mb-8 opacity-0">
        Portfolio
      </p>
      <div className="w-48 h-1 bg-[#dddcc0] rounded-full overflow-hidden">
        <div className="loading-bar w-0 h-full bg-gradient-to-r from-accent to-accent-dark rounded-full" />
      </div>
    </div>
  );
}
