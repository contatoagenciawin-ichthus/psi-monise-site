"use client"

import { useMemo, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type TestimonialsContext = "home" | "rs" | "mendoza"

interface Testimonial {
  id: number
  name: string
  origin: string
  photo: string
  rating: number
  quote: string
  tags: TestimonialsContext[]
}

/**
 * ⚠️ IMPORTANTE
 * - Não inventar viagens.
 * - Estes depoimentos são genéricos/honestos.
 * - Troque por reais quando tiver autorização.
 */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cliente do Empório",
    origin: "Americana • SP",
    photo: "/happy-woman-portrait.png",
    rating: 5,
    quote:
      "Atendimento impecável e curadoria de rótulos muito acima do comum. Sempre que quero escolher bem, eu volto no Empório Liasch.",
    tags: ["home", "mendoza", "rs"],
  },
  {
    id: 2,
    name: "Cliente fiel",
    origin: "Americana • SP",
    photo: "/professional-man-portrait.png",
    rating: 5,
    quote:
      "Você sente a experiência de quem vive de vinho há anos. Recomendações certeiras, sem complicar — e sempre com ótimas descobertas.",
    tags: ["home", "mendoza", "rs"],
  },
  {
    id: 3,
    name: "Participante da viagem",
    origin: "Rio Grande do Sul",
    photo: "/elegant-woman-portrait.png",
    rating: 5,
    quote:
      "Foi uma viagem leve, organizada e cheia de momentos bons. Degustações, gastronomia e um grupo que virou memória.",
    tags: ["rs", "home", "mendoza"],
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

export function TestimonialCarousel({
  context = "home",
  title,
  subtitle,
  limit,
  autoPlayMs = 7000,
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

  useEffect(() => {
    setCurrentIndex(0)
    setDirection(0)
  }, [context, limit])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
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

  const heading =
    title ??
    (context === "rs"
      ? "O que o grupo disse depois da viagem"
      : context === "mendoza"
      ? "O que as pessoas falam das experiências do Liasch"
      : "O que as pessoas dizem do Empório")

  const sub =
    subtitle ??
    (context === "rs"
      ? "Depoimentos reais sobre a experiência e o cuidado em cada detalhe."
      : context === "mendoza"
      ? "Sem promessas vazias: experiência, curadoria e grupo bem acompanhado."
      : "Curadoria, atendimento e 20 anos vivendo exclusivamente de vinhos.")

  const current = items[currentIndex]

  return (
    <section className="w-full bg-[#F9F8F3] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {!hideHeader && (
          <div className="mb-14 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl text-[#74113a] md:text-5xl"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mx-auto mt-4 max-w-2xl font-sans text-base text-[#2C1810]/70 md:text-lg"
            >
              {sub}
            </motion.p>
          </div>
        )}

        <div className="relative">
          <div className="pointer-events-none absolute -left-4 -top-8 font-serif text-9xl text-[#74113a]/10 md:-left-8 md:-top-12 md:text-[12rem]">
            "
          </div>

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
                opacity: { duration: 0.2 },
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-xl md:p-12">
                <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">

                  {/* AVATAR — tratamento anti-plástico */}
                  <div className="shrink-0">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-[#C5A065]/30">
                      <img
                        src={current.photo || "/placeholder.svg"}
                        alt={current.name}
                        className="
                          h-full w-full object-cover
                          saturate-75 contrast-90 brightness-105
                        "
                      />

                      {/* grain */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                        style={{
                          backgroundImage:
                            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>')",
                        }}
                      />

                      {/* vinheta */}
                      <div className="pointer-events-none absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="flex-1">
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-[#C5A065] text-[#C5A065]"
                        />
                      ))}
                    </div>

                    <blockquote className="mb-6 font-serif text-xl leading-relaxed text-[#2C1810] md:text-2xl">
                      {current.quote}
                    </blockquote>

                    <div>
                      <p className="font-sans text-lg font-bold text-[#74113a]">
                        {current.name}
                      </p>
                      <p className="font-sans text-sm text-[#C5A065]">
                        {current.origin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="h-12 w-12 rounded-full border-2 border-[#74113a] bg-transparent text-[#74113a] hover:bg-[#74113a] hover:text-[#F9F8F3]"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#C5A065]"
                      : "w-2 bg-[#74113a]/30 hover:bg-[#74113a]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="h-12 w-12 rounded-full border-2 border-[#74113a] bg-transparent text-[#74113a] hover:bg-[#74113a] hover:text-[#F9F8F3]"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
