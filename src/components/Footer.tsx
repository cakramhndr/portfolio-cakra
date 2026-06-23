import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#233d4d] pt-16 pb-8">
      <div className="container-main px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          <div>
            <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-[#eaeacf] to-[#fe7f2d] bg-clip-text text-transparent mb-4">
              CAKRA
            </h3>
            <p className="text-[#c4c4a8] text-sm leading-relaxed max-w-xs">
              Building modern web applications with React, Laravel, and
              AI-assisted workflows.
            </p>
            <div className="mt-6">
              <SocialLinks size="sm" />
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#c4c4a8] hover:text-[#fe7f2d] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-5">
              Tech Stack
            </h4>
            <ul className="space-y-3 text-[#c4c4a8] text-sm">
              <li>React & TypeScript</li>
              <li>Laravel & MySQL</li>
              <li>Tailwind CSS</li>
              <li>AI-Assisted Workflows</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-[#8a9aa8] text-sm">
            &copy; {currentYear} Cakra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
