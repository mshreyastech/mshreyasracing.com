import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import smLogo from '@/assets/sm-logo.jpg';

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
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Corner */}
          <a href="#home" className="flex items-center">
            <img src={smLogo} alt="SM Logo" className="h-24 w-24 rounded-full object-cover border-2 border-zinc-800 bg-black" />
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
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
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
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-lg text-foreground hover:text-primary transition-colors uppercase">
                  {link.label}
                </a>)}
              <Button asChild variant="default" className="bg-gradient-racing hover:opacity-90 font-heading uppercase mt-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</a>
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};