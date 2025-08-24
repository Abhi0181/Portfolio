import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useActiveSection } from "../hooks"
import ThemeToggle from "./ThemeToggle"

const links = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]

export default function Header() {
  const active = useActiveSection(links.map((l) => l.id))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [active])

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <nav className="section-inner">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          {/* Left side: Logo */}
          <a href="#about" className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            My Portfolio
          </a>

          {/* Right side: Desktop Nav + Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Desktop nav */}
            <ul className="hidden sm:flex gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={[
                      "px-4 py-2 rounded-xl transition",
                      active === l.id
                        ? "bg-black/5 dark:bg-white/10"
                        : "hover:bg-black/5 dark:hover:bg-white/10"
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle (always visible) */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="sm:hidden btn btn-outline"
              aria-expanded={open}
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="sm:hidden mt-2 glass rounded-2xl p-2 grid"
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={[
                  "px-3 py-2 rounded-xl",
                  active === l.id
                    ? "bg-black/5 dark:bg-white/10"
                    : "hover:bg-black/5 dark:hover:bg-white/10"
                ].join(" ")}
              >
                {l.label}
              </a>
            ))}
          </motion.ul>
        )}
      </nav>
    </header>
  )
}
