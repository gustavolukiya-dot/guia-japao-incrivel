import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        japan: {
          red: "#c62828",
          ink: "#12100f",
          cream: "#f7f0e6",
          paper: "#fffaf3",
        },
      },
      fontFamily: {
        serifDisplay: ['"Young Serif"', "Georgia", "serif"],
        body: ['"Bitter"', "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(18, 16, 15, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
