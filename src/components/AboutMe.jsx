import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about" className="section">
      <div className="section-inner grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/profile.jpg"
          alt="Abhishek Kumar Singh"
          className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover ring-1 ring-white/15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h1 className="section-title">
            Hi, I’m <span className="text-indigo-400">Abhishek</span>
          </h1>
          <h2 className="text-slate-400 font-medium">
            Senior Software Engineer | ITX Developer
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            ITX Developer with 4.5 years of experience in end-to-end enterprise data integration, specializing in IBM Transformation Extender (ITX). 
            I enjoy solving complex data transformation challenges and contributing to scalable, high-performance systems.
          </p>
          <p className="italic text-slate-400">
            "My philosophy is simple: technology, when blended with creativity and discipline,
            becomes a force that transforms complexity into clarity."
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            
            {/* View Resume (opens in browser) */}
           <a 
            href="/Abhishek_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            type="application/pdf"
            className="btn btn-secondary"
          >
            📄 View Resume
          </a>

            {/* Download Resume (direct download) */}
            <a 
              href="/Abhishek_Resume.pdf" 
              download 
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 pt-4 flex-wrap">
            <a
              href="mailto:abhishekkumara1910@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              abhishekkumara1910@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekkumar-singh-485688146/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Abhi0181"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
