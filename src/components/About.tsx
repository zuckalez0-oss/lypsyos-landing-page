import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E0F7FF] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0B1C3E] text-[#00D4FF] mb-6">
            <Quote size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-[#00D4FF] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100"
        >
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Após mais de 5 anos atuando como desenhista técnico, percebi que o tempo gasto projetando peças simples e repetitivas era um grande obstáculo para a produtividade da indústria. Processos que deveriam ser rápidos consumiam em média 30 minutos de trabalho braçal.
            </p>
            
            <p>
              Para transformar essa realidade, criei o <span className="font-bold text-[#0B1C3E]">DBX-V2</span>, uma automação focada em otimizar os fluxos de desenho e orçamento, gerando uma economia de tempo de mais de 40%.
            </p>
            
            <div className="pt-4 border-l-4 border-[#00D4FF] pl-6 italic text-slate-700 font-medium bg-slate-50 py-4 rounded-r-lg">
              "Esse é o DNA da Lypsyos: olhar para os problemas operacionais com vontade de resolver e ter a empatia necessária para simplificar o trabalho do próximo."
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
