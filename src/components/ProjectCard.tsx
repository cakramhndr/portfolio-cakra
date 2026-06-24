import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ShoppingBag,
  Smartphone,
  Gamepad2,
} from "lucide-react";
import type { Project } from "../data/projects";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails?: () => void;
}

export default function ProjectCard({
  project,
  index = 0,
  onViewDetails,
}: ProjectCardProps) {
  if (project.featured) {
    const isKencana = project.id === 2;
    const isUrbanLab = project.id === 3;
    const isSwiftGG = project.id === 4;
    const statusBadgeStyle = isKencana
      ? "text-gray-500 bg-gray-100 border-gray-200"
      : isUrbanLab || isSwiftGG
        ? "text-purple-600 bg-purple-100 border-purple-200"
        : "text-[#fe7f2d] bg-[#fe7f2d]/10 border-[#fe7f2d]/20";

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/10 rounded-2xl overflow-hidden hover:border-[#fe7f2d]/30 hover:shadow-[0_0_40px_rgba(254,127,45,0.1)] transition-all duration-500"
      >
        <div className="grid md:grid-cols-2">
          {/* Project visual placeholder */}
          <div className="bg-gradient-to-br from-[#fe7f2d]/10 to-[#fe7f2d]/5 p-12 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#fe7f2d]/20 flex items-center justify-center">
                {isKencana ? (
                  <ShoppingBag size={36} stroke="#fe7f2d" strokeWidth="1.5" />
                ) : isUrbanLab ? (
                  <Smartphone size={36} stroke="#fe7f2d" strokeWidth="1.5" />
                ) : isSwiftGG ? (
                  <Gamepad2 size={36} stroke="#fe7f2d" strokeWidth="1.5" />
                ) : (
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fe7f2d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="14" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                  </svg>
                )}
              </div>
              <p className="font-display text-2xl font-bold text-[#233d4d]">
                {isKencana
                  ? "Kencana Furniture"
                  : isUrbanLab
                    ? "UrbanLab"
                    : isSwiftGG
                      ? "SwiftGG"
                      : "SwiftPOS"}
              </p>
              <p className="text-[#4a5a6a] text-sm">
                {isKencana
                  ? "Online Furniture Store"
                  : isUrbanLab
                    ? "Shoe Store Mobile App"
                    : isSwiftGG
                      ? "Game Top Up Platform"
                      : "Point of Sale System"}
              </p>
            </div>
          </div>

          {/* Project info */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-display text-2xl font-bold text-[#233d4d]">
                {project.title}
              </h3>
              {project.status && (
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${statusBadgeStyle}`}
                >
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-[#4a5a6a] leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <TechBadge key={tech} name={tech} index={i} />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={onViewDetails}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] text-white text-sm font-medium"
              >
                <ExternalLink size={16} /> View Details
              </motion.button>
              {!isUrbanLab && !isSwiftGG && project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#fe7f2d] text-[#fe7f2d] text-sm font-medium hover:bg-[#fe7f2d] hover:text-white transition-colors"
                >
                  <Github size={16} /> GitHub
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Placeholder card
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/60 backdrop-blur-lg border border-dashed border-[#fe7f2d]/20 rounded-2xl p-8 text-center hover:border-[#fe7f2d]/30 transition-all duration-300"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#fe7f2d]/5 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fe7f2d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </div>
      <h3 className="font-display text-lg font-semibold text-[#233d4d] mb-2">
        {project.title}
      </h3>
      <p className="text-[#4a5a6a] text-sm">{project.description}</p>
    </motion.div>
  );
}
