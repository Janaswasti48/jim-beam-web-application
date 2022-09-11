/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {

          primary: "#111",

          secondary: "#F000B8",

          accent: "#fde9db",

          neutral: "#145FA9",

          base: "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      {
        dark: {

          "primary": "#e8ea77",

          "secondary": "#c6a229",

          "accent": "#027a00",

          "neutral": "#211E38",

          "base-100": "#F0EDF2",

          "info": "#9DD3E2",

          "success": "#157445",

          "warning": "#FBC35B",

          "error": "#F93A24",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
