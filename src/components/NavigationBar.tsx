import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
interface NavigationBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
export function NavigationBar({ currentPage, onNavigate }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
  {
    id: 'proposal',
    label: 'Proposal Overview'
  },
  {
    id: 'founder',
    label: "Founder's Message"
  },
  {
    id: 'gallery',
    label: 'Course Comparison'
  },
  {
    id: 'petition',
    label: 'Petition of Interest'
  }];

  const currentLabel =
  navItems.find((item) => item.id === currentPage)?.label || 'Menu';
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-forest/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('proposal')}>
          
          <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gold group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-heading text-xl font-bold text-white tracking-wide">
            GCSAA <span className="text-gold font-normal italic">Africa</span>
          </span>
        </div>

        {/* Desktop Dropdown */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-body font-medium transition-all">
            
            {currentLabel}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            
          </button>

          <AnimatePresence>
            {isOpen &&
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.95
              }}
              transition={{
                duration: 0.2
              }}
              className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-sage/20 overflow-hidden py-2">
              
                {navItems.map((item) =>
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-6 py-3 font-body text-sm transition-colors ${currentPage === item.id ? 'bg-forest/5 text-forest font-bold border-l-2 border-gold' : 'text-darkText/80 hover:bg-cream hover:text-forest border-l-2 border-transparent'}`}>
                
                    {item.label}
                  </button>
              )}
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}>
          
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-forest border-t border-white/10 overflow-hidden">
          
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) =>
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-body text-base transition-colors ${currentPage === item.id ? 'bg-gold/20 text-gold font-bold' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
              
                  {item.label}
                </button>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}