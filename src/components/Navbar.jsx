// Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <nav className="bg-[#0F0F1A] w-full shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            
            <div className="text-[#F1F5F9] text-xl md:text-2xl font-bold">
              <span className="text-[#6B5BFF]">Code</span>withmimi
            </div>

            
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#F1F5F9] hover:text-[#6B5BFF] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6B5BFF] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#F1F5F9] focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#F1F5F9] hover:text-[#6B5BFF] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Optional: Add some CSS for smooth scrolling */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default Navbar;