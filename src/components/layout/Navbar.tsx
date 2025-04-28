
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 md:py-6",
      isScrolled ? "bg-navy/90 backdrop-blur shadow-md py-3 md:py-4" : "bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="text-aqua font-mono text-xl font-semibold">
          &lt;YourName /&gt;
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ol className="flex space-x-5 font-mono text-sm">
            {NavItems.map((item, i) => (
              <li key={i} className="opacity-0 animate-fade-in" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}>
                <a 
                  href={item.href} 
                  className="text-slate hover:text-aqua flex items-center py-1 px-2 transition"
                >
                  <span className="text-aqua mr-1">0{i+1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
          <div className="ml-4 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <Button asChild className="bg-transparent text-aqua border border-aqua hover:bg-aqua/10 rounded">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-aqua p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 w-full h-screen bg-navy/90 backdrop-blur transform transition-all ease-in-out duration-300 flex items-center justify-center md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center justify-center h-full">
          <ol className="flex flex-col items-center space-y-5 font-mono text-lg mb-8">
            {NavItems.map((item, i) => (
              <li key={i}>
                <a 
                  href={item.href} 
                  className="text-slate-light hover:text-aqua flex flex-col items-center py-2 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-aqua text-sm mb-1">0{i+1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
          <Button asChild className="bg-transparent text-aqua border border-aqua hover:bg-aqua/10 rounded">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
