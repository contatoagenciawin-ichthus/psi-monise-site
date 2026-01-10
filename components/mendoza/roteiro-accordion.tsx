"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MapPin, Clock, Wine, Utensils } from "lucide-react";

const roteiro = [
  {
    dia: 1,
    data: "Quarta, 08 de Abril",
    titulo: "Chegada em Mendoza",
    atividades: [
      {
        horario: "00:00",
        icon: MapPin,
        titulo: "Transfer In",
        descricao: "Aeroporto → Hotel Villagio",
      },
      {
        horario: "20:30",
        icon: Utensils,
        titulo: "Jantar Boas-Vindas",
        descricao: "Restaurante Centauro: Menu de 4 passos harmonizados com vinhos reserva de diferentes vinícolas.",
      },
    ],
  },
  {
    dia: 2,
    data: "Quinta, 09 de Abril",
    titulo: "Luján de Cuyo",
    atividades: [
      {
        horario: "08:30",
        icon: MapPin,
        titulo: "Saída do Hotel",
        descricao: "Motorista e guia em van passa buscar os passageiros",
      },
      {
        horario: "10:00",
        icon: Wine,
        titulo: "Bodega Chandon",
        descricao: "Degustação Clássica de Espumantes",
      },
      {
        horario: "12:00",
        icon: Wine,
        titulo: "Bodega Minimal",
        descricao: "Degustação de Vinhos Boutique Premium",
      },
      {
        horario: "13:30",
        icon: Utensils,
        titulo: "Almoço na Bodega La Anita",
        descricao: "Menu de 4 passos harmonizados com vinhos reserva de Finca La Anita",
      },
      {
        horario: "17:00",
        icon: MapPin,
        titulo: "Retorno ao Hotel",
        descricao: "Tempo livre para descanso",
      },
      {
        horario: "20:00",
        icon: Wine,
        titulo: "Degustação Código Vinario",
        descricao: "Vinhos de pequenos produtores na adega",
      },
    ],
  },
  {
    dia: 3,
    data: "Sexta, 10 de Abril",
    titulo: "Maipú",
    atividades: [
      {
        horario: "09:00",
        icon: MapPin,
        titulo: "Saída do Hotel",
        descricao: "Rumo à região de Maipú",
      },
      {
        horario: "10:00",
        icon: Wine,
        titulo: "Bodega Familia Cassone",
        descricao: "Degustação Clássica",
      },
      {
        horario: "11:30",
        icon: Wine,
        titulo: "Olivícola Centenário",
        descricao: "Degustação de Azeites Artesanais",
      },
      {
        horario: "13:00",
        icon: Utensils,
        titulo: "Almoço na Bodega Mil Suelos",
        descricao: "Menu de 3 passos harmonizados com vinhos da linha Manos Negras",
      },
      {
        horario: "17:00",
        icon: MapPin,
        titulo: "Retorno ao Hotel",
        descricao: "Noite livre para explorar Mendoza",
      },
    ],
  },
  {
    dia: 4,
    data: "Sábado, 11 de Abril",
    titulo: "Valle de Uco",
    atividades: [
      {
        horario: "09:00",
        icon: MapPin,
        titulo: "Saída do Hotel",
        descricao: "Viagem ao icônico Valle de Uco (altitude +1.000m)",
      },
      {
        horario: "11:00",
        icon: Wine,
        titulo: "Bodega Andeluna",
        descricao: "Degustação 'Montanha numa Taça'",
      },
      {
        horario: "13:30",
        icon: Utensils,
        titulo: "Almoço na Bodega La Azul",
        descricao: "Menu de 3 passos harmonizados com vinhos reserva da vinícola",
      },
      {
        horario: "18:00",
        icon: MapPin,
        titulo: "Retorno ao Hotel",
        descricao: "Preparação para o jantar de despedida",
      },
      {
        horario: "21:00",
        icon: Utensils,
        titulo: "Jantar de Despedida",
        descricao: "Restaurante Republica: Menu de 5 passos harmonizados com vinhos Família Catena Zapata",
      },
    ],
  },
  {
    dia: 5,
    data: "Domingo, 12 de Abril",
    titulo: "Retorno ao Brasil",
    atividades: [
      {
        horario: "00:00",
        icon: MapPin,
        titulo: "Transfer Out",
        descricao: "Hotel Villagio → Aeroporto de Mendoza. Até a próxima aventura!",
      },
    ],
  },
];

export function RoteiroAccordion() {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            Roteiro Completo
          </h2>
          <p className="text-lg text-wood/70 max-w-2xl mx-auto">
            5 dias cuidadosamente planejados para você viver o melhor de Mendoza
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {roteiro.map((item, index) => (
            <motion.div
              key={item.dia}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-wine/10 rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow"
            >
              {/* Header do Dia */}
              <button
                onClick={() => setOpenDay(openDay === item.dia ? null : item.dia)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-wine/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  {/* Badge Número do Dia */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-wine to-wine-light rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-cream">
                      {item.dia}
                    </span>
                  </div>

                  {/* Título */}
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-1">
                      {item.data}
                    </p>
                    <h3 className="text-2xl font-serif text-wine">
                      {item.titulo}
                    </h3>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={`w-6 h-6 text-wine transition-transform duration-300 ${
                    openDay === item.dia ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Conteúdo Expansível */}
              <motion.div
                initial={false}
                animate={{
                  height: openDay === item.dia ? "auto" : 0,
                  opacity: openDay === item.dia ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 lg:px-8 pb-8 pt-4 space-y-6">
                  {item.atividades.map((atividade, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 pb-6 border-b border-wine/10 last:border-0 last:pb-0"
                    >
                      {/* Timeline */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                          <atividade.icon className="w-5 h-5 text-gold" />
                        </div>
                        {idx < item.atividades.length - 1 && (
                          <div className="w-0.5 flex-1 bg-wine/10 mt-2" />
                        )}
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-4 h-4 text-wine/50" />
                          <span className="text-sm font-mono text-wine font-semibold">
                            {atividade.horario}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-wine mb-1">
                          {atividade.titulo}
                        </h4>
                        <p className="text-wood/70 leading-relaxed">
                          {atividade.descricao}
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