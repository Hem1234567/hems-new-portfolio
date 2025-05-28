import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#certifications", label: "Certifications" },
    { href: "#timeline", label: "Timeline" },
    { href: "#projects", label: "Projects" },
    { href: "#contributions", label: "Contributions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-18 font-bold">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-blue-200 transition-colors duration-300 relative group"
                data-aos="fade-down"
                data-aos-delay={100 * index}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
            data-aos="fade-down"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-white/20"
            data-aos="fade-down"
          >
            <div className="flex flex-col items-center px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
