import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
}

export default function SocialLinks({
  size = "md",
  className = "",
}: SocialLinksProps) {
  const iconSize = size === "sm" ? 16 : 18;
  const containerClass = size === "sm" ? "w-9 h-9" : "w-11 h-11";

  const links = [
    { href: "#", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:cakra@email.com", icon: Mail, label: "Email" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${containerClass} rounded-full bg-white/60 backdrop-blur-lg border border-[#fe7f2d]/15 flex items-center justify-center text-text-secondary hover:bg-[#fe7f2d] hover:text-white hover:border-[#fe7f2d] transition-all duration-300`}
          aria-label={link.label}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
