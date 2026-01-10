"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    pergunta: "Preciso falar espanhol para aproveitar a viagem?",
    resposta:
      "Não! Você terá um guia brasileiro credenciado durante toda a viagem. Ele fará todas as traduções necessárias e garantirá que você aproveite cada momento sem preocupações com o idioma.",
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "O pagamento é dividido em 3 etapas: uma entrada de R$ 2.230 via PIX, seguida de 2 parcelas de R$ 2.500 cada, também via PIX. Os links de pagamento serão enviados conforme o cronograma acordado.",
  },
  {
    pergunta: "Posso ir sozinho(a)?",
    resposta:
      "Sim! Muitos viajantes vão sozinhos e fazem amizades incríveis durante a experiência. O grupo é formado por pessoas que compartilham a mesma paixão por vinhos e bons momentos. Se preferir quarto individual, consulte a disponibilidade e valores.",
  },
  {
    pergunta: "E se eu precisar cancelar?",
    resposta:
      "Em caso de cancelamento ou adiamento, a entrada paga fica como crédito para uma futura viagem no período de 1 ano a partir da data do comunicado. Recomendamos contratar seguro viagem para maior tranquilidade.",
  },
  {
    pergunta: "As passagens aéreas estão incluídas?",
    resposta:
      "Não, as passagens aéreas não estão incluídas no pacote. Isso permite que você escolha seus horários e companhias preferidas. Recomendamos chegar em Mendoza no dia 08 de abril pela manhã ou tarde.",
  },
  {
    pergunta: "Preciso de visto para entrar na Argentina?",
    resposta:
      "Brasileiros não precisam de visto para turismo na Argentina. Apenas um documento de identidade (RG) em bom estado ou passaporte válido. Recomendamos também levar carteira de vacinação atualizada.",
  },
  {
    pergunta: "O que devo levar na bagagem?",
    resposta:
      "Roupas confortáveis para passeios ao ar livre, calçados fechados para caminhar em vinhedos, uma jaqueta para as noites (pode fazer frio), protetor solar, óculos de sol e sua melhor disposição! Mendoza tem clima seco e altitude elevada.",
  },
  {
    pergunta: "Há opções vegetarianas/veganas nas refeições?",
    resposta:
      "Sim! Basta informar restrições alimentares no momento da reserva. As vinícolas e restaurantes parceiros estão preparados para atender diferentes dietas com a mesma qualidade e harmonização.",
  },
  {
    pergunta: "Quantas pessoas vão na viagem?",
    resposta:
      "O grupo é limitado a 18 pessoas para garantir uma experiência exclusiva e personalizada. Isso permite atenção do guia, conforto nos transfers e um ambiente intimista durante degustações e refeições.",
  },
  {
    pergunta: "Posso comprar vinhos durante a viagem?",
    resposta:
      "Sim! A maioria das vinícolas oferece venda de vinhos com preços especiais para visitantes. Você pode comprar e as próprias bodegas ajudam com o envio para o Brasil ou embalagem para levar na mala.",
  },
];

export function FAQMendoza() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-wine/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-wine" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-wood/70">
            Esclarecemos suas principais dúvidas sobre a viagem
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-wine/10 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow"
            >
              {/* Pergunta */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-wine/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-wine pr-8">
                  {faq.pergunta}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-wine flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Resposta */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-wood/70 leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-wine/5 to-gold/5 border border-wine/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-serif text-wine mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-wood/70 mb-6">
            Fale diretamente com o Sr. Liasch pelo WhatsApp e tire todas as suas dúvidas
          </p>
          <a
            href="https://wa.me/5519997088241?text=Olá! Tenho dúvidas sobre a viagem a Mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-wine text-cream rounded-xl font-bold uppercase tracking-wider hover:bg-wine-light hover:scale-105 transition-all duration-300 shadow-medium"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar com Liasch
          </a>
        </motion.div>
      </div>
    </section>
  );
}