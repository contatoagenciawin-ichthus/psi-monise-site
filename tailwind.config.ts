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
        sage: "#A8B8A3",
        "off-white": "#F5F3EF",
        nude: "#E8D4CC",
        "soft-brown": "#8C6A5D",
        "warm-gray": "#6E6E6E",
      },
      // ✅ Bloco único de fontes consolidado para evitar erro de duplicidade
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"], // Playfair Display para elegância
        sans: ["Inter", "var(--font-open-sans)", "sans-serif"], // Inter para clareza técnica
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(110, 110, 110, 0.08)',
        'medium': '0 4px 6px rgba(110, 110, 110, 0.1)',
        'strong': '0 10px 15px rgba(110, 110, 110, 0.15)',
      },
      letterSpacing: {
        'widest-plus': '0.3em',
      },
    },
  },
  plugins: [],
};

export default config;