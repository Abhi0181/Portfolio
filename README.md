# Modern Portfolio (React + Vite + Tailwind)

A ready-to-run, modern personal portfolio with clean design, dark mode, smooth animations, and responsive layout.

## Quick Start

1. **Install Node.js** (LTS recommended).
2. Extract this zip and open the folder in your terminal:
   ```bash
   npm install
   npm run dev
   ```
3. Visit the local URL shown (usually `http://localhost:5173`).

## Build & Deploy
- Production build: `npm run build`
- Preview build: `npm run preview`
- Deploy easily to **Vercel**, **Netlify**, or **GitHub Pages**.

## Customize
- Edit your profile and content in `src/data/profile.js`.
- Replace `public/profile.svg` with your own photo (use `profile.jpg` and update the path if you like).
- Update colors and styles via Tailwind in `src/index.css` and `tailwind.config.js`.

## Contact Form
The form uses a Formspree endpoint placeholder. Replace the action URL in `src/components/Contact.jsx`
with your actual Formspree endpoint or use `mailto:` if you prefer.
