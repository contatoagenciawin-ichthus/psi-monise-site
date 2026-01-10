import { ParallaxGalleryRS } from "@/components/parallax-gallery-rs";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { WhatsAppCtaSection } from "@/components/whatsapp-cta-section";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function RioGrandeDoSulPage() {
  return (
    <main className="min-h-screen">
      {/* Hero da Galeria */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-wine">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/galeria/rs/rs8.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wine via-wine/80 to-wine" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-2 border border-gold/50 rounded-full text-xs uppercase tracking-widest text-gold mb-6">
            Outubro 2025
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-cream font-serif leading-tight mb-6">
            Rio Grande do Sul
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 font-light mb-4">
            Um grupo apaixonado por vinho
          </p>
          <p className="text-lg text-cream/70">
            Dias inesquecíveis, memórias eternas
          </p>
        </div>
      </section>

      {/* Parallax Gallery (Scroll Travado Premium) */}
      <ParallaxGalleryRS />

      {/* Depoimentos Específicos */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            Experiências que transformam
          </h2>
          <p className="text-lg text-wood/70 max-w-2xl mx-auto">
            Veja o que nossos viajantes viveram no Rio Grande do Sul
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA Próxima Viagem */}
      <section className="py-24 bg-gradient-to-b from-cream to-wine/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-2 border border-wine/20 rounded-full text-xs uppercase tracking-widest text-wine/70 mb-6 bg-white/50">
            Próxima Experiência
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6 leading-tight">
            A próxima é ainda maior:
            <br />
            <span className="italic text-gold">Mendoza, Argentina</span>
          </h2>
          
          <p className="text-lg text-wood/70 mb-8 leading-relaxed">
            Se você gostou do que viu aqui, imagine viver 5 dias nas vinícolas mais exclusivas 
            aos pés da Cordilheira dos Andes.
          </p>
          
          <a
            href="/mendoza"
            className="inline-flex items-center gap-3 px-8 py-4 bg-wine text-cream rounded-xl font-bold uppercase tracking-wider hover:bg-wine-light hover:scale-105 transition-all duration-300 shadow-strong"
          >
            Ver Roteiro de Mendoza
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <WhatsAppCtaSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Flutuante */}
      <WhatsAppFloating />
    </main>
  );
}