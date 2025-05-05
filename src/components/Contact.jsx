import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setShowModal(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://portfoliobackend-h06w.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      await res.json();

      if (res.ok) {
        setStatus('Message sent ✅');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong ❌');
      }
    } catch (err) {
      setStatus('Server error ❌');
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-background text-foreground py-24 px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white mb-2 relative inline-block">
        Let’s Connect
        <span className="block h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded"></span>
      </h2>

      {/* Headline */}
      <h3 className="text-3xl md:text-4xl font-extrabold mt-10 leading-tight tracking-tight">
        FROM CONCEPT TO <span className="text-white">CREATION</span> <br />
        LET&apos;S MAKE IT <span className="text-indigo-400">HAPPEN!</span>
      </h3>

      {/* Get in Touch Button */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-10 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/20 transition"
      >
        Get In Touch
      </button>

      {/* Supporting Paragraph */}
      <div className="mt-10 max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
        <p className="mb-2 font-semibold text-white">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p>
          I thrive on crafting dynamic web applications and delivering seamless user experiences.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="w-full max-w-xl bg-white/10 border border-white/20 rounded-t-xl p-6 text-white shadow-2xl backdrop-blur-xl"
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-zinc-400 hover:text-red-400"
                >
                  <X size={20} />
                </button>
              </div>

              <h3 className="text-lg font-semibold mb-4">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-2 rounded text-white placeholder-zinc-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-2 rounded text-white placeholder-zinc-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-2 rounded text-white placeholder-zinc-400 h-32 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Send Message
                </button>
                {status && <p className="text-sm text-zinc-300 mt-2">{status}</p>}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
