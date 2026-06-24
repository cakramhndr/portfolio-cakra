import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  BarChart3,
  ShoppingCart,
  Package,
  Sparkles,
  CheckCircle2,
  Clock,
  Circle,
  Database,
  Users,
  Brain,
  Percent,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import ImageModal from "./ImageModal";

interface SwiftPOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const techStack = [
  "React",
  "TypeScript",
  "Laravel",
  "MySQL",
  "Tailwind CSS",
  "REST API",
  "AI Integration",
];

const features = [
  {
    icon: <BarChart3 size={20} />,
    title: "Analytics Dashboard",
    description:
      "Business intelligence dashboard with revenue tracking, customer analytics, profit monitoring, and sales performance insights.",
    imageSrc: "/projects/swiftpos/reports.png",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "POS Transactions",
    description:
      "Fast checkout experience with product catalog, shopping cart, payment processing, and invoice generation.",
    imageSrc: "/projects/swiftpos/transactions.png",
  },
  {
    icon: <Package size={20} />,
    title: "Inventory Management",
    description:
      "Advanced inventory tracking with stock monitoring, product insights, valuation analytics, and inventory movement history.",
    imageSrc: "/projects/swiftpos/product-detail.png",
  },
  {
    icon: <Sparkles size={20} />,
    title: "AI Business Assistant",
    description:
      "AI-powered business insights that help analyze sales, inventory, products, and customer behavior.",
    imageSrc: "/projects/swiftpos/ai-assistant.png",
    badge: "✨ AI Powered",
  },
];

const roadmapCompleted = [
  "POS Transactions",
  "Product Management",
  "Categories",
  "Suppliers",
  "Customers",
  "Inventory Management",
  "Purchase Orders",
  "Stock Opname",
  "Customer Returns",
  "Cash Register Management",
  "Sales Reporting",
  "CRM Analytics",
  "Role & Permission System",
  "Activity Logs",
  "AI Assistant Foundation",
];

const roadmapInProgress = [
  {
    title: "AI Conversation Intelligence",
    goal: "AI understands business data directly from the database",
    examples: [
      "Top selling products",
      "Low stock prediction",
      "Customer insights",
      "Profit analysis",
    ],
  },
];

const roadmapPlanned = [
  "Executive Dashboard AI",
  "Predictive Analytics",
  "Multi Store Management",
  "Mobile Optimization",
];

const stats = [
  { value: "85%", label: "Beta Complete", icon: Percent },
  { value: "10+", label: "Business Modules", icon: Database },
  { value: "5", label: "User Roles", icon: Users },
  { value: "AI", label: "Assistant Ready", icon: Brain },
];

export default function SwiftPOSModal({ isOpen, onClose }: SwiftPOSModalProps) {
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
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              key="modal"
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
                    Currently Building
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-[#233d4d]">
                    SwiftPOS
                  </h2>
                  <p className="text-lg text-[#4a5a6a] font-light">
                    AI-Powered Retail Management Platform
                  </p>
                  {/* Status badges */}
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-green-600">
                        SwiftPOS Beta
                      </span>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium text-[#fe7f2d] bg-[#fe7f2d]/10 rounded-full border border-[#fe7f2d]/20">
                      85% Complete
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-[#fe7f2d] bg-[#fe7f2d]/10 rounded-full border border-[#fe7f2d]/20">
                      10+ Business Modules
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full border border-purple-200">
                      AI Powered
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
                    SwiftPOS is an AI-powered retail management platform built
                    with React and Laravel. The platform combines Point of Sale,
                    Inventory Management, Purchase Orders, Customer Relationship
                    Management, Cash Register Operations, Reporting, Audit Logs,
                    and AI-assisted business insights into a single integrated
                    system.
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

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href="https://github.com/cakramhndr/swift-pos-web"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] text-white text-sm font-medium"
                    >
                      <ExternalLink size={16} /> View Project
                    </motion.a>
                    <motion.a
                      href="https://github.com/cakramhndr"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#fe7f2d] text-[#fe7f2d] text-sm font-medium hover:bg-[#fe7f2d] hover:text-white transition-colors"
                    >
                      <Github size={16} /> View GitHub
                    </motion.a>
                  </div>
                </div>

                {/* Right column — Dashboard screenshot */}
                <div
                  className="lg:col-span-3 relative cursor-pointer group"
                  onClick={() =>
                    openImageModal(
                      "/projects/swiftpos/dashboard.png",
                      "SwiftPOS Dashboard",
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
                        swiftpos.app / dashboard
                      </div>
                    </div>
                    <img
                      src="/projects/swiftpos/dashboard.png"
                      alt="SwiftPOS Dashboard"
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
                      badge={feature.badge}
                      index={i}
                      onImageClick={openImageModal}
                    />
                  ))}
                </div>
              </div>

              {/* ===== DEVELOPMENT PROGRESS ===== */}
              <div>
                <div className="text-center mb-8">
                  <p className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm mb-2">
                    Roadmap
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#233d4d]">
                    Development Progress
                  </h3>
                  <p className="text-[#4a5a6a] text-sm mt-1">
                    Current SwiftPOS development roadmap
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] rounded-full mx-auto mt-3" />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {/* Completed */}
                  <div className="bg-white rounded-2xl border border-green-200/50 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 size={18} className="text-green-500" />
                      <h4 className="font-display font-semibold text-[#233d4d]">
                        Completed
                      </h4>
                    </div>
                    <ul className="space-y-1.5">
                      {roadmapCompleted.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-[#4a5a6a]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* In Progress */}
                  <div className="bg-white rounded-2xl border border-[#fe7f2d]/20 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock size={18} className="text-[#fe7f2d]" />
                      <h4 className="font-display font-semibold text-[#233d4d]">
                        In Progress
                      </h4>
                    </div>
                    <div className="mb-3">
                      <p className="font-medium text-sm text-[#233d4d]">
                        🚧 AI Conversation Intelligence
                      </p>
                      <p className="text-xs text-[#4a5a6a] mt-1">
                        AI understands business data directly from the database
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {roadmapInProgress[0].examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-center gap-2 text-sm text-[#4a5a6a]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fe7f2d] shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Planned */}
                  <div className="bg-white rounded-2xl border border-gray-200/50 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Circle size={18} className="text-gray-400" />
                      <h4 className="font-display font-semibold text-[#233d4d]">
                        Planned
                      </h4>
                    </div>
                    <ul className="space-y-1.5">
                      {roadmapPlanned.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-[#4a5a6a]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
