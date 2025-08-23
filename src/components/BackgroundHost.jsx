
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const variants = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1 },
  exit:  { opacity: 0, scale: 0.98 }
}

export default function BackgroundHost({ activeKey, images }){
  const [current, setCurrent] = useState(activeKey)
  useEffect(() => setCurrent(activeKey), [activeKey])

  return (
    <div className="bg-host" aria-hidden>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-layer"
          style={{ backgroundImage: `url(${images[current] || '/bg-default.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />
      </AnimatePresence>
    </div>
  )
}
