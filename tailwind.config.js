/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#042C6C',
        crimson: '#BF092F',
        'off-white': '#F9FAFF',
        silver: '#939598',
        'light-silver': '#EAEAEA',
      },
      fontFamily: {
        heading: ['Arial', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        body: ['Arial', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
