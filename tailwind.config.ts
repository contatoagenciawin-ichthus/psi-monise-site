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
// Atualize a fonte principal para títulos
fontFamily: {
  serif: ["var(--font-playfair)", "serif"], // Playfair Display [cite: 156, 234]
  sans: ["Inter", "sans-serif"], // Inter para facilitar leitura [cite: 162, 240]
},
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(44, 24, 16, 0.08), 0 1px 2px rgba(44, 24, 16, 0.06)',
        'medium': '0 4px 6px rgba(44, 24, 16, 0.1), 0 2px 4px rgba(44, 24, 16, 0.08)',
        'strong': '0 10px 15px rgba(44, 24, 16, 0.15), 0 4px 6px rgba(44, 24, 16, 0.1)',
      },
      letterSpacing: {
        'widest-plus': '0.3em',
      },
    },
  },
  plugins: [],
};

export default config;