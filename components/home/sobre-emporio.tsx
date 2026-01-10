"use client";
import { motion } from "framer-motion";
import { Wine, Users, Globe, Award } from "lucide-react";

export function SobreEmporio() {
  const stats = [
    {
      icon: Wine,
      value: "150+",
      label: "Rótulos Selecionados",
      description: "Da Serra Gaúcha à Europa",
    },
    {
      icon: Users,
      value: "Grupos",
      label: "Seletos",
      description: "Experiências exclusivas",
    },
    {
      icon: Globe,
      value: "Viagens",
      label: "Memoráveis",
      description: "Brasil e Argentina",
    },
    {
      icon: Award,
      value: "20 Anos",
      label: "de Tradição",
      description: "Profissionalismo em vinhos",
    },
  ];

  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 border border-wine/20 rounded-full text-xs uppercase tracking-widest text-wine/70 mb-6 bg-white/50">
            Americana • SP
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-serif text-wine mb-8 leading-tight">
            Mais que um empório,
            <br />
            <span className="italic text-gold">uma filosofia</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-wood/70 leading-relaxed">
            O que começou com uma paixão genuína por vinhos transformou-se em um 
            <strong className="text-wine font-semibold"> espaço único em Americana</strong>, 
            onde cada garrafa conta uma história e cada viagem cria memórias inesquecíveis.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-wine/10 rounded-2xl p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-wine/10 to-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-wine" />
                </div>
                
                {/* Value */}
                <p className="text-4xl font-serif text-wine mb-2 font-bold">
                  {stat.value}
                </p>
                
                {/* Label */}
                <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-3">
                  {stat.label}
                </p>
                
                {/* Description */}
                <p className="text-sm text-wood/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <p className="text-lg text-wood/60 italic">
            "Não vendemos apenas garrafas. Oferecemos um ambiente pensado nos mínimos 
            detalhes, música ambiente e uma atmosfera que convida a esquecer do relógio."
          </p>
        </motion.div>
      </div>
    </section>
  );
}