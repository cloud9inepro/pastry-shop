export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        accent: ['Italiana', 'serif'],
        body: ['Nunito', 'sans-serif'], // or swap if Italiana is replacing this
      },
    },
  },
  plugins: [],
}