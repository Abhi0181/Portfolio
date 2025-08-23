import React from 'react'
import { motion } from 'framer-motion'
import data from '../data/profile.js'

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <motion.div className="card p-6 md:col-span-2"
        initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
        <h2 className="section-title">About <span className="accent">Me</span></h2>
        <p className="mt-4 leading-relaxed">{data.about}</p>
      </motion.div>
      <motion.div className="card p-6"
        initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.05}}>
        <h3 className="font-semibold">Quick Info</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li><strong>Location:</strong> {data.location}</li>
          <li><strong>Email:</strong> <a className="text-indigo-600 dark:text-indigo-400" href={`mailto:${data.email}`}>{data.email}</a></li>
          <li><strong>LinkedIn:</strong> <a className="text-indigo-600 dark:text-indigo-400" href={data.linkedin} target="_blank" rel="noreferrer">Profile</a></li>
          <li><strong>GitHub:</strong> <a className="text-indigo-600 dark:text-indigo-400" href={data.github} target="_blank" rel="noreferrer">Repos</a></li>
        </ul>
      </motion.div>
    </div>
  )
}
