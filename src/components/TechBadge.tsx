import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  index?: number;
}

export default function TechBadge({ name, index = 0 }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block px-4 py-2 text-sm font-medium text-[#fe7f2d] bg-[#fe7f2d]/10 rounded-full border border-[#fe7f2d]/20 hover:bg-[#fe7f2d] hover:text-white transition-colors duration-300 cursor-default"
    >
      {name}
    </motion.span>
  );
}
