/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,html,js,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}