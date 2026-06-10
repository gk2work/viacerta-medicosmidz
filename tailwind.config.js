/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    '#044E77',
        secondary:  '#68B687',
        accent:     '#342312',
        linen:      '#F1EFE4',
        orange1:    '#044E77',
        green1:     '#68B687',
        blue1:      '#342312',
        light1:     '#F1EFE4',
      },
      fontFamily: {
        sans:    ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
