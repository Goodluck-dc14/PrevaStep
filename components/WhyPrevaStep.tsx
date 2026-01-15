
import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Globe } from 'lucide-react';

const WhyPrevaStep: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Prevention Focus",
      text: "We don't just detect falls; we focus on preventing them before they happen."
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Caregiver Centric",
      text: "Designed with real caregivers and families in mind for maximum effectiveness."
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Truly Discreet",
      text: "Comfortable and easy to wear under clothing without the stigma of traditional devices."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Built for Global Use",
      text: "Designed to work reliably across the world, including in low-resource settings."
    }
  ];

  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative scroll-mt-20" id="why-prevastep">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="100" cy="0" r="50" fill="white" />
          <circle cx="0" cy="100" r="30" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="font-bold uppercase tracking-widest text-sm mb-6 text-white/70">Our Edge</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Why PrevaStep stands out</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {benefits.map((item, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/80 text-lg leading-relaxed font-light">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPrevaStep;
