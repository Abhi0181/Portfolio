import React from 'react'

export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        © {year} {name}. All rights reserved.
      </div>
    </footer>
  )
}
