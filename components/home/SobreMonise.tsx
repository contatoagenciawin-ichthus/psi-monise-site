"use client";
import { motion } from "framer-motion";
import { Brain, Heart, BookOpen, GraduationCap } from "lucide-react";

export function SobreMonise() {
  const especializacoes = [
    {
      icon: Brain,
      value: "Neuro",
      label: "Psicologia",
      description: "Especialista em Neuropsicologia e Neuroanatomia",
    },
    {
      icon: Heart,
      value: "Integral",
      label: "Cuidado",
      description: "Foco no corpo, mente e emoção de forma única",
    },
    {
      icon: BookOpen,
      value: "Clínica",
      label: "Psicanálise",
      description: "Formação profunda na escuta das subjetividades",
    },
    {
      icon: GraduationCap,
      value: "Saúde",
      label: "Qualidade de Vida",
      description: "Graduada em Ed. Física com olhar para o bem-estar",
    },
  ];

  return (
    <section className="py-32 bg-[#F5F3EF] relative overflow-hidden">
      {/* Decoração de fundo suave */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A8B8A3]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8D4CC]/15 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 border border-[#A8B8A3]/30 rounded-full text-xs uppercase tracking-widest text-[#8C6A5D] mb-6 bg-white/50">
            Quem vai te acolher
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-serif text-[#6E6E6E] mb-8 leading-tight">
            Sou Monise Ribeiro,
            <br />
            <span className="italic text-[#8C6A5D]">psicanalista clínica</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-[#6E6E6E]/80 leading-relaxed">
            Minha atuação é marcada pela <strong className="text-[#8C6A5D] font-semibold">escuta e pelo acolhimento</strong>. 
            Acredito que o cuidado emocional acontece quando há espaço para falar, sentir e elaborar, 
            sem julgamentos, sem pressa e sem exigências.
          </p>
        </motion.div>

        {/* Especializações Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {especializacoes.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-[#A8B8A3]/20 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-[#F5F3EF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#A8B8A3]" />
                </div>
                
                {/* Value */}
                <p className="text-3xl font-serif text-[#6E6E6E] mb-2 font-bold">
                  {stat.value}
                </p>
                
                {/* Label */}
                <p className="text-xs uppercase tracking-widest text-[#8C6A5D] font-semibold mb-3">
                  {stat.label}
                </p>
                
                {/* Description */}
                <p className="text-sm text-[#6E6E6E]/70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filosofia de Trabalho */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <p className="text-lg text-[#6E6E6E]/70 italic">
            "Minha filosofia de trabalho parte de um princípio simples e profundo: 
            O ser humano não é apenas o que mostra. É também o que sente, silencia e repete."
          </p>
        </motion.div>
      </div>
    </section>
  );
}