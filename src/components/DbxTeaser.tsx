import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Server, Lock, Zap } from 'lucide-react';

export const DbxTeaser = () => {
  return (
    <section id="dbx" className="py-24 bg-[#0B1C3E] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00D4FF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-6">
              Em Breve
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apresentando <br />
              <span className="text-[#00D4FF]">DBX-V2 WEB</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              A próxima geração da nossa plataforma de gestão. Mais rápida, mais intuitiva e totalmente na nuvem. 
              O DBX-V2 WEB centraliza suas operações em um dashboard poderoso.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { icon: <Server size={20} />, text: "Infraestrutura Cloud Nativa" },
                { icon: <Zap size={20} />, text: "Processamento 10x mais rápido" },
                { icon: <Lock size={20} />, text: "Criptografia Ponta-a-Ponta" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <div className="text-[#00D4FF]">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="bg-[#00D4FF] text-[#0B1C3E] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2">
              Entrar na Lista de Espera
              <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-[#0f2550]"
            >
              {/* Mockup Header */}
              <div className="bg-[#08152e] px-4 py-3 flex items-center gap-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="mx-auto text-xs text-slate-500 font-mono">dbx-v2.lypsyos.com</div>
              </div>
              
              {/* Mockup Content */}
              <div className="p-6 grid grid-cols-3 gap-4 opacity-90">
                <div className="col-span-1 bg-[#1a3a6e] h-32 rounded-lg animate-pulse"></div>
                <div className="col-span-2 bg-[#1a3a6e] h-32 rounded-lg"></div>
                <div className="col-span-3 bg-[#1a3a6e] h-48 rounded-lg mt-2"></div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#0B1C3E]/60 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">Preview Restrito</div>
                  <div className="text-[#00D4FF] text-sm font-mono">Acesso antecipado apenas</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
