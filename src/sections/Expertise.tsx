import { motion } from "framer-motion";
import { Code2, Server, Terminal } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import TechBadge from "../components/TechBadge";
import { skillCategories } from "../data/skills";
import { currentFocus } from "../data/experience";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  server: Server,
  terminal: Terminal,
};

function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="container-main w-full">
        <SectionHeader title="Tech Stack" />
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/10 rounded-2xl p-8 hover:border-[#fe7f2d]/30 hover:shadow-[0_0_30px_rgba(254,127,45,0.08)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#fe7f2d]/10 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[#fe7f2d]" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-6 text-[#233d4d]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <TechBadge key={skill} name={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FocusSection() {
  return (
    <section className="min-h-screen flex items-center section-padding bg-[#f5f5f5]">
      <div className="container-main w-full">
        <SectionHeader title="Current Focus" />
        <div className="grid md:grid-cols-3 gap-6">
          {currentFocus.map((focus, i) => (
            <motion.div
              key={focus.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/10 rounded-2xl p-8 hover:border-[#fe7f2d]/30 hover:shadow-[0_0_30px_rgba(254,127,45,0.08)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-[#fe7f2d]/10 flex items-center justify-center mb-5">
                <span className="text-[#fe7f2d] font-display font-bold text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-[#233d4d]">
                {focus.title}
              </h3>
              <p className="text-[#4a5a6a] text-sm leading-relaxed">
                {focus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Expertise() {
  return (
    <>
      <TechStackSection />
      <FocusSection />
    </>
  );
}
