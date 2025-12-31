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
        navy: "#032235",
        white: "#FFFFFF",
        ghost: "#F7F7F8",
        teal: "#55B9BE",
        red: "#CF0000",
        steel: "#4682b4",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
