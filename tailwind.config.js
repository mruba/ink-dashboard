const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-family: 'Moo Lah Lah', cursive;
        'sans': ['Roboto Mono','ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      colors: {
        'black': '#1c181c',
        'white': '#ffffff',
        'green': '#1dad23',
        'blue': '#1e1dae',
        'red': '#cd2425',
        'yellow': '#e7de23',
        'orange': '#d87b24',
      },
    },
  },
  plugins: [
  ],
}