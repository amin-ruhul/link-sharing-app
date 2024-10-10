import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#633CFF",
          hover: "#BEADFF",
          light: "#EFEBFF",
        },
        gray: {
          DEFAULT: "#737373",
          dark: "#333333",
          light: "#FAFAFA",
          border: "#D9D9D9",
        },
        red: "#FF3939",

        github: "#1a1a1a",
        youtube: "#ee3939",
        facebook: "#2442ac",
        linkedin: "#2d68ff",
        twitter: "#43b7e9",
      },
    },
  },
  plugins: [],
};
export default config;
