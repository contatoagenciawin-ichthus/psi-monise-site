"use client";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export function EmotionalWelcome() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F5F3EF] text-center px-6 overflow-hidden">
      {/* Decoração de Fundo Orgânica - Simula a respiração */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A8B8A3]/10 rounded-full blur-[100px] pointer-events-none" 
      />
      
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Ícone Decorativo Suave */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 bg-[#E8D4CC]/30 rounded-full flex items-center justify-center">
            <HeartHandshake className="w-10 h-10 text-[#8C6A5D]" />
          </div>
        </motion.div>

        {/* Título de Empatia */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6E6E6E] leading-tight"
        >
          Você não está <span className="italic text-[#8C6A5D]">sozinha</span> no que sente
        </motion.h2>

        {/* Descrição e Validação */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#6E6E6E]/80 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Muitas mulheres seguem funcionando, cuidando de tudo e de todos, enquanto silenciam o que sentem. 
          Este espaço existe para que você não precise mais carregar o peso do mundo 
          <strong className="text-[#8C6A5D] font-semibold"> sozinha</strong>. Você não está fraca. Você está em processo.
        </motion.p>

        {/* Lista de Sintomas (Opcional - Pode ser um grid abaixo) */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-[#6E6E6E]/70 text-sm font-sans tracking-wide uppercase"
        >
            <span>• Ansiedade constante</span>
            <span>• Conflitos amorosos</span>
            <span>• Baixa autoestima</span>
        </motion.div>

        {/* Divider Orgânico */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center pt-6"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#A8B8A3] to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}