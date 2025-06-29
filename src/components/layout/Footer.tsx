import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { 
    name: "GitHub", 
    icon: <Github size={20} />, 
    url: "https://github.com/munneth" 
  },
  { 
    name: "LinkedIn", 
    icon: <Linkedin size={20} />, 
    url: "https://linkedin.com/in/munnethgill" 
  },
  { 
    name: "Instagram", 
    icon: <Instagram size={20} />, 
    url: "https://instagram.com/munneth_gill" 
  }
];

const Footer = () => {
  return (
    <footer className="py-6 border-t border-coral/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <p className="text-gold text-sm font-mono">
              Designed & Built by Munneth Gill
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-coral hover:text-coral-light transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
