import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Workflow, ShieldCheck, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Fluxos Automatizados",
    description: "Crie sequências de tarefas complexas que rodam sozinhas, liberando sua equipe para o que realmente importa."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Integração Inteligente",
    description: "Conecte suas ferramentas favoritas em um único ecossistema coeso e eficiente."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics em Tempo Real",
    description: "Acompanhe métricas de performance e identifique gargalos instantaneamente."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Segurança Enterprise",
    description: "Seus dados protegidos com os mais altos padrões de criptografia e conformidade."
  }
];

export const Features = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3E] mb-4">Soluções que Impulsionam</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nossa tecnologia foi desenhada para escalar com o seu negócio, oferecendo robustez e flexibilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-[#E0F7FF] group"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#0B1C3E] mb-6 group-hover:bg-[#0B1C3E] group-hover:text-[#00D4FF] transition-colors shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1C3E] mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
