/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: [],
    content: ["./node_modules/@relume_io/relume-ui/dist/*/.{js,ts,jsx,tsx}"],
    presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {},
  },
  plugins: [],
}
