"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Book, Tablet, Headphones, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/images/benefits/livro.jpg",
    icon: Book,
    headline: "Livro Físico",
    body: "Sinta o toque das páginas. Uma edição pensada para ser seu refúgio, permitindo que você anote, sublinhe e vivencie cada reflexão no seu próprio tempo.",
  },
  {
    id: 2,
    image: "/images/benefits/ebook.jpg", // Nome corrigido conforme as imagens disponíveis
    icon: Tablet,
    headline: "E-book Digital",
    body: "Leve o acolhimento com você. A praticidade de ter o guia completo no seu tablet ou celular, ideal para momentos de pausa na sua rotina agitada.",
  },
  {
    id: 3,
    image: "/images/benefits/audiobook.jpg",
    icon: Headphones,
    headline: "Audiobook",
    body: "Ouça e sinta. Deixe-se guiar pela narrativa em áudio, transformando momentos comuns como o trânsito ou o descanso em uma jornada de cura profunda.",
  },
]

const SLIDE_DURATION = 6000 

export function BenefitsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  const currentSlideData = slides[currentSlide]
  const IconComponent = currentSlideData.icon

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] lg:h-[90vh] bg-[#F5F3EF] overflow-hidden border-y border-[#A8B8A3]/10"
    >
      <div className="flex flex-col lg:flex-row h-full w-full">
        
        {/* LADO DA IMAGEM */}
        <div className="relative w-full lg:w-3/5 h-[400px] lg:h-full bg-[#6E6E6E] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={currentSlideData.image}
                alt={currentSlideData.headline}
                fill
                className="object-cover opacity-80"
                priority
              />
              {/* Overlay suave usando Verde Sálvia e Off-white  */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6E6E6E]/30 via-transparent to-[#F5F3EF]/60 lg:to-[#F5F3EF]" />
            </motion.div>
          </AnimatePresence>

          {/* Navegação flutuante */}
          <div className="absolute bottom-10 left-10 flex gap-4 z-20">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white/90 text-[#8C6A5D] hover:bg-[#A8B8A3] hover:text-white transition-all shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white/90 text-[#8C6A5D] hover:bg-[#A8B8A3] hover:text-white transition-all shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* LADO DO CONTEÚDO */}
        <div 
          className="w-full lg:w-2/5 h-full flex items-center justify-center p-8 lg:p-20 relative z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-md w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Ícone com acabamento Marrom Suave (Nude)  */}
                <div className="w-16 h-16 rounded-2xl bg-[#E8D4CC]/30 flex items-center justify-center text-[#8C6A5D] shadow-sm border border-[#E8D4CC]/50">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-serif text-[#6E6E6E] leading-tight">
                    {currentSlideData.headline}
                  </h3>
                  <p className="text-xl text-[#6E6E6E]/80 font-light leading-relaxed">
                    {currentSlideData.body}
                  </p>
                </div>

                {/* Barra de Progresso Customizada (Verde Sálvia)  */}
                <div className="pt-10">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-[#A8B8A3] tracking-[0.3em] uppercase">
                      {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                    <div className="flex-1 h-[2px] bg-[#E8D4CC]/20 rounded-full overflow-hidden">
                      <motion.div
                        key={`bar-${currentSlide}-${isPaused}`}
                        className="h-full bg-[#A8B8A3]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots de Navegação */}
            <div className="flex gap-4 mt-16">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentSlide ? "w-12 bg-[#8C6A5D]" : "w-4 bg-[#A8B8A3]/30 hover:bg-[#A8B8A3]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}