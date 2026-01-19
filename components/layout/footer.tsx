"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Instagram, Clock, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#6E6E6E] text-[#F5F3EF] border-t border-[#A8B8A3]/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Logo integrada com filtro para visibilidade no fundo escuro */}
              <Image
                src="/images/logo.png"
                alt="Monise Ribeiro Psicanalista"
                width={180}
                height={54}
                className="h-10 lg:h-12 w-auto object-contain brightness-0 invert opacity-90"
                priority
              />
            </div>
            <p className="text-[#F5F3EF]/70 leading-relaxed mb-6 max-w-md">
              Acolhimento psicanalítico online para mulheres que buscam um espaço seguro de escuta, 
              respeito e profundidade emocional para olhar para si com mais consciência e verdade [cite: 6-7, 68-69].
            </p>
            
            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/moni_riibeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F5F3EF]/10 hover:bg-[#A8B8A3] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5519982129344"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F5F3EF]/10 hover:bg-[#A8B8A3] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Atendimento */}
          <div>
            <h3 className="text-sm font-bold text-[#A8B8A3] mb-6 uppercase tracking-widest">
              Atendimento
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-[#F5F3EF]/80 group">
                <Globe className="w-5 h-5 text-[#A8B8A3] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Modalidade Online<br />
                  Acolhimento em qualquer lugar,<br />
                  no conforto do seu espaço[cite: 46, 108].
                </span>
              </div>

              <a
                href="tel:+5519982129344"
                className="flex items-center gap-3 text-[#F5F3EF]/80 hover:text-[#A8B8A3] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#A8B8A3] flex-shrink-0" />
                <span className="text-sm">(19) 98212-9344</span>
              </a>

              <a
                href="mailto:contato@moniseribeiro.com.br"
                className="flex items-center gap-3 text-[#F5F3EF]/80 hover:text-[#A8B8A3] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#A8B8A3] flex-shrink-0" />
                <span className="text-sm break-all">contato@moniseribeiro.com.br</span>
              </a>
            </div>
          </div>

          {/* Coluna 3: Sessões */}
          <div>
            <h3 className="text-sm font-bold text-[#A8B8A3] mb-6 uppercase tracking-widest">
              Sessões
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#A8B8A3] flex-shrink-0 mt-1" />
              <div className="text-sm text-[#F5F3EF]/80 space-y-2">
                <p>
                  <strong className="text-[#F5F3EF]">Horários Flexíveis</strong><br />
                  Mediante agendamento prévio.
                </p>
                <p className="text-[#F5F3EF]/60 text-xs mt-3 italic">
                  "O cuidado acontece no seu ritmo, respeitando sua história e seus limites"[cite: 40, 102].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5F3EF]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#F5F3EF]/60">
            <p>
              © {new Date().getFullYear()} Monise Ribeiro. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/politica-privacidade" 
                className="hover:text-[#A8B8A3] transition-colors"
              >
                Privacidade
              </Link>
              <Link 
                href="/termos-uso" 
                className="hover:text-[#A8B8A3] transition-colors"
              >
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}