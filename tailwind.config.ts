import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e9e9e9",
        secondary: "#222222"
      },
      fontFamily:{
        righteous: ["Righteous", "sans-serif"],
        rem:["REM", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
