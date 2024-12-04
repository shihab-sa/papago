/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        activeity: {
          "100%": {
            transform: "scale(2.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        activeity: "activeity 1s ease-out infinite",
        "activeity-delay": "activeity 1s 1s ease-out infinite",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "nord"],
  },

  plugins: [require("daisyui")],
};
