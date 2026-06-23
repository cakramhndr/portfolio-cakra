import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  BarChart3,
  ShoppingCart,
  Package,
  Sparkles,
  CheckCircle2,
  Clock,
  Circle,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import ImageModal from "../components/ImageModal";

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
  "Authentication",
  "Dashboard",
  "Product Management",
  "Categories",
  "Transactions",
  "Inventory",
  "Reports",
  "Purchase Orders",
  "Stock Opname",
  "AI Assistant",
];

const roadmapInProgress = ["Multi Store", "Mobile Optimization"];

const roadmapPlanned = [
  "Accounting Module",
  "Supplier Portal",
  "Advanced Analytics",
];

export default function SwiftPOSShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src: string, title: string) => {
    setModalSrc(src);
    setModalAlt(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="swiftpos" className="section-padding bg-[#f5f5f5]">
      <div className="container-main">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm text-center mb-4"
        >
          Currently Building
        </motion.p>

        {/* Main Showcase - 40/60 split */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Left: Info (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#233d4d] mb-4">
              SwiftPOS
            </h2>
            <p className="text-xl text-[#4a5a6a] font-light mb-6">
              Modern Point of Sale & Inventory Management System
            </p>

            {/* Status badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#fe7f2d] animate-pulse" />
              <span className="text-sm font-medium text-[#fe7f2d]">
                Active Development
              </span>
            </div>

            <p className="text-[#4a5a6a] leading-relaxed mb-8">
              SwiftPOS is a modern POS and inventory management platform built
              using React, Laravel, MySQL, and AI-assisted development
              workflows. The platform helps businesses manage sales, inventory,
              purchasing, reporting, and business insights in a single
              integrated system.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="inline-block px-4 py-1.5 text-sm font-medium text-[#fe7f2d] bg-[#fe7f2d]/10 rounded-full border border-[#fe7f2d]/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://github.com/cakramhndr/swift-pos-web"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] text-white font-medium hover:shadow-[0_0_30px_rgba(254,127,45,0.3)] transition-all duration-300"
              >
                <ExternalLink size={18} /> View Project
              </motion.a>
              <motion.a
                href="https://github.com/cakramhndr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#fe7f2d] text-[#fe7f2d] font-medium hover:bg-[#fe7f2d] hover:text-white transition-all duration-300"
              >
                <Github size={18} /> View GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Dashboard Screenshot (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative cursor-pointer group lg:col-span-3"
            onClick={() =>
              openModal(
                "/projects/swiftpos/dashboard.png",
                "SwiftPOS Dashboard",
              )
            }
          >
            {/* Browser mockup */}
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden hover:shadow-[0_30px_80px_rgba(254,127,45,0.15)] transition-shadow duration-500">
              {/* Browser toolbar */}
              <div className="bg-[#f5f5f5] px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-[#8a9aa8] border border-gray-200">
                  swiftpos.app / dashboard
                </div>
              </div>
              {/* Screenshot */}
              <img
                src="/projects/swiftpos/dashboard.png"
                alt="SwiftPOS Dashboard"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm mb-2">
            Features
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#233d4d]">
            Key Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              badge={feature.badge}
              index={i}
              onImageClick={openModal}
            />
          ))}
        </div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#fe7f2d] font-medium tracking-widest uppercase text-sm mb-2">
            Roadmap
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#233d4d]">
            Development Progress
          </h2>
          <p className="text-[#4a5a6a] mt-2">
            Current SwiftPOS development roadmap
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Completed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-green-200/50 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={18} className="text-green-500" />
              <h3 className="font-display font-semibold text-[#233d4d]">
                Completed
              </h3>
            </div>
            <ul className="space-y-2">
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
          </motion.div>

          {/* In Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-[#fe7f2d]/20 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-[#fe7f2d]" />
              <h3 className="font-display font-semibold text-[#233d4d]">
                In Progress
              </h3>
            </div>
            <ul className="space-y-2">
              {roadmapInProgress.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#4a5a6a]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe7f2d] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Planned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200/50 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Circle size={18} className="text-gray-400" />
              <h3 className="font-display font-semibold text-[#233d4d]">
                Planned
              </h3>
            </div>
            <ul className="space-y-2">
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
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </section>
  );
}
