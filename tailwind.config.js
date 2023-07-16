/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'trans-right':{
          '0%,100%':{transform:'translateX(10px)'},
          '50%':{transform:'translateX(0)'}
        },
        'trans-up':{
          '0%,100%':{transform:'translateY(10px)'},
          '50%':{transform:'translateY(0)'}
        },
        'rotate-cw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'rotate-ccw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        'rotate-cwI': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },

        },
        'rotate-ccwI': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation:{
        'trans-right':'trans-right 1.5s ease-in-out infinite',
        'trans-up':'trans-up 1.5s ease-in-out infinite',
        'rotate-clockwise': 'rotate-cw 35s linear infinite',
        'rotate-counterclockwise': 'rotate-ccw 35s linear infinite',
        'rotate-counterclockwiseS': 'rotate-cwI 35s linear infinite',
        'rotate-counterclockwiseSA': 'rotate-ccwI 35s linear infinite',


      }
    },
  },
  plugins: [],
}

