import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      primary: {
        1: "#5E72E4",
        2: "#B89BFF",
        DEFAULT: "#5E72E4",
      },
      accent: {
        1: "#FF50A5",
        2: "#F3A4B5",
        DEFAULT: "#FF50A5",
      },
      success: {
        1: "#2DCE89",
        2: "#A0FFCF",
        DEFAULT: "#2DCE89",
      },
      info: {
        1: "#11CDEF",
        2: "#4ADEDE",
        DEFAULT: "#11CDEF",
      },
      warning: {
        1: "#FB6340",
        2: "#FDC094",
        DEFAULT: "#FB6340",
      },
      danger: {
        1: "#F5365C",
        2: "#FE676E",
        DEFAULT: "#F5365C",
      },
      light: {
        10: "#666B71",
        20: "#A1A1A3",
        30: "#CACBCF",
        40: "#E6E8EE",
        50: "#EAEAEA",
        60: "#F1F1F1",
        70: "#F7F9FC",
        DEFAULT: "#666B71",
      },
      dark: {
        10: "#0B2032",
        20: "#0E263A",
        30: "#0F2D44",
        40: "#113754",
        50: "#23395D",
        60: "#282F5E",
        70: "#313764",
        DEFAULT: "#0C1F30",
      },
    },
  },
  plugins: [],
};
export default config;
