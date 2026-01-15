
import React from 'react';
import { User, Accessibility, Heart, Building2 } from 'lucide-react';

const Audience: React.FC = () => {
  const targets = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Elderly Individuals",
      text: "Living independently with confidence."
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: "Mobility Challenges",
      text: "People with balance or walking difficulties."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Members",
      text: "Caring for aging parents with peace of mind."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Caregivers",
      text: "And professional assisted living communities."
    }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 scroll-mt-20" id="who-it-is-for">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Target Users</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">Who PrevaStep is built for</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 text-center transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                {item.icon}
              </div>
              <h5 className="font-bold text-xl mb-3 dark:text-white">{item.title}</h5>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
