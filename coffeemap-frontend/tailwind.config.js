module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {
      inset: {
        100: "100%",
      },

      padding: {
        120: "120px",
      },

      colors: {
        "theme-color": "#361CC1",
        "theme-color-2": "#FE7A7B",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],

};