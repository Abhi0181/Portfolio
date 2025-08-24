import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const variants = {
  enter:  { opacity: 0, scale: 1.03 },
  center: { opacity: 1, scale: 1 },
  exit:   { opacity: 0, scale: 0.99 },
};

export default function BackgroundHost({ activeKey = "about", images = {} }) {
  // Ensure we always have a valid key that exists in images
  const resolvedKey = useMemo(() => {
    if (activeKey && images[activeKey]) return activeKey;
    const first = Object.keys(images)[0];
    return first || null;
  }, [activeKey, images]);

  const [current, setCurrent] = useState(resolvedKey);
  useEffect(() => setCurrent(resolvedKey), [resolvedKey]);

  const src =
    (current && images[current]) ||
    "/bg-default.jpg"; // keep a fallback image in /public

  return (
    <div className="bg-host" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={src} // key by src to animate on image change
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-layer"
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
        {/* Light/Dark friendly overlay (prevents text from clashing with background) */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 to-white/80 dark:from-slate-950/60 dark:via-slate-950/40 dark:to-slate-950" />
      </AnimatePresence>
    </div>
  );
}
