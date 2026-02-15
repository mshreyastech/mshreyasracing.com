import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import smLogo from '@/assets/sm-logo.png';

const navLinks = [{
  href: '#home',
  label: 'Home'
}, {
  href: '#about',
  label: 'About'
}, {
  href: '#achievements',
  label: 'Achievements'
}, {
  href: '#gallery',
  label: 'Gallery'
}, {
  href: '#vision',
  label: 'Vision'
}, {
  href: '#contact',
  label: 'Contact'
}];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#000000] ${isScrolled ? 'backdrop-blur-md border-b border-border' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Corner */}
          <a href="#home" className="flex items-center">
            <img src={smLogo} alt="SM Logo" className="h-20 w-20 object-contain" />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map(link => <a key={link.href} href={link.href} className="font-heading text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                {link.label}
              </a>)}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-gradient-racing hover:opacity-90 font-heading uppercase tracking-wider">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            onTouchEnd={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden p-3 text-foreground touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-card border-b border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector(link.href);
                    if (element) {
                      const navHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="font-heading text-lg text-foreground hover:text-primary transition-colors uppercase py-2 touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild variant="default" className="bg-gradient-racing hover:opacity-90 font-heading uppercase mt-4">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector('#contact');
                    if (element) {
                      const navHeight = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};