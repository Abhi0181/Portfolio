
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks'

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },   // was 'projects'
  { id: 'certifications', label: 'Certifications' }, // was 'awards'
  { id: 'contact', label: 'Contact' },
]


export default function Header(){
  const active = useActiveSection(links.map(l => l.id))
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [active])

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <nav className="section-inner">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#about" className="font-semibold tracking-tight">My Portfolio</a>
          <button onClick={() => setOpen(v => !v)} className="sm:hidden btn btn-outline" aria-expanded={open}>
            Menu
          </button>
          <ul className="hidden sm:flex gap-2">
            {links.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={`px-4 py-2 rounded-xl transition ${active===l.id ? 'bg-white/10' : 'hover:bg-white/10'}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="sm:hidden mt-2 glass rounded-2xl p-2 grid"
          >
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className={`px-3 py-2 rounded-xl ${active===l.id ? 'bg-white/10' : 'hover:bg-white/10'}`}>{l.label}</a>
            ))}
          </motion.ul>
        )}
      </nav>
    </header>
  )
}
