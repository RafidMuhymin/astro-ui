module.exports = {
<<<<<<< HEAD
  content: [
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
=======
  mode: 'jit',
  purge: ['./public/**/*.{scss,sass,css}', './src/**/*.{astro,js,jsx,ts,tsx,vue,scss,sass,css}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screen:{
      'sm': {'min': '0px', 'max': '425px'},
      'md': {'min': '426px', 'max': '768px'},
      'lg': {'min': '768px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    colors:{
      ghostwhite:'#f8f8ff',
      primary:'var(--color-green)'
    },
    fontFamily:{},
    extend: {
      typography:{
        DEFAULT:{
          css:{
            maxWidth:'none',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
>>>>>>> www-xelement
}
