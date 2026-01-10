import { HeroWineBar } from "@/components/hero-wine-bar";
import { BrandIntro } from "@/components/home/brand-intro";
import { SobreEmporio } from "@/components/home/sobre-emporio";
import { ParallaxSection } from "@/components/layout/parallax-section";
import { BannerMendozaTeaser } from "@/components/home/banner-mendoza-teaser";
import { PhotoGallery } from "@/components/photo-gallery";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { WhatsAppCtaSection } from "@/components/whatsapp-cta-section";
import { WhatsAppFloating } from "@/components/whatsapp-floating";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Principal */}
      <HeroWineBar />
      
      {/* Brand Intro (Respiro entre hero e parallax) */}
      <BrandIntro />
      
      {/* Parallax: Tradição */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940"
        title="Uma tradição construída com"
        highlight="20 anos de profissionalismo"
        subtitle="em bons vinhos"
        darkOverlay
      />
      
      {/* Sobre o Empório */}
      <SobreEmporio />
      
      {/* Banner Urgente Mendoza */}
      <BannerMendozaTeaser />
      
      {/* Parallax: Experiências */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1533052472566-487661858a47?q=80&w=1000"
        title="Do Rio Grande do Sul"
        highlight="à Argentina"
        subtitle="Experiências que transformam momentos em memórias"
        goldHighlight
      />
      
      {/* Galeria RS (Preview - 6 fotos) */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            Rio Grande do Sul • 2025
          </h2>
          <p className="text-lg text-wood/70 max-w-2xl mx-auto">
            Um grupo apaixonado por vinho, dias inesquecíveis, memórias eternas.
          </p>
        </div>
        <PhotoGallery />
      </section>
      
      {/* Depoimentos */}
      <section className="py-24 bg-wine/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-wine mb-6">
            Alguns Depoimentos
          </h2>
        </div>
        <TestimonialCarousel />
      </section>
      
      {/* CTA Final */}
      <WhatsAppCtaSection />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Flutuante */}
      <WhatsAppFloating />
    </main>
  );
}