import { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center section-padding bg-[#f5f5f5]"
    >
      <div className="container-main w-full">
        <SectionHeader title="Contact" />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold text-[#233d4d] mb-4">
                Let's Work Together
              </h3>
              <p className="text-[#4a5a6a] mb-8 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to
                reach out. I'm always open to new opportunities and
                collaborations.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#fe7f2d]/10 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fe7f2d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a9aa8]">Email</p>
                    <p className="text-[#233d4d] font-medium">
                      cakra@email.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#fe7f2d]/10 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fe7f2d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a9aa8]">Social</p>
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/15 text-[#233d4d] placeholder:text-[#8a9aa8] focus:outline-none focus:border-[#fe7f2d] focus:shadow-[0_0_10px_rgba(254,127,45,0.1)] transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/15 text-[#233d4d] placeholder:text-[#8a9aa8] focus:outline-none focus:border-[#fe7f2d] focus:shadow-[0_0_10px_rgba(254,127,45,0.1)] transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/15 text-[#233d4d] placeholder:text-[#8a9aa8] focus:outline-none focus:border-[#fe7f2d] focus:shadow-[0_0_10px_rgba(254,127,45,0.1)] transition-all duration-300"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/15 text-[#233d4d] placeholder:text-[#8a9aa8] focus:outline-none focus:border-[#fe7f2d] focus:shadow-[0_0_10px_rgba(254,127,45,0.1)] transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={submitted ? {} : { scale: 1.02, y: -1 }}
                whileTap={submitted ? {} : { scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-[#fe7f2d] to-[#e06a1a] text-white hover:shadow-[0_0_30px_rgba(254,127,45,0.3)]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
