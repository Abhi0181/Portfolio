import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // install: npm i lucide-react

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle theme
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="relative flex items-center justify-center w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-500 bg-white dark:bg-zinc-900 shadow-md transition-all duration-300 ease-in-out"
    >
      {/* 🌙 Moon Icon */}
      <span
        className={`absolute transform transition-all duration-500 ${
          dark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      >
        <Moon className="w-6 h-6 text-indigo-400" />
      </span>

      {/* ☀️ Sun Icon */}
      <span
        className={`absolute transform transition-all duration-500 ${
          dark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <Sun className="w-6 h-6 text-yellow-500" />
      </span>
    </button>
  );
}
