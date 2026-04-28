/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#03070A",
        midnight: "#050A0D",
        pine: "#06130D",
        lime: "#B6FF00",
        "lime-soft": "#D7FF55",
        bone: "#F5F7F2",
        mist: "#A8B0A8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(182, 255, 0, 0.28)",
        "card-glow": "0 24px 80px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(182,255,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,0,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
