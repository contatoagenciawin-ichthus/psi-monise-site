"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  highlight: string;
  subtitle?: string;
  darkOverlay?: boolean;
  goldHighlight?: boolean;
}

export function ParallaxSection({
  imageUrl,
  title,
  highlight,
  subtitle,
  darkOverlay = false,
  goldHighlight = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);

  // Hook do Framer Motion para suavidade total
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // A imagem se move suavemente de -15% para +15% da altura
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fallback base (se a imagem não carregar, não fica chapado/sem cara) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-wine-dark via-wine/50 to-wine-dark" />

      {/* Background Image com Parallax Controlado */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          // ✅ FIX: aspas dentro do url() para URLs com ? & etc
          style={{ backgroundImage: `url("${imageUrl}")` }}
        />
      </motion.div>

      {/* Overlay - Gradiente Otimizado para Leitura */}
      <div
        className={`absolute inset-0 z-10 ${
          darkOverlay
            ? "bg-gradient-to-b from-black/70 via-wine-dark/50 to-black/70"
            : "bg-gradient-to-b from-wine-dark/55 via-wine/25 to-wine-dark/55"
        }`}
      />

      {/* Conteúdo */}
      <div className="relative z-20 text-center px-6 max-w-5xl space-y-2">
        {/* Título Menor */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight drop-shadow-lg"
        >
          {title}
        </motion.h2>

        {/* Destaque Gigante (Elegante) */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-serif text-5xl md:text-7xl lg:text-8xl italic leading-tight drop-shadow-2xl py-4 ${
            goldHighlight ? "text-gold" : "text-white"
          }`}
        >
          {highlight}
        </motion.p>

        {/* Subtítulo */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-cream/90 font-sans font-light tracking-[0.2em] uppercase drop-shadow-md pt-4 border-t border-cream/30 inline-block px-12"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50 animate-bounce z-20">
        <span className="sr-only">Role para baixo</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
