import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef, useEffect } from "react";

/**
 * AboutMe.jsx
 * - Hover / click / keyboard to open/close
 * - Debounced mouseLeave (300ms)
 * - Debounced scroll: after scrolling stops, if the About section's top is within `closeThreshold` px
 *   from the top of the viewport we auto-close. This prevents flicker on slow scrolls.
 *
 * NOTE: per your request the image styling is EXACTLY restored to the original
 * (rounded-3xl, same sizes, ring, shadow) — nothing else changed for the image.
 */

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const leaveTimer = useRef(null);

  // Scroll debounce
  const scrollTimer = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Configurable threshold (pixels from top) where we auto-close when the section is near top
  const closeThreshold = 120; // adjust if you want it more/less sensitive

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (leaveTimer.current) {
        clearTimeout(leaveTimer.current);
        leaveTimer.current = null;
      }
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = null;
      }
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Immediate open (clears leave timer)
  const openNow = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setOpen(true);
  }, []);

  // Delayed close (mouse leave)
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

  // Scroll-handling logic:
  // - track scroll, set a debounce (250ms) after last scroll event
  // - on debounce expiry check if #about element top <= closeThreshold
  // - if yes, close the panel; if not, do nothing
  const onScroll = useCallback(() => {
    lastScrollY.current = window.scrollY;

    // If we are in the middle of a rAF loop, do nothing extra (we only need debounce)
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(() => {
        // schedule debounce
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => {
          ticking.current = false;
          scrollTimer.current = null;

          // When scroll stops, decide whether to close
          const aboutEl = document.getElementById("about");
          if (!aboutEl) return;

          const rect = aboutEl.getBoundingClientRect();
          // rect.top is relative to viewport top
          if (rect.top >= -10 && rect.top <= closeThreshold) {
            // If panel is open, close it
            setOpen(false);
          }
          // else: do nothing (avoid flicker on normal scroll)
        }, 250); // 250ms debounce after scroll stops
      });
    }
  }, []);

  // Attach scroll listener once
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section id="about" className="section">
      <div className="section-inner grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image - RESTORED EXACT ORIGINAL STYLING */}
        <motion.img
          src="/profile.jpg"
          alt="Abhishek Kumar Singh"
          className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover ring-1 ring-black/10 dark:ring-white/15 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Column: hover / click / keyboard target */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
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
          <h1 className="section-title">
            Hi, I’m <span className="text-indigo-600">Abhishek</span>
          </h1>

          <AnimatePresence>
            {open && (
              <motion.div
                id="about-details"
                initial={{ opacity: 0, rotateX: -12, y: 8 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -8, y: 8 }}
                transition={{ duration: 0.6 }}
                className="origin-top space-y-5 rounded-2xl p-5 shadow-lg bg-black/[0.03] dark:bg-white/5"
              >
                <h2 className="text-gray-700 dark:text-slate-300 font-medium">
                  Senior Software Engineer | ITX Developer
                </h2>

                <p className="text-lg text-gray-800 dark:text-slate-300 leading-relaxed">
                  ITX Developer with 4.5 years of experience in enterprise data integration, specializing in IBM Transformation Extender (ITX). I solve complex mapping and integration challenges.
                </p>

                <p className="italic text-gray-600 dark:text-slate-400">
                  “My philosophy is simple: technology, when blended with creativity and discipline, becomes a force that transforms complexity into clarity.”
                </p>

                <div className="flex gap-3 flex-wrap">
                  <a href="#experience" className="btn btn-primary">View Experience</a>
                  <a href="#contact" className="btn btn-outline">Contact Me</a>
                  <a href="/Abhishek_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">📄 View Resume</a>
                  <a href="/Abhishek_Resume.pdf" download className="btn btn-secondary">Download Resume</a>
                </div>

                <div className="flex gap-5 pt-4 flex-wrap">
                  <a href="mailto:abhishekkumara1910@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">abhishekkumara1910@gmail.com</a>
                  <a href="https://www.linkedin.com/in/abhishekkumar-singh-485688146/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
                  <a href="https://github.com/Abhi0181" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">GitHub</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
