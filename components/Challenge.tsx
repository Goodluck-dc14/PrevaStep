
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Activity } from 'lucide-react';

const Challenge: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500" id="problem">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">The Risk</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">Falls are one of the biggest risks for elderly people.</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            For many elderly people, a simple daily activity like walking to the bathroom can turn dangerous. Falls often happen suddenly, without warning, and can lead to serious injuries, long hospital stays, or even death.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800"
          >
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold mb-4 dark:text-white">Invisible Danger</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Caregivers and family members can’t always be present, and most help only comes after the fall has already happened.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800"
          >
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold mb-4 dark:text-white">Lasting Impact</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A single fall often results in a loss of confidence and independence, creating a cycle of fear and muscle decline.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
