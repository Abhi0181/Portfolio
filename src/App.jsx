
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
  const ids = ['about','education','skills','Experience','awards','contact']
  const active = useActiveSection(ids)

  const bgMap = {
    about: '/bg-about.jpg',
    education: '/bg-education.jpg',
    skills: '/bg-skills.jpg',
    Experience: '/bg-Experience.jpg',
    awards: '/bg-awards.jpg',
    contact: '/bg-contact.jpg',
  }

  return (
    <>
      <BackgroundHost activeKey={active} images={bgMap} />
      <Header />
      <main>
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Awards />
        <Contact />
        <footer className="py-10 text-center text-slate-400">© {new Date().getFullYear()} Abhishek Kumar Singh. All rights reserved.
          version v2.0
        </footer>
      </main>
    </>
  )
}

export default App
