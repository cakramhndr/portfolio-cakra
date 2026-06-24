import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOADING_LABELS = [
  "Initializing",
  "Loading projects",
  "Almost there",
  "Ready",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameContainerRef = useRef<HTMLDivElement>(null);
  const nameTextRef = useRef<HTMLHeadingElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const progressWrapperRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const [labelIndex, setLabelIndex] = useState(0);

  // Reset refs on each render to avoid duplicates in StrictMode
  charsRef.current = [];

  // Loading label cycle every 750ms
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % LOADING_LABELS.length);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  // GSAP animation timeline — useLayoutEffect fires synchronously before paint
  useLayoutEffect(() => {
    const container = containerRef.current;
    const nameContainer = nameContainerRef.current;
    const nameText = nameTextRef.current;
    const progressWrapper = progressWrapperRef.current;
    const progressFill = progressFillRef.current;

    if (
      !container ||
      !nameContainer ||
      !nameText ||
      !progressWrapper ||
      !progressFill
    )
      return;

    let split: any = null;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(container, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => onCompleteRef.current(),
          });
        },
      });

      // 1. Name container slides in from left (starts at 0s)
      tl.fromTo(
        nameContainer,
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        0,
      );

      // 2. Split text and animate characters with SplitText (starts at 0.5s)
      split = new SplitText(nameText, { type: "chars" });
      const chars = split.chars;

      gsap.set(chars, {
        opacity: 0,
        y: (i: number) => (i % 2 === 0 ? -40 : 40), // even from top, odd from bottom
        rotationZ: -10,
      });

      tl.to(
        chars,
        {
          opacity: 1,
          y: 0,
          rotationZ: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        0.5,
      );

      // 3. Progress bar wrapper fades in from below (at 2.2s)
      tl.fromTo(
        progressWrapper,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        2.2,
      );

      // 4. Progress bar fills 0→100% (starts at 2.5s, duration 2s)
      tl.to(
        progressFill,
        {
          width: "100%",
          duration: 2,
          ease: "power3.inOut",
        },
        2.5,
      );
    });

    return () => {
      if (split) split.revert();
      ctx.revert();
    };
  }, []);

  // Animated dots for loading label
  const dotCount = (labelIndex % 3) + 1;
  const dots = ".".repeat(dotCount);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fdf8f5" }}
    >
      {/* Blob top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-90px",
          left: "-90px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
          opacity: 0.45,
          animation: "blobPulse 4s ease-in-out infinite",
        }}
      />

      {/* Blob bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-70px",
          right: "-70px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
          opacity: 0.45,
          animation: "blobPulse 4s ease-in-out infinite 2s",
        }}
      />

      {/* Decorative dots */}
      <div
        className="absolute"
        style={{
          top: "20%",
          right: "28%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#f97316",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "25%",
          left: "16%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#f97316",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute"
        style={{
          top: "38%",
          left: "40%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#f97316",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "55%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#f97316",
          opacity: 0.35,
        }}
      />

      {/* Name */}
      <div ref={nameContainerRef}>
        <h1
          ref={nameTextRef}
          className="font-display font-bold select-none"
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 700,
            color: "#1a2035",
          }}
        >
          Cakra Mahendra Putra
        </h1>
      </div>

      {/* Progress bar wrapper */}
      <div
        ref={progressWrapperRef}
        className="flex flex-col items-center"
        style={{ opacity: 0 }}
      >
        {/* Track */}
        <div
          className="overflow-hidden"
          style={{
            width: "300px",
            height: "3px",
            backgroundColor: "#e5e0db",
            borderRadius: "999px",
          }}
        >
          {/* Fill */}
          <div
            ref={progressFillRef}
            style={{
              width: "0%",
              height: "3px",
              backgroundColor: "#f97316",
              borderRadius: "999px",
            }}
          />
        </div>

        {/* Loading label */}
        <p
          className="mt-2"
          style={{
            fontSize: "11px",
            color: "#a09890",
            letterSpacing: "0.05em",
          }}
        >
          {LOADING_LABELS[labelIndex]}
          <span
            className="inline-block"
            style={{ width: "12px", textAlign: "left" }}
          >
            {dots}
          </span>
        </p>
      </div>

      {/* Keyframes for blob pulse */}
      <style>{`
        @keyframes blobPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
