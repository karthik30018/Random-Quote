/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      screens:{
        sm:'600px'
      }
    },
    extend: {
      boxShadow:{
        'xl': '0 20px 25px -5px rgb(255 255 255 / 0.1) , 0 8px 10px -6px rgb(255 255 255 / 0.1) '
      }
    },
  },
  plugins: [],
}

