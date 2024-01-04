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
      animation: {
        text: "text 3s ease infinite",
        fade: "fadeIn 5s ease-in",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    colors: {
      purple: "#9845E8",
      lightblue: "#33D2FF",
      blue: "#6CACE4",
      pink: "#DD5789",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      lightwhite: "#F0F0F0",
      black: "#000000",
      gray: "#1F1E1E",
      lightgray: "#C4C4C4",
      darkgray: "#C6C6C6",
    },
  },
  plugins: [],
};
export default config;
