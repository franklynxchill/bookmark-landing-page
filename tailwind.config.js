/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        darkBlue: 'hsl(229, 31%, 21%)',
        opacityMenu: 'hsla(229, 31%, 21%, 0.9)',
      },
      backgroundImage: {
        bgDots: "url('/assets/images/bg-dots.svg')"
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "992px",
      xl: "1124px",
    },
    fontFamily: {
      primaryFont: "Rubik",
    }
  },
  plugins: [],
}


