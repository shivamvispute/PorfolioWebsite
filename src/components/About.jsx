import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-background text-foreground py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="lg:w-1/2">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-2">
            More About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi there! I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text">
              Shivam
            </span>
          </h2>

          <p className="text-zinc-400 mb-6 leading-relaxed text-sm md:text-base">
            I'm Shivam Vispute, a passionate full-stack developer with a keen eye for clean design and scalable systems. I specialize in building elegant user experiences backed by solid backend logic. My expertise spans React, Node.js, MongoDB, and AWS — and I'm driven by solving real-world problems with thoughtful code.
            <br /><br />
            When I'm not coding, you’ll find me exploring new technologies, reading about cloud infrastructure, or simply enjoying a good sunset. I value curiosity, collaboration, and continuous learning.
            <br /><br />
            I believe in writing code that not only works — but lasts. Every line should bring value and clarity.
          </p>

          {/* Social icons */}
          <div className="flex gap-5 text-zinc-300">
            <a
              href="https://github.com/shivamvispute"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-vispute/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: Image stack */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
  <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-xl">
    <img
      src="/images/IMG_9813.jpg"
      alt="Shivam Vispute"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="text-sm text-center mt-4 text-zinc-400 font-bold">I Build</p>
</div>
      </div>
    </motion.section>
  );
};

export default About;
