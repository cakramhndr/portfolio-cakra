import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const chips = [
  "React",
  "TypeScript",
  "Laravel",
  "Tailwind CSS",
  "Framer Motion",
  "Vite",
  "AI Workflows",
];

const facts = [
  {
    icon: <Code2 size={22} />,
    text: "Building SwiftPOS — modern POS system with React & Laravel",
  },
  {
    icon: <Brain size={22} />,
    text: "Leveraging AI tools daily to accelerate development",
  },
  {
    icon: <Rocket size={22} />,
    text: "Focused on shipping fast, clean, and modern products",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-0 min-h-screen flex items-center section-padding bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a]"
    >
      <div className="container-main w-full">
        {/* Top: avatar + name */}
        <motion.div
          className="flex items-center gap-8 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-2xl font-display">
              CMP
            </span>
          </div>
          <div>
            <p className="text-white/60 text-xs tracking-widest uppercase mb-1">
              About me
            </p>
            <h2 className="font-display text-3xl font-bold text-white">
              Cakra Mahendra Putra
            </h2>
            <p className="text-white/70 mt-1">
              Frontend Developer & AI-Assisted Builder
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-white/80 text-lg leading-relaxed max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I build modern web applications using React, Laravel, and AI-assisted
          workflows. Currently building SwiftPOS while exploring efficient
          product development through AI.
        </motion.p>

        {/* Chips */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Fact cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              className="bg-white/10 border border-white/15 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-white/80 mb-4">{fact.icon}</div>
              <p className="text-white/75 text-sm leading-relaxed">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
