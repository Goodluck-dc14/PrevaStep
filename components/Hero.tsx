
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { WAITLIST_URL, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          alt="Elderly person walking confidently" 
          className="w-full h-full object-cover object-center lg:object-[center_30%]" 
          src={IMAGES.HERO_MAN}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-slate-900 dark:via-slate-900/90 lg:dark:via-slate-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-8 border border-primary/20">
              <ShieldCheck className="w-4 h-4" />
              Revolutionizing Elderly Safety
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tight">
              Preventing falls <br/>
              <span className="text-primary italic relative">
                before
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span> they happen.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-2xl font-light">
              PrevaStep is a smart wearable that helps elderly and mobility-impaired people stay safe by detecting early signs of instability and alerting caregivers in real time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3" 
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the waitlist
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
