import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Heart } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            <div className="flex items-center mb-2">
              <img src="/sm-logo.jpg" alt="SM Logo" className="h-24 w-24 rounded-full object-cover border-0 bg-transparent" />
            </div>
            
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="flex justify-center gap-6">
            {['Home', 'About', 'Achievements', 'Vision', 'Contact'].map(link => <a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-heading uppercase text-sm tracking-wider">
                {link}
              </a>)}
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="flex justify-end gap-4">
            <a href="mailto:mshreyas2009@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+918220070938" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/m_shreyas09" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p className="font-body">
            © {currentYear} Shreyas Meenakshisundar. All rights reserved.
          </p>
          <p className="font-body flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary" /> for Indian Motorsport
          </p>
        </div>
      </div>
    </footer>;
};