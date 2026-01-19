"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxVariant = "dark" | "light";

interface PhilosophicalQuoteProps {
  imageUrl: string;
  title: string;
  highlight: string;
  subtitle?: string;
  variant?: ParallaxVariant;
  darkOverlay?: boolean;
}

export function PhilosophicalQuote({
  imageUrl,
  title,
  highlight,
  subtitle,
  variant = "dark",
  darkOverlay = false,
}: PhilosophicalQuoteProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Aumentamos a amplitude do movimento para acompanhar a altura maior
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const effectiveVariant: ParallaxVariant = darkOverlay ? "dark" : variant;

  const overlayClass =
    effectiveVariant === "dark"
      ? "bg-gradient-to-b from-[#6E6E6E]/85 via-[#8C6A5D]/60 to-[#6E6E6E]/85"
      : "bg-gradient-to-b from-[#F5F3EF]/95 via-[#F5F3EF]/70 to-[#F5F3EF]/95";

  const titleClass =
    effectiveVariant === "dark" ? "text-[#F5F3EF]" : "text-[#6E6E6E]";

  const highlightClass =
    effectiveVariant === "dark" ? "text-[#E8D4CC]" : "text-[#8C6A5D]";

  return (
    <section
      ref={ref}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Fallback base */}
      <div
        className={`absolute inset-0 z-0 ${
          effectiveVariant === "dark" ? "bg-[#6E6E6E]" : "bg-[#F5F3EF]"
        }`}
      />

      {/* Background Image com Parallax - Aumentamos h-[150%] para evitar quebras no fundo */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[150%] -top-[25%] w-full"
      >
        <div
          className="w-full h-full bg-cover bg-center grayscale-[20%] opacity-50"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        />
      </motion.div>

      {/* Overlay com leve desfoque para legibilidade de frases longas */}
      <div className={`absolute inset-0 z-10 ${overlayClass} backdrop-blur-[3px]`} />

      {/* Conteúdo Ajustado para Frases Longas */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed mb-6 ${titleClass}`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`font-serif text-4xl md:text-6xl lg:text-7xl italic leading-tight py-6 drop-shadow-sm ${highlightClass}`}
        >
          {highlight}
        </motion.p>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <p className={`text-base md:text-lg font-sans font-light tracking-[0.3em] uppercase pt-8 border-t border-current inline-block px-8 md:px-16 opacity-80 ${titleClass}`}>
              {subtitle}
            </p>
          </motion.div>
        )}
      </div>

      {/* Indicador de continuidade */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-pulse z-20">
        <div className={`w-px h-24 ${effectiveVariant === "dark" ? "bg-white" : "bg-black"}`} />
      </div>
    </section>
  );
}