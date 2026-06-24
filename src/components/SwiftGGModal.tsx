import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  LayoutDashboard,
  Gamepad2,
  ShoppingCart,
  CheckCircle,
  Image as ImageIcon,
  Smartphone,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import ImageModal from "./ImageModal";

interface SwiftGGModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const techStack = ["React JS", "Laravel", "Tailwind CSS"];

const features = [
  {
    icon: <LayoutDashboard size={20} />,
    title: "Landing Page",
    description: "Hero section with game top up CTA and featured games",
    imageSrc: "/projects/SwiftGG/Landing-page.png",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Top Up Detail",
    description: "Select nominal, verify Game ID, choose payment method",
    imageSrc: "/projects/SwiftGG/Detail-page.png",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "Checkout",
    description: "Purchase details with payment information and confirmation",
    imageSrc: "/projects/SwiftGG/checkout.png",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Checkout Complete",
    description: "Order confirmation with WhatsApp admin contact option",
    imageSrc: "/projects/SwiftGG/Complete-checkout.png",
  },
];

const stats = [
  { value: "6", label: "Screens Designed", icon: ImageIcon },
  { value: "Multi", label: "Payment Method", icon: ShoppingCart },
  { value: "Global", label: "Rank Feature", icon: LayoutDashboard },
  { value: "In Design", label: "Phase", icon: Gamepad2 },
];

export default function SwiftGGModal({ isOpen, onClose }: SwiftGGModalProps) {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageModalSrc, setImageModalSrc] = useState("");
  const [imageModalAlt, setImageModalAlt] = useState("");

  const openImageModal = (src: string, title: string) => {
    setImageModalSrc(src);
    setImageModalAlt(title);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="swiftgg-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              key="swiftgg-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-[1200px] max-h-[90vh] overflow-y-auto z-51"
              style={{ padding: "32px" }}
            >
              {/* ===== HEADER ===== */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm mb-1">
                    WEB APP DESIGN
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-[#233d4d]">
                    SwiftGG
                  </h2>
                  <p className="text-lg text-[#4a5a6a] font-light">
                    Game Top Up Platform
                  </p>
                  {/* Status badges */}
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full border border-blue-200">
                      Figma Design
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full border border-purple-200">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full border border-gray-200">
                      6 Screens
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#4a5a6a] hover:text-[#233d4d] shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ===== HERO CONTENT (two column) ===== */}
              <div className="grid lg:grid-cols-5 gap-8 mb-12">
                {/* Left column */}
                <div className="lg:col-span-2">
                  <p className="text-[#4a5a6a] leading-relaxed mb-6">
                    A modern game top up platform designed for SwiftGG. Players
                    can top up their favorite games with multiple payment
                    methods, track their orders, and discover new games.
                    Features include game catalog, top up flow, global rank, and
                    rewards system.
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="text-center p-3 rounded-xl bg-white border border-[#fe7f2d]/10"
                        >
                          <Icon
                            size={18}
                            className="text-[#fe7f2d] mx-auto mb-1"
                          />
                          <p className="font-display font-bold text-lg text-[#233d4d] leading-none mb-0.5">
                            {stat.value}
                          </p>
                          <p className="text-[#8a9aa8] text-[10px] leading-tight">
                            {stat.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium text-[#fe7f2d] bg-[#fe7f2d]/10 rounded-full border border-[#fe7f2d]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status note */}
                  <p className="text-sm text-[#8a9aa8] italic mb-4">
                    Currently in UI/UX design phase
                  </p>

                  {/* Button */}
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      disabled
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] text-white text-sm font-medium opacity-60 cursor-not-allowed"
                    >
                      <ExternalLink size={16} /> View Figma
                    </motion.button>
                  </div>
                </div>

                {/* Right column — Landing page screenshot */}
                <div
                  className="lg:col-span-3 relative cursor-pointer group"
                  onClick={() =>
                    openImageModal(
                      "/projects/SwiftGG/Landing-page.png",
                      "SwiftGG Landing Page",
                    )
                  }
                >
                  <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_20px_60px_rgba(254,127,45,0.12)] transition-shadow duration-500">
                    {/* Browser toolbar */}
                    <div className="bg-[#f5f5f5] px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-xs text-[#8a9aa8] border border-gray-200">
                        swiftgg.app
                      </div>
                    </div>
                    <img
                      src="/projects/SwiftGG/Landing-page.png"
                      alt="SwiftGG Landing Page"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* ===== KEY FEATURES ===== */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <p className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm mb-2">
                    Features
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#233d4d]">
                    Key Features
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] rounded-full mx-auto mt-3" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {features.map((feature, i) => (
                    <FeatureCard
                      key={feature.title}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      imageSrc={feature.imageSrc}
                      index={i}
                      onImageClick={openImageModal}
                    />
                  ))}
                </div>
              </div>

              {/* ===== DESIGN SCREENS ===== */}
              <div>
                <div className="text-center mb-8">
                  <p className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm mb-2">
                    Screens
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#233d4d]">
                    More Screens
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] rounded-full mx-auto mt-3" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Login */}
                  <div
                    className="group bg-white rounded-2xl border border-[#fe7f2d]/10 overflow-hidden hover:border-[#fe7f2d]/30 hover:shadow-[0_0_30px_rgba(254,127,45,0.08)] transition-all duration-500 cursor-pointer"
                    onClick={() =>
                      openImageModal(
                        "/projects/SwiftGG/Login.png",
                        "Sign In Screen",
                      )
                    }
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src="/projects/SwiftGG/Login.png"
                        alt="Sign in screen"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display font-semibold text-[#233d4d]">
                        Sign In
                      </h4>
                      <p className="text-sm text-[#4a5a6a] mt-1">
                        User authentication sign in
                      </p>
                    </div>
                  </div>

                  {/* Sign Up */}
                  <div
                    className="group bg-white rounded-2xl border border-[#fe7f2d]/10 overflow-hidden hover:border-[#fe7f2d]/30 hover:shadow-[0_0_30px_rgba(254,127,45,0.08)] transition-all duration-500 cursor-pointer"
                    onClick={() =>
                      openImageModal(
                        "/projects/SwiftGG/Sign-up.png",
                        "Sign Up Screen",
                      )
                    }
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src="/projects/SwiftGG/Sign-up.png"
                        alt="Sign up screen"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display font-semibold text-[#233d4d]">
                        Sign Up
                      </h4>
                      <p className="text-sm text-[#4a5a6a] mt-1">
                        New user registration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal for feature screenshots */}
      <ImageModal
        isOpen={imageModalOpen}
        onClose={closeImageModal}
        src={imageModalSrc}
        alt={imageModalAlt}
      />
    </>
  );
}
