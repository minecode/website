import { useState, useEffect } from 'react';
import { Briefcase, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Logo } from '../../imports/Logo';

export function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '0px',
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 'services', icon: Briefcase, label: 'Services' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sidebar - Fixed Left */}
      <motion.aside
        className="hidden lg:flex fixed top-0 left-0 h-screen w-64 bg-black/50 backdrop-blur-md border-r border-white/5 z-50 flex-col"
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo Section */}
        <div className="cursor-pointer flex items-center justify-center py-10 border-b border-white/5">
          <motion.button
            onClick={() => scrollToSection('hero')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Logo size={120} />
          </motion.button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 flex flex-col justify-center px-6 space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer group relative flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-[#98ef3c]'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#98ef3c] rounded-r-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="p-6 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-[#98ef3c] hover:bg-[#88df2c] text-black font-semibold py-3 shadow-lg shadow-[#98ef3c]/10"
          >
            Contact
          </Button>
        </motion.div>
      </motion.aside>

      {/* Mobile Header - Top */}
      <motion.header
        className="lg:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#98ef3c]/20 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo size={50} />

            {/* Mobile Navigation */}
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      isActive ? 'text-[#98ef3c]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </motion.header>
    </>
  );
}
