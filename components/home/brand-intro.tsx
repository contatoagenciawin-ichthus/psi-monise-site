"use client";
import { motion } from "framer-motion";
import { Wine } from "lucide-react";

export function BrandIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-cream via-cream to-wine/5 text-center px-6 overflow-hidden">
      {/* Decoração de Fundo Sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Ícone Decorativo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-wine/10 to-gold/10 rounded-2xl flex items-center justify-center">
            <Wine className="w-10 h-10 text-wine" />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-wine leading-tight"
        >
          Bem-vindo ao <span className="italic text-gold">Território do Vinho</span>
        </motion.h2>

        {/* Descrição */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-wood/70 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Em Americana, criamos um refúgio para quem entende que o vinho não é apenas uma bebida, 
          mas um <strong className="text-wine font-semibold">convite</strong>. Um convite para desacelerar, 
          brindar com amigos e descobrir sabores que contam histórias.
        </motion.p>

        {/* Divider Decorativo */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center pt-6"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}