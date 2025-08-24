import { motion } from 'framer-motion'

export default function SectionShell({ id, title, subtitle, children }){
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="section-heading">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-700 dark:text-slate-300">{subtitle}</p>}
        </motion.div>
        <div className="grid gap-6">
          {children}
        </div>
      </div>
    </section>
  )
}
