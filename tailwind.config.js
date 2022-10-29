/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'we-dark-blue': '#08003C',
        'we-blue': '#231772',
        'we-green': '#25D366',
        'we-purple': '#6F64B8',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
