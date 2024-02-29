import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        0.5: "0.5px",
      },
      colors: {
        "dark-100": "#000000",
        "dark-200": "#40341A",
        "foreground-100": "#DFB652",
        "foreground-200": "#B29046",
        "light-100": "#D9D9D9",
        "light-200": "#F2F2F2",
        white: "#FFFFFF",
      },
      fontSize: {
        "3.5xl": ["2rem", "2.375rem"],
      },
    },
  },
  plugins: [],
};
export default config;
