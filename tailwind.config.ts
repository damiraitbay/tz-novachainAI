import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#02050f",
        card: "#0d1326",
        line: "#1d2b57",
        neonPink: "#f04ff8",
        neonBlue: "#5b6bff"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(70% 55% at 50% 82%, rgba(141, 74, 255, 0.32) 0%, rgba(10, 10, 24, 0.16) 45%, rgba(2, 5, 15, 0) 70%), linear-gradient(180deg, #02050f 0%, #02040f 45%, #030715 100%)"
      },
      boxShadow: {
        neon: "0 0 26px rgba(129, 86, 255, 0.35)"
      },
      animation: {
        float: "float 4.5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.95" }
        }
      }
    }
  },
  plugins: []
};

export default config;
