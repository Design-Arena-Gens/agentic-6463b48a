import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#111827",
        mist: "#F3F4F6",
        accent: {
          DEFAULT: "#6366F1",
          dark: "#4F46E5"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 15px 35px -20px rgba(15, 23, 42, 0.8)"
      }
    }
  },
  plugins: []
};

export default config;
