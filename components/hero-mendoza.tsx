"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

export function HeroMendoza() {
  const whatsappNumber = "5519997088241"
  const whatsappMessage = encodeURIComponent(
    "Olá, Liasch! Vim pelo site do Empório Liasch e quero saber mais sobre a viagem para Mendoza 2026."
  )
  const waUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleScrollToRoteiro = () => {
    const el = document.getElementById("roteiro")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#74113a]">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="/andes-mountains-mendoza-vineyard-dramatic-sky.jpg"
          alt="Mendoza Andes Mountains"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#74113a]/80 via-[#74113a]/70 to-[#74113a]/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="pulse-subtle mb-8 rounded-full border border-[#C5A065] bg-[#74113a]/80 px-6 py-2 backdrop-blur-sm"
        >
          <span className="font-sans text-sm font-semibold tracking-wide text-[#C5A065]">
            ⚡ Grupo fechado, poucas vagas disponíveis
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1
            className="mb-2 font-serif text-6xl tracking-tight text-[#F9F8F3] md:text-8xl lg:text-9xl"
            style={{ letterSpacing: "-0.01em" }}
          >
            Mendoza te espera
          </h1>
          <p className="font-serif text-3xl italic text-[#C5A065] md:text-4xl lg:text-5xl">
            Abril 2026
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <CountdownTimer targetDate="2026-04-08T00:00:00" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group bg-[#C5A065] px-8 py-6 font-sans text-base font-bold text-[#74113a] hover:bg-[#C5A065]/90"
            onClick={() => window.open(waUrl, "_blank", "noopener,noreferrer")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Garantir Minha Vaga
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#F9F8F3] bg-transparent px-8 py-6 font-sans text-base font-semibold text-[#F9F8F3] hover:bg-[#F9F8F3]/10"
            onClick={handleScrollToRoteiro}
          >
            <FileText className="mr-2 h-5 w-5" />
            Ver Roteiro Completo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-[#F9F8F3]/80"
        >
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#C5A065]" />
            <span className="font-sans text-sm">Guia Especializado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#C5A065]" />
            <span className="font-sans text-sm">Vinícolas Exclusivas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#C5A065]" />
            <span className="font-sans text-sm">Gastronomia de Alto Nível</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
