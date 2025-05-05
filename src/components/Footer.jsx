import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">

        {/* Column 1: Name + Tagline + Icons */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Shivam Vispute</h3>
          <p className="text-xl text-zinc-400 mb-4 font-medium">
            Helping you build seamless full-stack experiences.
          </p>
          <div className="flex gap-6 text-zinc-400">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 2: General Links Split in 2 */}
        {/* Column 2: General Links Split in 2 */}
        <div>
        <h4 className="text-white font-semibold mb-2">General</h4>
        <div className="grid grid-cols-2 gap-4 text-zinc-200">
            <ul className="space-y-2">
            <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-500">About</a></li>
            <li><a href="#education" className="hover:text-indigo-500">Education</a></li>
            <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
            </ul>
            <ul className="space-y-2">
            <li><a href="#experience" className="hover:text-indigo-500">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
            </ul>
        </div>
        </div>


        {/* Column 3: Contact Message + Email */}
        <div>
          <p className="text-xl text-zinc-400 font-medium mb-4">
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
          <a
            href="mailto:shivamvispute11@gmail.com"
            className="inline-flex items-center gap-2 text-indigo-400 hover:underline text-xl font-medium"
          >
            <Mail size={20} /> shivamvispute11@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-zinc-500 mt-12">
        © {new Date().getFullYear()} Shivam Vispute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
