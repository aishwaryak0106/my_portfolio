import React, { useState } from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Smooth scroll function
  const goToSection = (id) => {
    setShowMenu(false); // close mobile menu first
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // small delay to allow menu close
  };

  const navItems = ['home','about','skills','certifications','projects','experience','contact'];

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-6 md:px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-white">
          Aishwarya<span className="text-purple">Kavil</span>
          <div className="w-4 h-4 bg-purple rounded-full inline-block ml-2"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative text-white/80 transition duration-300 hover:text-purple"
            >
              <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Download CV button */}
          <a
            href="/Aishwarya K.pdf"
            download="Aishwarya K.pdf"
            className="px-4 py-2 bg-gradient-to-r from-purple to-pink text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-300 rounded-b-lg p-4 flex flex-col space-y-4 text-center shadow-lg">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="text-white/80 hover:text-purple py-2"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Mobile Download CV */}
          <a
            href="/Aishwarya K.pdf"
            download="Aishwarya K.pdf"
            className="px-6 py-3 bg-gradient-to-r from-purple to-pink text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
