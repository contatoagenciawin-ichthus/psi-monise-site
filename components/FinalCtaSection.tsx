"use client"

import { motion } from "framer-motion"
import { MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const acolhimentoAvatars = [
  "/avatar-woman-1.png",
  "/avatar-woman-2.png",
  "/avatar-woman-3.png",
  "/avatar-woman-4.png",
]

export function FinalCtaSection() {
  // ✅ WhatsApp da Monise Ribeiro: (19) 98212-9344
  const whatsappNumber = "5519982129344"

  const whatsappMessage = encodeURIComponent(
    "Olá, Monise! Gostaria de saber mais sobre o acolhimento psicanalítico e como funcionam as sessões online."
  )

  const waUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative w-full overflow-hidden bg-[#8C6A5D] px-4 py-24">
      {/* Background Decorativo Suave */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#A8B8A3] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F5F3EF] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge de Acolhimento */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F5F3EF]/30 bg-white/10 px-6 py-2 backdrop-blur-sm"
        >
          <div className="h-2 w-2 rounded-full bg-[#A8B8A3]" />
          <span className="font-sans text-xs uppercase tracking-widest text-[#F5F3EF]">
            Dê o primeiro passo hoje
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-serif text-4xl leading-tight text-[#F5F3EF] md:text-5xl lg:text-6xl"
        >
          Cuide com carinho da sua vida. 
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 font-sans text-lg leading-relaxed text-[#F5F3EF]/90 md:text-xl"
        >
          Você não precisa ter tudo organizado para começar.  Fale comigo pelo WhatsApp para tirar dúvidas sobre o atendimento online e agendar seu acolhimento.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <Button
            size="lg"
            className="group h-auto bg-[#F5F3EF] px-10 py-5 font-sans text-lg font-bold text-[#8C6A5D] transition-all hover:scale-105 hover:bg-white hover:shadow-xl rounded-full"
            onClick={() => window.open(waUrl, "_blank", "noopener,noreferrer")}
          >
            <MessageCircle className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12" />
            Agendar Atendimento
          </Button>
        </motion.div>

        {/* Social Proof Suave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div className="flex -space-x-2">
            {acolhimentoAvatars.map((avatar, index) => (
              <Avatar key={index} className="border-2 border-[#8C6A5D] grayscale opacity-80 h-10 w-10">
                <AvatarImage src={avatar} />
                <AvatarFallback className="bg-[#A8B8A3] text-white">
                  {index + 1}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>

          <div className="flex items-center gap-2 font-sans text-sm text-[#F5F3EF]/80">
            <Heart className="h-4 w-4 text-[#A8B8A3]" />
            <span>
              Espaço de <strong className="text-white">escuta e respeito</strong> para sua história.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}