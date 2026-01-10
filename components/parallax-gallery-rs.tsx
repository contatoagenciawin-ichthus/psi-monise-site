"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/galeria/rs/rs1.jpg", caption: "Chegada ao primeiro vinhedo" },
  { src: "/galeria/rs/rs2.jpg", caption: "Degustação harmonizada" },
  { src: "/galeria/rs/rs3.jpg", caption: "Grupo unido, experiência única" },
  { src: "/galeria/rs/rs4.jpg", caption: "Descontração e Alegria" },
  { src: "/galeria/rs/rs5.jpg", caption: "Brinde aos bons momentos" },
  { src: "/galeria/rs/rs6.jpg", caption: "Passeios memoráveis" },
  { src: "/galeria/rs/rs7.jpg", caption: "Nos corredores da adega" },
  { src: "/galeria/rs/rs8.jpg", caption: "Paisagens únicas" },
  { src: "/galeria/rs/rs9.jpg", caption: "Vinhedos até onde a vista alcança" },
];

export function ParallaxGalleryRS() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      // Seção está visível
      if (sectionTop < windowHeight && sectionBottom > 0) {
        if (!scrollLocked && sectionTop <= 0) {
          setScrollLocked(true);
        }

        // Calcula progresso baseado no scroll
        if (scrollLocked) {
          const progress = Math.abs(sectionTop) / (rect.height - windowHeight);
          const newIndex = Math.min(
            Math.floor(progress * photos.length),
            photos.length - 1
          );
          setCurrentIndex(newIndex);

          // Libera scroll quando chega na última foto
          if (newIndex === photos.length - 1 && Math.abs(sectionTop) > rect.height - windowHeight - 100) {
            setScrollLocked(false);
          }
        }
      } else {
        setScrollLocked(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLocked]);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${photos.length * 100}vh` }}
    >
      {/* Container Fixo */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-wine">
        {/* Imagem Atual */}
        <div className="absolute inset-0">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Legenda */}
        <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
          <div className="max-w-4xl mx-auto">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-serif text-cream italic leading-tight"
            >
              {photos[currentIndex].caption}
            </motion.p>
          </div>
        </div>

        {/* Indicador de Progresso */}
        <div className="absolute top-8 right-8 flex flex-col items-center gap-3 z-10">
          <span className="text-cream/60 text-sm font-mono">
            {String(currentIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
          <div className="w-1 h-32 bg-cream/20 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gold rounded-full"
              initial={{ height: "0%" }}
              animate={{
                height: `${((currentIndex + 1) / photos.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Instrução de Scroll (apenas na primeira foto) */}
        {currentIndex === 0 && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60"
          >
            <span className="text-xs uppercase tracking-widest">Continue scrolling</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
}