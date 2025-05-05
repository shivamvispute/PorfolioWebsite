import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const close = () => setShowDropdown(false);
    window.addEventListener('scroll', close);
    window.addEventListener('click', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('click', close);
    };
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-sm text-white font-medium relative">
        <a
          href="#home"
          className="px-4 py-2 rounded-full transition hover:bg-white/10 hover:text-indigo-400"
        >
          Home
        </a>
        <a
          href="#about"
          className="px-4 py-2 rounded-full transition hover:bg-white/10 hover:text-indigo-400"
        >
          About
        </a>
        <a
          href="#education"
          className="px-4 py-2 rounded-full transition hover:bg-white/10 hover:text-indigo-400"
        >
          Education
        </a>
        <a
          href="#skills"
          className="px-4 py-2 rounded-full transition hover:bg-white/10 hover:text-indigo-400"
        >
          Skills
        </a>

        {/* More Dropdown */}
        <div className="relative z-50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className="px-4 py-2 rounded-full hover:bg-white/10 hover:text-indigo-400 transition"
          >
            More
          </button>
          {showDropdown && (
            <div className="absolute top-10 right-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl text-left shadow-xl py-2 w-44">
              <a href="#experience" className="block px-4 py-2 hover:bg-white/10 text-white">Experience</a>
              <a href="#projects" className="block px-4 py-2 hover:bg-white/10 text-white">My Projects</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-white/10 text-white">Let’s Connect</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
