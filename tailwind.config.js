/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans:    ["'Plus Jakarta Sans'", "'DM Sans'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        night:   "#080C10",
        surface: "#0D1117",
        card:    "#111923",
        border:  "#1F2D3D",
        teal:    { DEFAULT:"#1A5F5E", light:"#2A8C8A", bright:"#3DBFBC" },
        gold:    { DEFAULT:"#C9A84C", light:"#E2C97E",  bright:"#F5E09A", dark:"#8B6914" },
      },
      animation: {
        marquee:    "marquee 32s linear infinite",
        float:      "float-y 7s ease-in-out infinite",
        "spin-slow":"spin 22s linear infinite",
      },
      keyframes: {
        marquee:   { "0%":{ transform:"translateX(0)" },        "100%":{ transform:"translateX(-50%)" } },
        "float-y": { "0%,100%":{ transform:"translateY(0)" },   "50%":{ transform:"translateY(-12px)" } },
      },
    },
  },
  plugins: [],
};
