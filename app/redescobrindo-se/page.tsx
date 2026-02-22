import Image from "next/image";
import { Book, Tablet, Headphones, CheckCircle2, Star } from "lucide-react";
import { BenefitsShowcase } from "@/components/landing/benefits-showcase";
import { FAQEntrega } from "@/components/landing/faq-entrega";

export default function RedescobrindoSeLP() {
  const hotmartLink = "https://pay.hotmart.com/H104530181T";

  return (
    <div className="min-h-screen bg-[#F5F3EF] font-sans text-[#6E6E6E]">
      
      {/* 1. HERO - Acolhimento Imediato */}
      <section className="py-20 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <span className="text-[#A8B8A3] uppercase tracking-[0.3em] text-sm font-semibold">
          Lançamento Editorial
        </span>
        <h1 className="mt-6 text-4xl lg:text-6xl font-serif text-[#6E6E6E] leading-[1.1]">
          Redescobrindo-se: Para quem sente que algo <span className="italic">pede cuidado</span>
        </h1>
        <p className="mt-8 text-xl text-[#6E6E6E]/80 leading-relaxed font-light">
          "Você não está sozinha, e o que você sente não é fraqueza. São sinais de que seu mundo interno pede atenção."
        </p>
        <a 
          href={hotmartLink}
          target="_blank"
          className="inline-block mt-10 px-10 py-5 bg-[#8C6A5D] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#A8B8A3] transition-all shadow-lg"
        >
          Quero meu guia por R$ 39,90
        </a>
      </section>

      {/* 2. VITRINE DINÂMICA - Os 3 Formatos */}
      <BenefitsShowcase />

      {/* 3. CONTEÚDO - O que você vai encontrar */}
      <section className="py-24 bg-white/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-serif text-center mb-16 text-[#6E6E6E]">
            Uma jornada por cinco portais de cura
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "O Cansaço que vem de Dentro", d: "Entenda por que o sono não basta para quem carrega o mundo nas costas." },
              { t: "Ansiedade e seus Segredos", d: "Aprenda a ouvir o que seu peito apertado está tentando te dizer." },
              { t: "Reconquistando seu Valor", d: "Um caminho prático para restaurar a autoestima ferida." },
              { t: "Ressignificando sua História", d: "Transforme traumas e padrões em degraus para sua nova versão." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-[#F5F3EF]/50 rounded-2xl border border-[#A8B8A3]/10">
                <CheckCircle2 className="text-[#A8B8A3] shrink-0" />
                <div>
                  <h4 className="font-serif text-lg text-[#6E6E6E]">{item.t}</h4>
                  <p className="text-sm text-[#6E6E6E]/70 mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFERTAS - Foco no Produto Digital */}
      <section id="ofertas" className="py-24 px-6 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 text-[#6E6E6E]">Comece sua jornada hoje:</h2>
          
          <div className="flex justify-center">
            {/* E-book em Destaque */}
            <div className="bg-[#8C6A5D] p-8 lg:p-12 rounded-3xl text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl max-w-md w-full">
              <div className="absolute top-4 right-[-35px] bg-[#A8B8A3] px-10 py-1 rotate-45 text-[10px] font-bold uppercase">
                Acesso Imediato
              </div>
              <Tablet className="w-12 h-12 mb-4 text-[#E8D4CC]" />
              <h3 className="font-serif text-3xl">E-book Digital</h3>
              <p className="text-sm mt-4 mb-8 text-[#F5F3EF]/80">
                O guia completo em formato PDF para ler onde quiser, com o conforto de uma diagramação pensada para o seu bem-estar.
              </p>
              
              <div className="mt-auto w-full">
                <span className="text-sm opacity-60 block mb-1">5x de R$ 8,83*</span>
                <span className="text-5xl font-serif">R$ 39,90</span>
                <a 
                  href={hotmartLink}
                  target="_blank"
                  className="w-full mt-8 block py-4 px-6 bg-[#A8B8A3] text-white rounded-full font-bold uppercase hover:bg-white hover:text-[#8C6A5D] transition-all"
                >
                  Garantir meu acesso
                </a>
                <p className="mt-4 text-[10px] opacity-60 uppercase tracking-widest">
                  Pagamento seguro via Hotmart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOBRE A AUTORA */}
      <section className="py-24 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/mn01.jpg" 
            alt="Monise Ribeiro" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="text-[#A8B8A3] uppercase tracking-widest text-xs font-bold">A voz por trás do guia</span>
          <h2 className="text-4xl font-serif text-[#6E6E6E]">Monise Ribeiro</h2>
          <p className="text-lg leading-relaxed text-[#6E6E6E]/80 font-light">
            Dedicada a tornar o conhecimento psicanalítico acessível, Monise acredita que o autoconhecimento profundo é a única chave para uma vida autêntica. 
          </p>
          <p className="text-lg leading-relaxed text-[#6E6E6E]/80 font-light italic">
            "Este guia nasceu do desejo de compartilhar ferramentas que transformam o peso em leveza, ajudando mulheres a olharem para dentro com coragem e compaixão."
          </p>
        </div>
      </section>

      {/* 6. FAQ - Dúvidas de Entrega */}
      <FAQEntrega />

      {/* FOOTER */}
      <footer className="py-20 border-t border-[#A8B8A3]/10 text-center">
        <p className="font-serif italic text-2xl text-[#6E6E6E]/40">
          "Cuide com carinho da sua vida."
        </p>
        <p className="mt-4 text-[10px] uppercase tracking-widest opacity-40 text-[#6E6E6E]">
          © 2025 Monise Ribeiro • Psicanálise Clínica
        </p>
      </footer>
    </div>
  );
}