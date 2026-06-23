import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  textWhite?: boolean;
}

export default function SectionHeader({
  title,
  textWhite,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2
        className={`font-display text-3xl md:text-4xl font-bold ${
          textWhite ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1 rounded-full mx-auto mt-4 ${
          textWhite
            ? "bg-white/40"
            : "bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a]"
        }`}
      />
    </motion.div>
  );
}
