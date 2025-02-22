/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1290px',
    },
    extend: {
      colors: {
        'blue': '#F1FBFF',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ED6C02',
        'green': '#13ce66',
        'dark-green': '#094435',
        'yellow': '#FFA300',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#FFFFFF',
        'black': '#000000',
        'red': '#E31345',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], 
    base: true,
    styled: true, 
    utils: true, 
    rtl: false, 
    prefix: "", 
    logs: true, 
  },
};