import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
    return () => ctx.revert();
  }, [level]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-text-secondary text-sm font-medium">{name}</span>
        <span className="text-accent text-sm font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-dark relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_2s_infinite]"
        />
      </div>
    </div>
  );
}
