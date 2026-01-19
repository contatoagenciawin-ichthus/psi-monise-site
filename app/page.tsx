import { HeroTherapy } from "@/components/HeroTherapy";
import { EmotionalWelcome } from "@/components/home/EmotionalWelcome";
import { SobreMonise } from "@/components/home/SobreMonise";
import { PhilosophicalQuote } from "@/components/layout/PhilosophicalQuote";
import { OnlineBenefits } from "@/components/home/OnlineBenefits";
import { ProcessoAcolhimento } from "@/components/home/ProcessoAcolhimento";
import { AcolhimentoSocial } from "@/components/AcolhimentoSocial";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EF]">
      {/* 1. Impacto Inicial e Acolhimento */}
      <HeroTherapy />
      
      {/* 2. Validação das Dores (Empatia) */}
      <EmotionalWelcome />
      
      {/* 3. Citação Filosófica (Respiro Visual) */}
      <PhilosophicalQuote
        imageUrl="https://images.unsplash.com/photo-1516307361728-422c5d9a8b72?q=80&w=2940"
        title="Crescer emocionalmente é aceitar que"
        highlight="sentir não nos enfraquece..."
        subtitle="ao contrário, é quando damos lugar ao afeto que a mente encontra descanso."
        darkOverlay
      />
      
      {/* 4. Autoridade e Biografia */}
      <SobreMonise />
      
      {/* 5. Como Funciona (O novo componente FAQ/Accordion) */}
      <ProcessoAcolhimento />

      {/* 6. Benefícios do Formato Online */}
      <OnlineBenefits />
      
      {/* 7. Galeria de Atmosfera (Imagens Introspectivas) */}
    
      
      {/* 8. Prova Social e Relatos */}
      <AcolhimentoSocial />
      
      {/* 9. Convite Final ao Cuidado */}
      <FinalCtaSection />
            
      {/* 10. Suporte Flutuante */}
      <WhatsAppFloating />
    </main>
  );
}