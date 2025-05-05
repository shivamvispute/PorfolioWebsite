import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import StarParticles from './StarParticles';
import { Mail } from 'lucide-react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 bg-background text-white overflow-hidden"
    >
      <StarParticles />

      {/* Glowing Arc Image */}
      <div
        className="absolute bottom-0 w-full h-[220px] bg-no-repeat bg-bottom bg-cover pointer-events-none opacity-70 z-0"
        style={{ backgroundImage: "url('/images/glow2.png')" }}
      />

      {/* Content */}
      <motion.div
        className="z-10 w-full max-w-4xl px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 break-words leading-tight">
          Engineering pixel-perfect solutions
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light mb-8 break-words leading-snug">
          for real-world digital problems
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-10 font-semibold px-2">
          Hello, I'm Shivam Vispute — a Full Stack Developer
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition border border-white/20 backdrop-blur-sm"
          >
            Let’s Connect
            <span className="inline-block bg-white/20 text-white w-6 h-6 rounded-full flex justify-center items-center">
              →
            </span>
          </button>

          <a
            href="mailto:shivamvispute11@gmail.com"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:underline"
          >
            <Mail size={16} /> shivamvispute11@gmail.com
          </a>
        </div>
      </motion.div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Hero;
