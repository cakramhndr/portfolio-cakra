import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.div
      style={{
        scaleX,
        opacity,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "#f97316",
        transformOrigin: "0%",
        zIndex: 50,
      }}
    />
  );
}
