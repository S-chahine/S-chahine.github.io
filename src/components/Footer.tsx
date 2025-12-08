import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const socialLinks = [
  { icon: FaGithub, href: "https://github.com/S-chahine", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/samah-chahine-4a4435252", label: "LinkedIn" },
  { icon: Mail, href: "mailto:samah_chahine@outlook.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <a href="#home" className="text-2xl font-bold gradient-text">
                {"<Dev />"}
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                Building digital experiences with passion
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:glow-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Samah Chahine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
