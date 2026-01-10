import { HeroMendoza } from "@/components/hero-mendoza";
import { ParallaxSection } from "@/components/layout/parallax-section";
import { RoteiroAccordion } from "@/components/mendoza/roteiro-accordion";
import { OQueInclui } from "@/components/mendoza/o-que-inclui";
import { PhotoGallery } from "@/components/photo-gallery";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Investimento } from "@/components/mendoza/investimento";
import { FAQMendoza } from "@/components/mendoza/faq-mendoza";
import { WhatsAppCtaSection } from "@/components/whatsapp-cta-section";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function MendozaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero com Countdown */}
      <HeroMendoza />
      
      {/* Parallax: 5 dias, 7 vinícolas */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1533052472566-487661858a47?q=80&w=1000"
        title="5 dias. 7 vinícolas."
        highlight="Memórias para sempre."
        subtitle="Uma jornada completa pelos melhores vinhos de Mendoza"
        darkOverlay
      />
      
      {/* Roteiro Completo (Accordion) */}
      <RoteiroAccordion />
      
      {/* O que está Incluso */}
      <OQueInclui />
      
      {/* Parallax: Cordilheira dos Andes */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?q=80&w=1000"
        title="Aos pés da"
        highlight="Cordilheira dos Andes"
        subtitle="Altitude, terroir e vinhos únicos no mundo"
        goldHighlight
      />
      
      {/* Prova Social: Galeria RS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="inline-block px-4 py-2 border border-wine/20 rounded-full text-xs uppercase tracking-widest text-wine/70 mb-6 bg-white/50">
            Prova Social
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            Quem foi ao Rio Grande do Sul
            <br />
            <span className="italic text-gold">não esqueceu</span>
          </h2>
          <p className="text-lg text-wood/70 max-w-2xl mx-auto">
            Veja como foi nossa última experiência e imagine-se na próxima
          </p>
        </div>
        <PhotoGallery />
      </section>
      
      {/* Depoimentos */}
      <section className="py-24 bg-wine/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            O que nossos viajantes dizem
          </h2>
          <p className="text-lg text-wood/70">
            Experiências reais de quem viveu momentos inesquecíveis
          </p>
        </div>
        <TestimonialCarousel />
      </section>
      
      {/* Investimento */}
      <Investimento />
      
      {/* FAQ */}
      <FAQMendoza />
      
      {/* CTA Final */}
      <WhatsAppCtaSection />
            
      {/* WhatsApp Flutuante */}
      <WhatsAppFloating />
    </main>
  );
}