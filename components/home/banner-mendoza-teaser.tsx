"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export function BannerMendozaTeaser() {
  return (
    <section className="relative py-24 bg-wine overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine/60 to-wine" />
      </div>

      {/* Badge Flutuante */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute top-8 right-8 bg-gold text-wine px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-strong"
      >
        🔥 Vagas Limitadas
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 border border-gold/50 rounded-full text-xs uppercase tracking-widest text-gold mb-6">
                Próxima Experiência
              </span>

              <h2 className="text-4xl lg:text-6xl font-serif text-cream leading-tight mb-6">
                Mendoza te espera em
                <br />
                <span className="italic text-gold">Abril 2026</span>
              </h2>

              <p className="text-cream/80 text-lg leading-relaxed">
                Uma viagem exclusiva para um grupo seleto. Vinícolas icônicas,
                gastronomia de alto nível e a curadoria de quem vive de vinho há
                mais de 20 anos.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-cream/20 rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-cream">5</p>
                <p className="text-xs uppercase text-cream/70">Dias</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-cream/20 rounded-xl p-4 text-center">
                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-cream">7</p>
                <p className="text-xs uppercase text-cream/70">Vinícolas</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-cream/20 rounded-xl p-4 text-center">
                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-cream">18</p>
                <p className="text-xs uppercase text-cream/70">Vagas</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/mendoza"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-wine rounded-xl font-bold uppercase tracking-wider hover:bg-cream hover:scale-105 transition-all duration-300 shadow-strong group"
            >
              Ver Roteiro Completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Imagem Visual — Taça de Malbec */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-gold/30 shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000"
                alt="Taça de Malbec argentino"
                className="
                  w-full h-full object-cover
                  saturate-75 contrast-90 brightness-95
                "
              />

              {/* Overlay cinematográfico */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine/85 via-wine/20 to-transparent" />

              {/* Grain leve */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>')",
                }}
              />

              {/* Badge sobre imagem */}
              <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm rounded-2xl p-6 shadow-strong">
                <p className="text-wine font-serif text-2xl italic mb-2">
                  Malbec Argentino
                </p>
                <p className="text-wood/70 text-sm">
                  Vinhos intensos, paisagens únicas e uma experiência autêntica
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
