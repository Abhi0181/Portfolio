import React from "react";
import { motion } from "framer-motion";
import data from "../data/profile.js";

export default function Hero() {
  return (
    <div className="py-20 md:py-28 flex flex-col items-center text-center">
      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Abhishek Kumar Singh"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-indigo-600 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Welcome Headline */}
      <motion.h1
        className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Welcome to My World 🌍
      </motion.h1>

      {/* Name + Role */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, I’m{" "}
        <span className="font-bold text-indigo-600">{data.name}</span> <br />
        <span className="text-gray-800">
          Senior Software Engineer | ITX Developer
        </span>
      </motion.p>

      {/* Professional Tagline */}
      <motion.p
        className="mt-3 text-gray-600 italic max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        "My philosophy is simple: technology, when blended with creativity and discipline, 
        becomes a force that transforms complexity into clarity."
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="#about"
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-md"
        >
          Know Me More
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 shadow-md"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}
