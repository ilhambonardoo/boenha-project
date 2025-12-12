/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "boen-primary": "#00A99D", // Teal/Hijau Tosca (primary)
        "boen-secondary": "#1e3a8a", // Biru Tua (korporat, kepercayaan)
        "boen-accent": "#f97316", // Oranye (Call-to-Action)
        "boen-text": "#1f2937", // Abu-abu tua/Hitam (teks)
      },
    },
  },
  plugins: [],
};
