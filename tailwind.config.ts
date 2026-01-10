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
        // Paleta Oficial Empório Liasch (Manual de Marca)
        wine: {
          DEFAULT: "#74113a", // Pantone 229 C
          dark: "#4a0b25",    // Contraste escuro
          light: "#9b2c5a",   // Hover states
        },
        cream: "#F9F8F3",     // Fundo Off-white
        wood: "#2C1810",      // Marrom Café (Texto)
        gold: "#C5A065",      // Detalhes Premium
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