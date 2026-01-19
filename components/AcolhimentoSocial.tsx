"use client"

import { useMemo, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

type TestimonialsContext = "home" | "processo"

interface Testimonial {
  id: number
  name: string
  origin: string
  photo: string
  quote: string
  tags: TestimonialsContext[]
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "M.R.",
    origin: "Atendimento Online",
    photo: "/professional-woman-portrait.png",
    quote:
      "Encontrei um espaço onde finalmente pude falar sem medo de julgamentos. A escuta da Monise é de uma delicadeza e profundidade que me ajudaram a entender padrões que eu repetia há anos.",
    tags: ["home", "processo"],
  },
  {
    id: 2,
    name: "A.C.",
    origin: "Atendimento Online",
    photo: "/happy-woman-portrait.png",
    quote:
      "Eu vivia cuidando de todos e me esquecendo. Nas sessões, aprendi que cuidar de mim não era egoísmo, mas necessidade. O ambiente online me trouxe um conforto que eu não esperava.",
    tags: ["home", "processo"],
  },
  {
    id: 3,
    name: "S.F.",
    origin: "Atendimento Online",
    photo: "/elegant-woman-portrait.png",
    quote:
      "A formação dela em neuropsicologia traz uma segurança enorme. Ela entende não só o que eu sinto, mas como minha mente funciona. Tem sido um processo transformador de autoconhecimento.",
    tags: ["processo", "home"],
  },
]

type Props = {
  context?: TestimonialsContext
  title?: string
  subtitle?: string
  limit?: number
  autoPlayMs?: number
  hideHeader?: boolean
}

export function AcolhimentoSocial({
  context = "home",
  title,
  subtitle,
  limit,
  autoPlayMs = 8000,
  hideHeader = false,
}: Props) {
  const items = useMemo(() => {
    const filtered = testimonials.filter((t) => t.tags.includes(context))
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered
  }, [context, limit])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!items.length) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayMs)
    return () => clearInterval(timer)
  }, [items.length, autoPlayMs])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    if (!items.length) return
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      let next = prev + newDirection
      if (next < 0) next = items.length - 1
      if (next >= items.length) next = 0
      return next
    })
  }

  if (!items.length) return null

  const heading = title ?? "Relatos de quem iniciou o cuidado"
  const sub = subtitle ?? "A transformação acontece quando você se sente segura para se olhar por dentro."

  const current = items[currentIndex]

  return (
    <section className="w-full bg-[#F5F3EF] px-4 py-24">
      <div className="mx-auto max-w-5xl">
        {!hideHeader && (
          <div className="mb-14 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl text-[#6E6E6E] md:text-5xl"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl font-sans text-base text-[#6E6E6E]/70 md:text-lg italic"
            >
              {sub}
            </motion.p>
          </div>
        )}

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm md:p-12 border border-[#A8B8A3]/10">
                <div className="flex flex-col items-center text-center gap-6">
                  
                  <Quote className="h-10 w-10 text-[#A8B8A3]/40" />

                  <blockquote className="font-serif text-xl leading-relaxed text-[#6E6E6E] md:text-2xl italic">
                    "{current.quote}"
                  </blockquote>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full grayscale opacity-80">
                      <img
                        src={current.photo}
                        alt={current.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-sans text-lg font-bold text-[#8C6A5D]">
                      {current.name}
                    </p>
                    <p className="font-sans text-xs uppercase tracking-widest text-[#A8B8A3]">
                      {current.origin}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES SUAVES */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => paginate(-1)}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#A8B8A3]/30 text-[#A8B8A3] transition-colors hover:bg-[#A8B8A3] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-[#8C6A5D]"
                      : "w-1.5 bg-[#A8B8A3]/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#A8B8A3]/30 text-[#A8B8A3] transition-colors hover:bg-[#A8B8A3] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}