import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from "./components/Experience";
import Awards from './components/Awards'
import Contact from './components/Contact'
import BackgroundHost from './components/BackgroundHost'
import { useActiveSection } from './hooks'

function App() {
  // use lowercase ids to match section ids and header links
  const ids = ['about','education','skills','experience','certifications','contact']
  const active = useActiveSection(ids)

  const bgMap = {
    about: '/bg-about.jpg',
    education: '/bg-education.jpg',
    skills: '/bg-skills.jpg',
    experience: '/bg-Experience.jpg', // keep your filename, key is lowercase
    certifications: '/bg-awards.jpg', // if you have a separate bg, update path
    contact: '/bg-contact.jpg',
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500">
      {/* Backgrounds */}
      <BackgroundHost activeKey={active} images={bgMap} />

      {/* Header renders its own ThemeToggle */}
      <Header />

      {/* Main content */}
      <main>
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Awards />
        <Contact />

        {/* Footer */}
        <footer className="py-10 text-center text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Abhishek Kumar Singh. All rights reserved. <br />
          version v2.0
        </footer>
      </main>
    </div>
  )
}

export default App
