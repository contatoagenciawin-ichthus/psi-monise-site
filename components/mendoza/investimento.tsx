"use client";
import { motion } from "framer-motion";
import { Check, MessageCircle, AlertCircle, Shield } from "lucide-react";

export function Investimento() {
  const beneficios = [
    "5 dias de experiência exclusiva",
    "7 vinícolas + degustações especiais",
    "Todos almoços e jantares inclusos",
    "Hospedagem Hotel Villagio",
    "Transfers e guia credenciado",
    "Grupo limitado: apenas 18 pessoas",
  ];

  const whatsappNumber = "5519997088241";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a viagem para Mendoza em Abril 2026."
  );

  return (
    <section className="py-24 bg-wine relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/50 rounded-full text-xs uppercase tracking-widest text-gold mb-6">
            Investimento
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-cream mb-4">
            Sua experiência em Mendoza
          </h2>
          <p className="text-cream/70 text-lg">
            Tudo incluso, sem surpresas
          </p>
        </motion.div>

        {/* Card Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cream rounded-3xl p-8 lg:p-12 shadow-premium"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Lado Esquerdo: CTA Preço */}
            <div className="space-y-8">
              {/* Chamada Principal */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-wine to-wine-light rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <MessageCircle className="w-10 h-10 text-cream" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif text-wine mb-4 leading-tight">
                  Condições especiais direto com o Liasch
                </h3>
                <p className="text-lg text-wood/70 leading-relaxed">
                  Converse diretamente com quem organizou cada detalhe desta experiência. 
                  Valores, formas de pagamento e condições exclusivas.
                </p>
              </div>

              {/* Badge Destaque */}
              <div className="bg-gold/10 border-2 border-gold/30 rounded-2xl p-6 text-center">
                <p className="text-sm uppercase tracking-widest text-wine/70 mb-2">
                  Grupo Limitado
                </p>
                <p className="text-4xl font-bold text-wine mb-1">18 vagas</p>
                <p className="text-sm text-wine/60">
                  Experiência exclusiva e intimista
                </p>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-wine text-cream rounded-xl font-bold uppercase tracking-wider hover:bg-wine-light hover:scale-105 transition-all duration-300 shadow-strong group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Falar com Liasch no WhatsApp</span>
              </a>

              <p className="text-center text-wood/60 text-sm">
                Resposta rápida e atendimento personalizado
              </p>
            </div>

            {/* Lado Direito: Benefícios */}
            <div>
              <h3 className="text-2xl font-serif text-wine mb-6">
                O que você vai viver:
              </h3>
              <ul className="space-y-4">
                {beneficios.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-wine rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-cream" />
                    </div>
                    <span className="text-wood/80 leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Informações Importantes */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Validade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-cream mb-2">
                  Validade da Promoção
                </h4>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Condições especiais válidas até <strong className="text-gold">28 de Fevereiro de 2026</strong>.
                  Após esta data, valores e disponibilidade podem mudar.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cancelamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-cream mb-2">
                  Política de Cancelamento
                </h4>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Em caso de cancelamento, consulte as condições com o Liasch. 
                  Recomendamos contratar <strong className="text-gold">seguro viagem</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Observação Final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-cream/60 text-sm mt-8"
        >
          * Experiência para grupo de 18 pessoas. Consulte disponibilidade.
        </motion.p>
      </div>
    </section>
  );
}