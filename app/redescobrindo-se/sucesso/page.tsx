// app/redescobrindo-se/sucesso/page.tsx

import { Playfair_Display } from "next/font/google";
import { CheckCircle, Download, Mail, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SucessoCompra() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-white rounded-[2rem] p-8 lg:p-12 shadow-soft border border-[#A8B8A3]/10 text-center">
        
        {/* Ícone de Sucesso em Sálvia */}
        <div className="w-20 h-20 bg-[#A8B8A3]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-[#A8B8A3]" />
        </div>

        <h1 className="text-3xl lg:text-4xl font-serif text-[#6E6E6E] mb-4">
          Sua jornada começou.
        </h1>
        <p className="text-[#6E6E6E]/80 text-lg mb-10 font-light">
          Obrigada por confiar no seu processo de cuidado. Recebemos seu pedido e preparamos tudo com carinho.
        </p>

        {/* Resumo da Entrega Baseado nos Produtos */}
        <div className="grid gap-4 text-left mb-10">
          <div className="flex gap-4 p-4 bg-[#F5F3EF] rounded-2xl border border-[#A8B8A3]/10">
            <Mail className="w-6 h-6 text-[#8C6A5D] shrink-0" />
            <div>
              <h4 className="font-semibold text-[#6E6E6E]">E-mail de confirmação enviado</h4>
              <p className="text-sm text-[#6E6E6E]/70">Verifique sua caixa de entrada (e a pasta de spam) para os detalhes de acesso.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-[#F5F3EF] rounded-2xl border border-[#A8B8A3]/10">
            <Download className="w-6 h-6 text-[#8C6A5D] shrink-0" />
            <div>
              <h4 className="font-semibold text-[#6E6E6E]">Acesso Digital</h4>
              <p className="text-sm text-[#6E6E6E]/70">O link para download do E-book e Audiobook já está disponível em seu e-mail.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-[#F5F3EF] rounded-2xl border border-[#A8B8A3]/10">
            <Truck className="w-6 h-6 text-[#8C6A5D] shrink-0" />
            <div>
              <h4 className="font-semibold text-[#6E6E6E]">Envio do Livro Físico</h4>
              <p className="text-sm text-[#6E6E6E]/70">Prepararemos sua edição para envio via Correios em até 48h úteis.</p>
            </div>
          </div>
        </div>

        {/* Ação Principal */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#8C6A5D] font-bold uppercase tracking-wider hover:gap-4 transition-all"
        >
          Voltar para o site principal <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <p className="mt-12 font-serif italic text-xl text-[#6E6E6E]/40">
        "Cuide com carinho da sua vida."
      </p>
    </div>
  );
}