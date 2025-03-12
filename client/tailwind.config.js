/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#F5F5DC",
      "bright-red": "#86ad1a",
      "dark-red": "#af462e",
      "secondary-bright": "#32965d",
      "secondary-dark": "#6D4C41",
      black: "#222a34",
      gray: colors.gray,
      "green": "#2DB83D"
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
