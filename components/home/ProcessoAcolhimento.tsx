"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle, Heart, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

const etapasProcesso = [
  {
    id: 1,
    titulo: "Primeiro Contato",
    descricao: "Um passo corajoso em direção ao seu cuidado.",
    detalhes: [
      {
        icon: MessageCircle,
        titulo: "Agendamento Simples",
        texto: "O contato inicial é feito via WhatsApp, onde tiramos dúvidas básicas e alinhamos o melhor horário para você.",
      },
      {
        icon: Heart,
        titulo: "Escuta Sem Julgamentos",
        texto: "Desde o primeiro 'oi', você encontrará um ambiente preparado para acolher sua história com respeito total.",
      },
    ],
  },
  {
    id: 2,
    titulo: "A Primeira Sessão",
    descricao: "O início da construção de um vínculo seguro.",
    detalhes: [
      {
        icon: UserCheck,
        titulo: "Conexão e Vínculo",
        texto: "Neste encontro, você terá liberdade para falar sobre o que te trouxe até aqui e entender como a psicanálise pode te ajudar.",
      },
      {
        icon: ShieldCheck,
        titulo: "Sigilo e Ética",
        texto: "Tudo o que é dito em sessão é protegido pelo sigilo profissional absoluto, garantindo sua total segurança emocional.",
      },
    ],
  },
  {
    id: 3,
    titulo: "O Atendimento Online",
    descricao: "Tecnologia a serviço da profundidade emocional.",
    detalhes: [
      {
        icon: Sparkles,
        titulo: "Conforto do seu Lar",
        texto: "As sessões ocorrem por videochamada. Estar em um ambiente familiar ajuda o corpo a relaxar e a mente a se abrir.",
      },
      {
        icon: ShieldCheck,
        titulo: "Privacidade Garantida",
        texto: "Utilizamos plataformas seguras que garantem a estabilidade e a privacidade da sua escuta.",
      },
    ],
  },
  {
    id: 4,
    titulo: "Frequência e Continuidade",
    descricao: "Respeito ao seu ritmo e à sua subjetividade.",
    detalhes: [
      {
        icon: Heart,
        titulo: "Sessões Semanais",
        texto: "Geralmente os encontros são semanais, criando a constância necessária para a elaboração dos seus conflitos.",
      },
      {
        icon: UserCheck,
        titulo: "Seu Ritmo",
        texto: "O processo acontece sem pressa e sem exigências, respeitando o tempo que você precisa para cada descoberta.",
      },
    ],
  },
];

export function ProcessoAcolhimento() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  return (
    <section id="como-funciona" className="py-24 bg-[#F5F3EF]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-[#6E6E6E] mb-6">
            Como funciona o processo
          </h2>
          <p className="text-lg text-[#6E6E6E]/70 max-w-2xl mx-auto italic">
            "Cada sessão é um espaço só seu, construído no seu tempo e com respeito à sua história."
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {etapasProcesso.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#A8B8A3]/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header da Etapa */}
              <button
                onClick={() => setOpenStep(openStep === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-[#F5F3EF]/50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  {/* Badge Número */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A8B8A3] rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {item.id}
                    </span>
                  </div>

                  {/* Título */}
                  <div>
                    <h3 className="text-xl font-serif text-[#6E6E6E]">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-[#8C6A5D] font-medium mt-1">
                      {item.descricao}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={`w-6 h-6 text-[#A8B8A3] transition-transform duration-300 ${
                    openStep === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Conteúdo Expansível */}
              <motion.div
                initial={false}
                animate={{
                  height: openStep === item.id ? "auto" : 0,
                  opacity: openStep === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 lg:px-8 pb-8 pt-4 space-y-6 bg-[#F5F3EF]/30">
                  {item.detalhes.map((detalhe, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 pb-6 border-b border-[#A8B8A3]/10 last:border-0 last:pb-0"
                    >
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#E8D4CC]/40 flex items-center justify-center">
                          <detalhe.icon className="w-5 h-5 text-[#8C6A5D]" />
                        </div>
                        {idx < item.detalhes.length - 1 && (
                          <div className="w-px flex-1 bg-[#A8B8A3]/20 mt-2" />
                        )}
                      </div>

                      <div className="flex-1 pt-1">
                        <h4 className="text-base font-semibold text-[#6E6E6E] mb-1">
                          {detalhe.titulo}
                        </h4>
                        <p className="text-[#6E6E6E]/80 text-sm leading-relaxed">
                          {detalhe.texto}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}