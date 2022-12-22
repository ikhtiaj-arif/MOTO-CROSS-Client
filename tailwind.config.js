/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#40a798",
          neutral: "#191D24",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          error: '#eb2632'
        },
      },
      "halloween"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
