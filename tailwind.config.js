/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Enable dark mode with a .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // ✅ nice for text content
    require('@tailwindcss/forms'),      // ✅ styled form inputs
    require('@tailwindcss/aspect-ratio') // ✅ responsive media
  ],
}
