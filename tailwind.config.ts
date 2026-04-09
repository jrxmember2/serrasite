import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0A0A0A",
        border: "rgba(255,255,255,0.08)",
        accent: "#67E8F9",
      },
      boxShadow: {
        glow: "0 0 80px rgba(103, 232, 249, 0.18)",
      },
      backgroundImage: {
        'hero-grid': "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
