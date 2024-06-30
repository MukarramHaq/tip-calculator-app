/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Mono']
      },
      screens: {
        '923px': '923px'
      }
    },
  },
  plugins: [],
}

