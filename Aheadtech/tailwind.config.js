/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: [],
    content: ["./node_modules/@relume_io/relume-ui/dist/*/.{js,ts,jsx,tsx}"],
    presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      animation: {
        'loop-horizontally': 'loop-horizontally 20s linear infinite',
      },
      keyframes: {
        'loop-horizontally': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
