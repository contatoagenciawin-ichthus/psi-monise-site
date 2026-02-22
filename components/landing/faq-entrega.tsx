"use client";
import { useState } from "react";
import { ChevronDown, Mail, Tablet, Headphones, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    icon: Mail,
    q: "Como recebo o meu Guia Digital?",
    a: "O acesso é imediato. Assim que o pagamento for aprovado pela Hotmart, você receberá um e-mail com seus dados de acesso para ler o e-book e ouvir o audiobook em nossa área de membros exclusiva."
  },
  {
    icon: Tablet,
    q: "Em quais dispositivos posso ler?",
    a: "O e-book é entregue em formato PDF de alta qualidade, compatível com qualquer celular, tablet, computador ou leitor de e-books como o Kindle."
  },
  {
    icon: Headphones,
    q: "Como funciona o Audiobook?",
    a: "Você poderá ouvir os capítulos narrados diretamente na plataforma da Hotmart ou baixar os arquivos para ouvir onde desejar, mesmo sem internet."
  },
  {
    icon: ShieldCheck,
    q: "A compra é segura?",
    a: "Sim. Todo o processo de pagamento e entrega é gerenciado pela Hotmart, a maior plataforma de produtos digitais da América Latina."
  }
];

export function FAQEntrega() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F5F3EF]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-12 text-[#6E6E6E]">Dúvidas frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#A8B8A3]/20 rounded-2xl bg-white overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#F5F3EF]/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <faq.icon className="w-5 h-5 text-[#A8B8A3]" />
                  <span className="font-serif text-[#6E6E6E]">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-[#6E6E6E]/80 text-sm leading-relaxed border-t border-[#F5F3EF]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}