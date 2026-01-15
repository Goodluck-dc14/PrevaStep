
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, FlaskConical, Target } from 'lucide-react';

const Progress: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500 scroll-mt-20" id="progress">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Momentum</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">Our progress so far</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10">
              PrevaStep has been validated through personal experience, early user conversations, and technical research. We currently have early users on our waitlist and are actively building our IoT MVP.
            </p>
            
            <div className="inline-flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Upcoming Milestone</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">Pilot Launch: Q2 2026</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              {
                icon: <FlaskConical className="w-6 h-6" />,
                title: "Validated Tech",
                desc: "Research-backed movement analysis."
              },
              {
                icon: <Users className="growing-users w-6 h-6" />,
                title: "Growing Community",
                desc: "Active early-access interest."
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Testing Roadmap",
                desc: "Defined pilot phases for 2026."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "IoT MVP",
                desc: "Hardware development in progress."
              }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800"
              >
                <div className="text-primary mb-4">{stat.icon}</div>
                <h4 className="text-lg font-bold dark:text-white mb-2">{stat.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
