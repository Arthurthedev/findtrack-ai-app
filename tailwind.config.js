/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,vue,svelte}",
    "./pages/**/*.{js,jsx,ts,tsx,html,vue,svelte}",
    "./components/**/*.{js,jsx,ts,tsx,html,vue,svelte}",
    "./app/**/*.{js,jsx,ts,tsx,html,vue,svelte}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
