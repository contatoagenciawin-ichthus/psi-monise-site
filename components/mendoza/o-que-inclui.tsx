"use client";
import { motion } from "framer-motion";
import { Hotel, Car, Wine, Utensils, Users, Plane, CreditCard, Shield } from "lucide-react";

export function OQueInclui() {
  const inclusos = [
    {
      icon: Hotel,
      titulo: "Hospedagem Premium",
      descricao: "Hotel Villagio - conforto e localização privilegiada",
      destaque: true,
    },
    {
      icon: Car,
      titulo: "Transfers Completos",
      descricao: "Aeroporto, hotel e todas as vinícolas em van com ar-condicionado",
      destaque: true,
    },
    {
      icon: Wine,
      titulo: "Todas Degustações",
      descricao: "7 vinícolas exclusivas + adega de pequenos produtores",
      destaque: true,
    },
    {
      icon: Utensils,
      titulo: "Refeições Harmonizadas",
      descricao: "Todos almoços e jantares com vinhos, água e café inclusos",
      destaque: true,
    },
    {
      icon: Users,
      titulo: "Guia Especializado",
      descricao: "Guia credenciado + motorista + água a bordo durante todo passeio",
      destaque: true,
    },
  ];

  const naoInclusos = [
    {
      icon: Plane,
      titulo: "Passagens Aéreas",
      descricao: "Você escolhe seu voo e horário preferido",
    },
    {
      icon: CreditCard,
      titulo: "Despesas Pessoais",
      descricao: "Transporte e refeições nos dias/noites livres",
    },
    {
      icon: Shield,
      titulo: "Seguro Viagem",
      descricao: "Recomendamos contratar para sua tranquilidade",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-wine/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            O que está incluso
          </h2>
          <p className="text-lg text-wood/70 max-w-2xl mx-auto">
            Uma experiência completa e sem preocupações
          </p>
        </motion.div>

        {/* Grid Inclusos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {inclusos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border-2 border-wine/10 hover:border-wine/30 hover:shadow-medium transition-all duration-300"
            >
              {/* Badge "Incluso" */}
              <div className="absolute -top-3 -right-3 bg-wine text-cream px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-medium">
                ✓ Incluso
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-wine/10 to-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-wine" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-wine mb-3">
                {item.titulo}
              </h3>
              <p className="text-wood/70 leading-relaxed">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-wine/20" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-cream px-6 text-sm uppercase tracking-widest text-wine/60 font-semibold">
              Não Inclusos
            </span>
          </div>
        </div>

        {/* Grid Não Inclusos */}
        <div className="grid md:grid-cols-3 gap-6">
          {naoInclusos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-wine/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-wine/5 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-wine/50" />
              </div>

              {/* Content */}
              <h4 className="text-base font-semibold text-wine/80 mb-2">
                {item.titulo}
              </h4>
              <p className="text-sm text-wood/60 leading-relaxed">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Observação */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center"
        >
          <p className="text-wine/80 leading-relaxed">
            <strong className="text-wine">Importante:</strong> Gorjetas nos restaurantes 
            não estão incluídas. Os jantares são próximos ao hotel e não necessitam de transfer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}