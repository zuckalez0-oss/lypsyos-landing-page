import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-8 mb-6" />
            <p className="text-slate-500 max-w-sm mb-6">
              Transformando empresas através da automação inteligente. 
              Simplifique processos, otimize recursos e foque no crescimento.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#0B1C3E] mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">DBX-V2 WEB</a></li>
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Preços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0B1C3E] mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>&copy; {new Date().getFullYear()} Lypsyos. Todos os direitos reservados.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#0B1C3E]">Privacidade</a>
            <a href="#" className="hover:text-[#0B1C3E]">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
