/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customIndigoFade: '#9197B3',
        customIndigoHover: '#5932EA',
        customVColor: '#838383',
      },
    },
  },
  plugins: [],
}

