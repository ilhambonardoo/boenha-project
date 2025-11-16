/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'boen-primary': '#22c55e', // Hijau (kesegaran) [cite: 14]
        'boen-secondary': '#1e3a8a', // Biru Tua (korporat, kepercayaan) [cite: 14]
        'boen-accent': '#f97316', // Oranye (Call-to-Action) [cite: 15]
        'boen-text': '#1f2937', // Abu-abu tua/Hitam (teks) [cite: 16]
      },
    },
  },
  plugins: [],
}

