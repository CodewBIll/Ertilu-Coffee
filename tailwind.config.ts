import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        latte: "#f6ead6",
        cream: "#fff8ef",
        espresso: "#21150d",
        mocha: "#342015",
        toffee: "#7d5130",
        gold: "#e4ad39",
        caramel: "#f2d59c"
      },
      boxShadow: {
        glow: "0 18px 40px rgba(228, 173, 57, 0.18)",
        panel: "0 20px 45px rgba(23, 13, 7, 0.2)"
      },
      backgroundImage: {
        "coffee-radial":
          "radial-gradient(circle at top left, rgba(228, 173, 57, 0.28), transparent 34%), radial-gradient(circle at bottom right, rgba(125, 81, 48, 0.18), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
