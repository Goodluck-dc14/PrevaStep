import React from 'react';
import { Footprints, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-16 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Footprints className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">PrevaStep</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs">
              Preventing falls. Protecting lives.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a 
              href="mailto:goodlucksamson520@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-400 dark:text-slate-500">
          <p>© 2026 PrevaStep Healthcare Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;