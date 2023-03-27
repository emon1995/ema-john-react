/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgba(255, 153, 0, 0.3)",
          secondary: "#c96d18",
          accent: "#c41bad",
          neutral: "#1C2B35",
          "base-100": "#2E2F48",
          info: "#26B9F2",
          success: "#46D89D",
          warning: "#EF9439",
          error: "#EA745D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
