import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

export default function AboutMe() {
  // Do not auto-open until the user has scrolled at least once
  const [hasScrolled, setHasScrolled] = useState(false);

  // Allow manual toggle (tap/click). We intentionally REMOVE hover opening.
  const [tapped, setTapped] = useState(false);

  // Observe the text column
  const panelRef = useRef(null);
  const inView = useInView(panelRef, { amount: 0.6 });

  // Close when the section is at the very top (under the header)
  const [nearStart, setNearStart] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!hasScrolled) setHasScrolled(true);
      const el = panelRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;

      // Tweak these to taste: treat ~0–100px from top as "start", keep closed there
      const START_BUFFER_TOP = -10;
      const START_BUFFER_BOTTOM = 100;
      setNearStart(top >= START_BUFFER_TOP && top <= START_BUFFER_BOTTOM);
    };

    onScroll(); // compute on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hasScrolled]);

  // Final open rule:
  // - After first scroll: open when in view and not near the very top
  // - Manual tap/click can also open while in view
  const open = (hasScrolled && inView && !nearStart) || (tapped && inView);

  const onToggleTap = useCallback(() => setTapped(v => !v), []);
  const onKeyToggle = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setTapped(v => !v);
    }
  }, []);

  return (
    // Add padding + scroll margin so it never hides under the fixed header
    <section id="about" className="section pt-24 md:pt-28 scroll-mt-28">
      <div className="section-inner grid md:grid-cols-2 gap-10 items-center">
        {/* Classical portrait image (stays visible) */}
        <motion.img
          src="/profile.jpg"
          alt="Abhishek Kumar Singh"
          className="
            w-52 h-52 md:w-72 md:h-72 rounded-full object-cover
            ring-4 ring-yellow-500/70 shadow-2xl
            sepia-[0.25] contrast-110 brightness-105
            transition duration-500 hover:sepia-0 hover:scale-105
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text column: no hover open, only scroll + tap/click */}
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 select-none cursor-pointer"
          onClick={onToggleTap}
          onKeyDown={onKeyToggle}
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-controls="about-details"
        >
          {/* Always-visible greeting */}
          <h1 className="section-title">
            Hi, I’m{" "}
            <span className="text-indigo-600 dark:text-indigo-400 underline-offset-4">
              Abhishek
            </span>
          </h1>

          {/* Smooth paper-fold reveal for details */}
          <AnimatePresence initial={false}>
            <motion.div
              key={open ? "open" : "closed"}
              id="about-details"
              initial={open ? { opacity: 0, rotateX: -90, height: 0 } : { height: 0 }}
              animate={
                open
                  ? { opacity: 1, rotateX: 0, height: "auto" }
                  : { opacity: 0, rotateX: -90, height: 0 }
              }
              exit={{ opacity: 0, rotateX: -90, height: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                origin-top overflow-hidden will-change-transform
                rounded-2xl p-5 shadow-lg
                bg-black/[0.035] dark:bg-white/5
                space-y-5
              "
              style={{ transformOrigin: "top" }}
            >
              <h2 className="text-gray-700 dark:text-slate-300 font-medium">
                Senior Software Engineer | ITX Developer
              </h2>

              <p className="text-lg text-gray-800 dark:text-slate-300 leading-relaxed">
                ITX Developer with 4.5 years of experience in end-to-end enterprise
                data integration, specializing in IBM Transformation Extender (ITX).
                I enjoy solving complex data transformation challenges and contributing
                to scalable, high-performance systems.
              </p>

              <p className="italic text-gray-600 dark:text-slate-400">
                “My philosophy is simple: technology, when blended with creativity
                and discipline, becomes a force that transforms complexity into clarity.”
              </p>

              <div className="flex gap-3 flex-wrap">
                <a href="#experience" className="btn btn-primary">
                  View Experience
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
                <a
                  href="/Abhishek_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="btn btn-outline"
                >
                  📄 View Resume
                </a>
                <a href="/Abhishek_Resume.pdf" download className="btn btn-outline">
                  Download Resume
                </a>
              </div>

              <div className="flex gap-5 pt-4 flex-wrap">
                <a
                  href="mailto:abhishekkumara1910@gmail.com"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  abhishekkumara1910@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishekkumar-singh-485688146/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Abhi0181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
