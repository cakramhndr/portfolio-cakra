import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_4px_15px_rgba(254,127,45,0.3)] hover:bg-accent-dark hover:-translate-y-1 transition-all duration-300 z-50 ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
