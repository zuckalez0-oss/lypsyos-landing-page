import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap, Layers, Database } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E0F7FF] to-transparent -z-10 rounded-bl-[100px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#F0F4F8] to-transparent -z-10 rounded-tr-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F7FF] text-[#0B1C3E] text-xs font-bold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
            INOVAÇÃO EM AUTOMAÇÃO
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-[#0B1C3E]">
            Otimize seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1C3E] to-[#00D4FF]">
              Fluxo de Trabalho
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Desenvolvemos soluções inteligentes para automatização de processos. 
            Transforme a complexidade em eficiência com a tecnologia Lypsyos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-[#0B1C3E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00D4FF] hover:text-[#0B1C3E] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-blue-900/10">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-[#0B1C3E] border border-slate-200 hover:border-[#0B1C3E] transition-all flex items-center justify-center">
              Conheça o DBX-V2
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
              <span>Automação Inteligente</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
              <span>Suporte Dedicado</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract Tech Visualization */}
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">lypsyos-core-v2.0</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-[#E0F7FF] flex items-center justify-center text-[#00D4FF]">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1C3E]">Processo Iniciado</div>
                  <div className="text-xs text-slate-500">Automação de entrada de dados</div>
                </div>
                <div className="ml-auto text-xs font-mono text-green-600 bg-green-100 px-2 py-1 rounded">Active</div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-[#E0F7FF] flex items-center justify-center text-[#00D4FF]">
                  <Layers size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1C3E]">Análise de Fluxo</div>
                  <div className="text-xs text-slate-500">Otimização em tempo real</div>
                </div>
                <div className="ml-auto text-xs font-mono text-[#00D4FF] bg-blue-50 px-2 py-1 rounded">Processing</div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-100 opacity-60">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                  <Database size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400">Sincronização DBX</div>
                  <div className="text-xs text-slate-400">Aguardando conclusão</div>
                </div>
                <div className="ml-auto text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">Pending</div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 -bottom-8 bg-[#0B1C3E] text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="text-3xl font-bold text-[#00D4FF] mb-1">+45%</div>
              <div className="text-sm opacity-80">Aumento de produtividade média</div>
            </motion.div>
          </div>
          
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00D4FF] opacity-10 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
