import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef } from "react";

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const leaveTimer = useRef(null);

  const openNow = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setOpen(true);
  }, []);

  const closeDelayed = useCallback((delay = 300) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      setOpen(false);
      leaveTimer.current = null;
    }, delay);
  }, []);

  const handleMouseEnter = useCallback(() => openNow(), [openNow]);
  const handleMouseLeave = useCallback(() => closeDelayed(300), [closeDelayed]);

  const toggleOpen = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setOpen((v) => !v);
  }, []);

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleOpen();
      }
    },
    [toggleOpen]
  );

  return (
    <section id="about" className="section">
      <div className="section-inner grid md:grid-cols-2 gap-10 items-center">

        {/* ORIGINAL IMAGE — EXACTLY AS BEFORE */}
        <motion.img
          src="/profile.jpg"
          alt="Abhishek Kumar Singh"
          className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover ring-1 ring-white/15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 cursor-pointer select-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={openNow}
          onClick={toggleOpen}
          onKeyDown={handleKey}
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-controls="about-details"
        >
          {/* Name */}
          <h1 className="section-title">
            Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Abhishek</span>
          </h1>

          {/* CTA UNDER NAME */}
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-lg font-medium"
            >
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="inline-block text-2xl"
              >
                ↓
              </motion.span>
              Tap to learn more
            </motion.div>
          )}

          {/* DETAILS PANEL */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="about-details"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="origin-top space-y-5 rounded-2xl p-5 shadow-lg bg-black/[0.03] dark:bg-white/5"
              >
                <h2 className="text-gray-700 dark:text-slate-300 font-medium">
                  Senior Software Engineer | ITX Developer
                </h2>

                <p className="text-lg text-gray-800 dark:text-slate-300 leading-relaxed">
                  ITX Developer with 4.5 years of experience in enterprise data integration,
                  specializing in IBM Transformation Extender (ITX). I solve complex mapping
                  and integration challenges.
                </p>

                <p className="italic text-gray-600 dark:text-slate-400">
                  “My philosophy is simple: technology, when blended with creativity
                  and discipline, becomes a force that transforms complexity into clarity.”
                </p>

                <div className="flex gap-3 flex-wrap">
                  <a href="#experience" className="btn btn-primary">View Experience</a>
                  <a href="#contact" className="btn btn-outline">Contact Me</a>
                  <a href="/Abhishek_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    📄 View Resume
                  </a>
                  <a href="/Abhishek_Resume.pdf" download className="btn btn-secondary">
                    Download Resume
                  </a>
                </div>

                <div className="flex gap-5 pt-4 flex-wrap">
                  <a href="mailto:abhishekkumara1910@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    abhishekkumara1910@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/abhishekkumar-singh-485688146/"
                     target="_blank" rel="noopener noreferrer"
                     className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Abhi0181"
                     target="_blank" rel="noopener noreferrer"
                     className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    GitHub
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
