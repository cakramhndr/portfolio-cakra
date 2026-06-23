import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
  index?: number;
  onImageClick: (src: string, title: string) => void;
}

export default function FeatureCard({
  icon,
  title,
  description,
  imageSrc,
  badge,
  index = 0,
  onImageClick,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-[#fe7f2d]/10 overflow-hidden hover:border-[#fe7f2d]/30 hover:shadow-[0_0_30px_rgba(254,127,45,0.08)] transition-all duration-500"
    >
      {/* Image */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onImageClick(imageSrc, title)}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {badge && (
          <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-[#fe7f2d] rounded-full border border-[#fe7f2d]/20 shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="w-10 h-10 rounded-lg bg-[#fe7f2d]/10 flex items-center justify-center mb-4 text-[#fe7f2d]">
          {icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-[#233d4d] mb-2">
          {title}
        </h3>
        <p className="text-[#4a5a6a] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
