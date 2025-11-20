/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Aqui garantimos que ele leia TSX
  ],
  theme: {
    extend: {
      colors: {
        bariti: {
          rust: '#A62D02',    // Acentuação forte
          gold: '#BA8040',    // Secundária rica
          dark: '#1A2235',    // Textos principais e fundos escuros
          purple: '#5A3060',  // Elementos criativos/inovação
          light: '#F5F8FF',   // Fundo geral (Clean)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], 
      }
    },
  },
  plugins: [],
}
