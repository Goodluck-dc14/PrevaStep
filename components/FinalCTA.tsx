
import React from 'react';
import { motion } from 'framer-motion';
import { WAITLIST_URL } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" id="waitlist">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-[4rem] p-12 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-none border border-slate-100 dark:border-slate-800 text-center"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-primary font-bold mb-8">
              <Sparkles className="w-6 h-6" />
              <span>Step into a safer future</span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
              Help us make aging safer.
            </h3>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We are building PrevaStep for families who want peace of mind and for elderly people who deserve to live safely and independently.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary hover:bg-primary-dark text-white px-16 py-6 rounded-full text-2xl font-bold transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3"
              >
                Join the waitlist
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
