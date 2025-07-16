/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   // tailwind.config.js
extend: {
  colors: {
    'glass': 'rgba(255, 255, 255, 0.1)',
  },
  backdropBlur: {
    md: '12px',
  },
}

  },
  plugins: [],
}

