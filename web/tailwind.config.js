/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        crypto: '#f59e0b',
        openclaw: '#8b5cf6',
        claude: '#10b981',
        ai: '#f97316',
        payment: '#dc2626',
      }
    },
  },
  plugins: [],
}
