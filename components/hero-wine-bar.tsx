"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroWineBar() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#74113a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero1.jpg"
          alt="Mesa com taças de vinho em ambiente intimista"
          className="h-full w-full object-cover opacity-65"
        />

        {/* Overlay pensado para vinho + luz quente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#74113a]/65 via-[#74113a]/35 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-full border border-[#C5A065] px-6 py-2"
        >
          <span className="font-sans text-sm tracking-wider text-[#C5A065]">
            Americana • SP
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-serif text-5xl tracking-tight text-[#F9F8F3] md:text-7xl lg:text-8xl"
          style={{ letterSpacing: "-0.01em" }}
        >
          Mais que vinhos, momentos
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-serif text-2xl italic text-[#C5A065] md:text-3xl"
        >
          Experiências que ficam para sempre
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-2xl font-sans text-base leading-relaxed text-[#F9F8F3]/85 md:text-lg"
        >
          Um espaço intimista para quem valoriza bons rótulos, boa comida
          e o prazer de viver a experiência com calma, cuidado e hora marcada.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-[#F9F8F3] px-8 py-6 font-sans text-base font-semibold text-[#74113a] hover:bg-[#F9F8F3]/90"
          >
            Reservar horário
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#F9F8F3] bg-transparent px-8 py-6 font-sans text-base font-semibold text-[#F9F8F3] hover:bg-[#F9F8F3]/10"
          >
            Conhecer o Empório
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
          <span className="font-sans text-xs uppercase tracking-wider text-[#F9F8F3]/60">
            Descubra mais
          </span>
          <ChevronDown className="h-6 w-6 text-[#F9F8F3]/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
