import React from 'react';
import { Moon, Sun, Footprints } from 'lucide-react';
import { WAITLIST_URL } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Footprints className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">PrevaStep</span>
        </button>
        
        <div className="hidden md:flex items-center gap-10 font-medium text-slate-600 dark:text-slate-300">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('who-it-is-for')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Who it's for
          </button>
          <button 
            onClick={() => scrollToSection('why-prevastep')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Why PrevaStep
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            className="hidden sm:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/20" 
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;