"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxVariant = "dark" | "light";

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  highlight: string;
  subtitle?: string;

  /**
   * dark  = texto claro + overlay escuro (padrão Mendoza)
   * light = texto escuro + overlay claro (bom em seções claras/home)
   */
  variant?: ParallaxVariant;

  /**
   * Mantido por compatibilidade: se você já usa isso em alguns lugares,
   * ele força "dark" quando true.
   */
  darkOverlay?: boolean;

  goldHighlight?: boolean;
}

export function ParallaxSection({
  imageUrl,
  title,
  highlight,
  subtitle,
  variant = "dark",
  darkOverlay = false,
  goldHighlight = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Compat: se alguém passar darkOverlay=true, força dark
  const effectiveVariant: ParallaxVariant = darkOverlay ? "dark" : variant;

  const overlayClass =
    effectiveVariant === "dark"
      ? "bg-gradient-to-b from-black/70 via-[#2a0f18]/55 to-black/70"
      : "bg-gradient-to-b from-white/80 via-white/55 to-white/80";

  const titleClass =
    effectiveVariant === "dark"
      ? "text-cream drop-shadow-lg"
      : "text-[#2a0f18] drop-shadow-none";

  const highlightClass =
    effectiveVariant === "dark"
      ? goldHighlight
        ? "text-gold drop-shadow-2xl"
        : "text-white drop-shadow-2xl"
      : goldHighlight
        ? "text-[#C5A065]"
        : "text-[#2a0f18]";

  const subtitleClass =
    effectiveVariant === "dark"
      ? "text-cream/90 border-cream/30 drop-shadow-md"
      : "text-[#2a0f18]/80 border-[#2a0f18]/15";

  return (
    <section
      ref={ref}
      className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fallback base (se a imagem não carregar) */}
      <div
        className={
          effectiveVariant === "dark"
            ? "absolute inset-0 z-0 bg-gradient-to-b from-[#2a0f18] via-[#74113a]/35 to-[#2a0f18]"
            : "absolute inset-0 z-0 bg-gradient-to-b from-[#F9F8F3] via-[#F3EFE6] to-[#F9F8F3]"
        }
      />

      {/* Background Image com Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 ${overlayClass}`} />

      {/* Conteúdo */}
      <div className="relative z-20 text-center px-6 max-w-5xl space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${titleClass}`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-serif text-5xl md:text-7xl lg:text-8xl italic leading-tight py-4 ${highlightClass}`}
        >
          {highlight}
        </motion.p>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg md:text-2xl font-sans font-light tracking-[0.2em] uppercase pt-4 border-t inline-block px-12 ${subtitleClass}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Scroll Indicator */}
      <div
        className={
          effectiveVariant === "dark"
            ? "absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50 animate-bounce z-20"
            : "absolute bottom-10 left-1/2 -translate-x-1/2 text-[#2a0f18]/35 animate-bounce z-20"
        }
      >
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
