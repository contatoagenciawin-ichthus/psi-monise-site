"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Home, Laptop } from "lucide-react";

export function OnlineBenefits() {
  // Dados de contato da Monise Ribeiro
  const whatsappNumber = "5519982129344";
  const whatsappMessage = encodeURIComponent(
    "Olá, Monise! Gostaria de saber mais sobre o acolhimento psicanalítico e como funcionam as sessões online."
  );
  const waUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 bg-[#A8B8A3] overflow-hidden">
      {/* Background Decorativo Suave */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/ambiente-acolhedor.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#A8B8A3] via-[#A8B8A3]/60 to-[#A8B8A3]" />
      </div>

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
              <span className="inline-block px-4 py-2 border border-white/50 rounded-full text-xs uppercase tracking-widest text-white mb-6">
                Praticidade e Cuidado
              </span>

              <h2 className="text-4xl lg:text-6xl font-serif text-[#F5F3EF] leading-tight mb-6">
                Por que o atendimento 
                <br />
                <span className="italic text-[#8C6A5D]">online funciona?</span>
              </h2>

              <p className="text-[#F5F3EF]/90 text-lg leading-relaxed">
                O formato online permite mais conforto, privacidade e a constância necessária 
                para o seu processo terapêutico. O vínculo não depende da distância física, 
                mas da qualidade da presença e da escuta.
              </p>
            </div>

            {/* Info Cards - Benefícios do Online */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-xs uppercase text-white/90 font-medium">Privacidade</p>
                <p className="text-[10px] text-white/70 mt-1">Ambiente Sigiloso</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <Home className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-xs uppercase text-white/90 font-medium">Conforto</p>
                <p className="text-[10px] text-white/70 mt-1">Seu próprio espaço</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <Laptop className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-xs uppercase text-white/90 font-medium">Constância</p>
                <p className="text-[10px] text-white/70 mt-1">Sem deslocamento</p>
              </div>
            </div>

            {/* CTA Ajustado para WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#8C6A5D] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#F5F3EF] hover:text-[#8C6A5D] transition-all duration-300 shadow-lg group"
            >
              Agendar meu acolhimento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Imagem Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src="/images/atendimento-online-mulher.jpg"
                alt="Mulher em um momento introspectivo em casa"
                className="w-full h-full object-cover saturate-75 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8C6A5D]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#F5F3EF]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <p className="text-[#6E6E6E] font-serif text-2xl italic mb-2">
                  Um momento só seu
                </p>
                <p className="text-[#6E6E6E]/80 text-sm">
                  Quando você está em um ambiente familiar, o corpo relaxa e a escuta se torna ainda mais profunda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}