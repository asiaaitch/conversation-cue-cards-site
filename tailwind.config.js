/** @type {import('tailwindcss').Config} */
tailwind.config.js
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [require("daisyui"),
  require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
