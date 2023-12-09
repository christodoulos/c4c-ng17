/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.4rem",
        sm: "1.4rem",
        md: "1.2rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      body: ["seravek-web", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-green": "#A2CA00",
        "custom-pink": "#FF25E9",
        black: "#282D32",
        "custom-gray-100": "#e1e1e1",
        "custom-gray-300": "#8d8d8d",
        "custom-gray-500": "#a8a8a8",
        "custom-gray-800": "#424b54",
        white: "#ffffff",
      },
      fontSize: {
        "h1-sm": ["32px", "45px"],
        "h1-md": ["36px", "50px"],
        "h1-lg": ["50px", "60px"],

        "h2-sm": ["29px", "41px"],
        "h2-md": ["32px", "45px"],
        "h2-lg": ["45px", "50px"],

        "h3-sm": ["25px", "35px"],
        "h3-md": ["29px", "41px"],
        "h3-lg": ["37px", "43px"],

        "h4-sm": ["22px", "31px"],
        "h4-md": ["25px", "35px"],
        "h4-lg": ["30px", "38px"],

        "h5-sm": ["19px", "27px"],
        "h5-md": ["22px", "31px"],
        "h5-lg": ["25px", "32px"],

        "h6-sm": ["16px", "23px"],
        "h6-md": ["18px", "25px"],
        "h6-lg": ["18px", "27px"],

        base: ["18px", "22px"],
      },
      transitionDuration: {
        DEFAULT: "400ms",
        400: "400ms",
      },
      dropShadow: {
        "custom-shadow": "0 9px 14px rgba(0, 0, 0, 0.11)",
      },
      boxShadow: {
        "custom-shadow": "42px 2px 7px rgba(0, 0, 0, 0.25)",
      },
      maxHeight: {
        "windows-height": "calc(100vh - 192px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
