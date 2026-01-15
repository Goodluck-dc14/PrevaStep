import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Watch, Activity, Zap, EyeOff } from 'lucide-react';
import { IMAGES } from '../constants';

const Design: React.FC = () => {
  const steps = [
    {
      icon: <Watch className="w-6 h-6" />,
      text: "A lightweight wearable worn on the wrist or ankle"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      text: "Sensors track movement and walking patterns"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Smart analysis detects unusual or risky motion"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Alerts are sent when help may be needed"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 scroll-mt-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Designed for everyday life</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">Quiet protection that works in the background, keeping privacy at the center of everything we do.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-800 text-primary rounded-xl flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
                <p className="text-xl font-medium text-slate-800 dark:text-slate-200">{step.text}</p>
              </motion.div>
            ))}

            <div className="mt-12 p-8 bg-primary/5 dark:bg-primary/10 rounded-[2rem] border border-primary/20 flex items-start gap-4">
              <EyeOff className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-slate-900 dark:text-white font-bold mb-1">Privacy First Approach</p>
                <p className="text-slate-600 dark:text-slate-400">No cameras. No constant supervision. Just quiet protection in the background.</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative overflow-hidden group rounded-[3rem] shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
              <img 
                alt="Discrete Design Wearable" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95" 
                src={IMAGES.WEARABLE}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000"; // Reliable fallback
                }}
              />
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
                Lightweight & Discrete
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;