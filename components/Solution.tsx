
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BellRing, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';

const Solution: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 scroll-mt-20" id="solution">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Our Solution</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight">How PrevaStep helps</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <LineChart className="w-8 h-8" />,
              title: "Predict",
              text: "PrevaStep monitors movement patterns to detect early signs of imbalance before a fall happens."
            },
            {
              icon: <BellRing className="w-8 h-8" />,
              title: "Alert",
              text: "If a risk is detected, caregivers receive instant alerts so they can respond quickly."
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Protect",
              text: "By acting early, PrevaStep helps reduce injuries and gives families peace of mind."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 dark:text-white">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20 bg-white dark:bg-slate-800 p-12 lg:p-20 rounded-[4rem] border border-slate-100 dark:border-slate-700 shadow-2xl">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Intelligent Mobility Monitoring</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
              We focus on prevention by analyzing microscopic changes in walking style that indicate an increasing fall risk, providing a critical window for intervention.
            </p>
            <ul className="space-y-4">
              {['Continuous 24/7 analysis', 'Personalized baseline profiles', 'Encrypted data security'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              alt="Health Analytics Dashboard" 
              className="rounded-3xl shadow-2xl w-full h-auto border border-slate-200 dark:border-slate-600" 
              src={IMAGES.DASHBOARD}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
