/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: '#4145AF',
        pink: "#D6569D",
        Lightblue: "#7F83EE",
        Lightpink: "#F1C0DB",
        darkblue: "#2E3192",
        dark:"#34379A",
      },
      fontSize: {
        "3xl":["32px","45px"],
        "6xl": "86px",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/person.png')",
      }
    },
  },
  plugins: [],
}

