/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'Bebas Neue', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Roboto', 'Open Sans', 'sans-serif'],
        code: ['Major Mono Display', 'Share Tech Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
