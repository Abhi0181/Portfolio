import React from 'react'

export default function Footer({ name, version = "v2.0" }) {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-2">
        <span>© {year} {name}. All rights reserved.</span>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">| Version: {version}</span>
      </div>
    </footer>
  )
}
