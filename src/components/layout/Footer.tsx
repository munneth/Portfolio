
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { 
    name: "GitHub", 
    icon: <Github size={20} />, 
    url: "https://github.com/yourusername" 
  },
  { 
    name: "LinkedIn", 
    icon: <Linkedin size={20} />, 
    url: "https://linkedin.com/in/yourusername" 
  },
  { 
    name: "Twitter", 
    icon: <Twitter size={20} />, 
    url: "https://twitter.com/yourusername" 
  }
];

const Footer = () => {
  return (
    <footer className="py-6 border-t border-coral/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <p className="text-gold text-sm font-mono">
              Designed & Built by YourName
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
