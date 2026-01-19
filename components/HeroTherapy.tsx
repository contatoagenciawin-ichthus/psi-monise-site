"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroTherapy() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F3EF]">
      {/* Background Image com tratamento suave */}
      <div className="absolute inset-0">
        <img
          src="/images/acolhimento-hero.jpg" // Sugestão: Imagem com luz natural e tons quentes [cite: 169-171]
          alt="Ambiente acolhedor e tranquilo com luz natural"
          className="h-full w-full object-cover opacity-40"
        />

        {/* Overlay degradê suave para garantir leitura do texto [cite: 149] */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF]/80 via-transparent to-[#F5F3EF]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Badge - Arquétipo da Cuidadora/Sábia [cite: 128-136] */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-full border border-[#A8B8A3] px-6 py-2"
        >
          <span className="font-sans text-sm tracking-widest text-[#8C6A5D] uppercase">
            Psicanálise Clínica
          </span>
        </motion.div>

        {/* Main Heading - Fonte Serifada para profundidade [cite: 156, 234] */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-serif text-5xl tracking-tight text-[#6E6E6E] md:text-7xl lg:text-8xl max-w-4xl"
        >
          Um espaço seguro para você se escutar
        </motion.h1>

        {/* Subheading - Itálico para humanidade [cite: 158] */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-serif text-2xl italic text-[#8C6A5D] md:text-3xl"
        >
          “Cuide com carinho da sua vida.”
        </motion.p>

        {/* Description - Foco no acolhimento online [cite: 6, 68] */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-2xl font-sans text-base leading-relaxed text-[#6E6E6E]/90 md:text-lg"
        >
          Acolhimento psicanalítico online para mulheres que buscam mudança, cuidado e atenção — mesmo que ainda não saibam por onde começar.
        </motion.p>

        {/* CTAs - Cores da Monise [cite: 152, 230] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-[#8C6A5D] px-8 py-6 font-sans text-base font-semibold text-white hover:bg-[#8C6A5D]/90 rounded-full"
          >
            Quero iniciar meu cuidado 
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#A8B8A3] bg-transparent px-8 py-6 font-sans text-base font-semibold text-[#8C6A5D] hover:bg-[#A8B8A3]/10 rounded-full"
          >
            Conhecer o acolhimento
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Sensação de pausa  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-[#6E6E6E]/60">
            Respire e descubra
          </span>
          <ChevronDown className="h-6 w-6 text-[#A8B8A3]" />
        </motion.div>
      </motion.div>
    </section>
  )
}