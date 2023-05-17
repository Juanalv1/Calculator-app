/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      't1-main-background': 'hsl(222, 26%, 31%)',
      't1-toggle-background': 'hsl(223, 31%, 20%)',
      't1-screen-background': 'hsl(224, 36%, 15%)',
      't1-key-background': 'hsl(225, 21%, 49%)',
      't1-key-shadow': 'hsl(224, 28%, 35%)',
      
      't1-key-background-toggle': 'hsl(6, 63%, 50%)',
      't1-key-shadow-2': 'hsl(6, 70%, 34%)',
      't1-key-background-2': 'hsl(30, 25%, 89%)',
      't1-key-shadow-3': 'hsl(28, 16%, 65%)',
      't1-Text': 'hsl(221, 14%, 31%)',
      'White': 'hsl(0, 0%, 100%)',
      't2-main-background': 'hsl(0, 0%, 90%)',
      't2-toggle-background': 'hsl(0, 5%, 81%)',
      't2-screen-background': 'hsl(0, 0%, 93%)',
      't2-key-background': 'hsl(185, 42%, 37%)',
      't2-key-shadow': 'hsl(185, 58%, 25%)',

      't2-key-background-toggle': 'hsl(25, 98%, 40%)',
      't2-key-shadow-2': 'hsl(25, 99%, 27%)',

      't2-key-background-2': 'hsl(45, 7%, 89%)',
      't2-key-shadow-3': 'hsl(35, 11%, 61%)',
      't2-text': 'hsl(60, 10%, 19%)',
      't3-main-background': 'hsl(268, 75%, 9%)',
      't3-toggle-background': 'hsl(268, 71%, 12%)',
      't3-key-background': 'hsl(281, 89%, 26%)',
      't3-key-shadow': 'hsl(285, 91%, 52%)',

      't3-key-background-toggle': 'hsl(176, 100%, 44%)',
      't3-key-shadow-2': 'hsl(177, 92%, 70%)',

      't3-key-background-2': 'hsl(268, 47%, 21%)',
      't3-key-shadow-3': 'hsl(290, 70%, 36%)',

      't3-text-yellow': 'hsl(52, 100%, 62%)',
      't3-text-blue': 'hsl(198, 20%, 13%)',
    },
    extend: {
      fontFamily: {
        'League-Spartan': ['League Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}

