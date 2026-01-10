"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const confirmedAvatars = [
  "/diverse-person.png",
  "/diverse-group-two.png",
  "/diverse-group-outdoors.png",
  "/diverse-group-four.png",
]

export function WhatsAppCtaSection() {
  // ✅ WhatsApp do Liasch: +55 (19) 99708-8241
  const whatsappNumber = "5519997088241"

  // ✅ Mensagem padrão (pode ajustar depois conforme a página: home/mendoza/rs)
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site do Empório Liasch e quero saber mais sobre a viagem para Mendoza 2026."
  )

  const waUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative w-full overflow-hidden bg-wine px-4 py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Urgency Timer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold bg-wine/60 px-6 py-2 backdrop-blur-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-gold" />
          <span className="font-sans text-sm font-semibold text-gold">
            Últimas vagas disponíveis
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl"
        >
          Entre nesta experiência conosco — Mendoza te espera.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 font-sans text-lg leading-relaxed text-cream/90 md:text-xl"
        >
          Fale diretamente com o Liasch pelo WhatsApp e tire suas dúvidas. Reservas simples, sem complicação — com todo o
          suporte que você precisa.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Button
            size="lg"
            className="group h-auto bg-gold px-12 py-6 font-sans text-xl font-bold text-wine transition-all hover:scale-105 hover:bg-gold/90 hover:shadow-[0_0_40px_rgba(197,160,101,0.6)]"
            onClick={() => window.open(waUrl, "_blank", "noopener,noreferrer")}
          >
            <MessageCircle className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12" />
            Falar com o Liasch no WhatsApp
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div className="flex -space-x-2">
            {confirmedAvatars.map((avatar, index) => (
              <Avatar key={index} className="border-2 border-wine ring-2 ring-gold/50">
                <AvatarImage src={avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gold text-wine">
                  {index + 1}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>

          <div className="flex items-center gap-2 font-sans text-sm text-cream/90">
            <Users className="h-5 w-5 text-gold" />
            <span>
              <strong className="text-gold">Viajantes</strong> confirmando presença
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
