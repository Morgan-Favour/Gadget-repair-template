// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#7a7a7a',
        primary: '#cf261a',
        black: '#171b25',
        white: '#ffffff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
})
