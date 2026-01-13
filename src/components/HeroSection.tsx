import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import shreyasHero from '@/assets/shreyas-hero.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
          <img
            src={shreyasHero}
            alt="Shreyas Meenakshisundar"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-[1px] h-24 bg-border" />
        <div className="w-2 h-2 rounded-full bg-muted" />
        <div className="w-[1px] h-24 bg-border" />
        <div className="w-2 h-2 rounded-full bg-muted" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              RACE CAR DRIVER • CHENNAI, INDIA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6"
          >
            <span className="text-foreground">SHREYAS</span>
            <br />
            <span className="text-gradient-racing">MEENAKSHI</span>
            <br />
            <span className="text-foreground">SUNDAR</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg font-body"
          >
            A promising young racing talent from Chennai, whose passion for motorsport 
            ignited at age five. Competing in MRF MMSC FMSCI Indian National Car Racing 
            Championship with a vision to reach Formula 1.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-gradient-racing hover:opacity-90 font-heading uppercase tracking-wider group">
              <a href="#about">
                Explore My Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:border-primary hover:bg-primary/5 font-heading uppercase tracking-wider">
              <a href="#achievements">View Achievements</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 mt-12"
          >
            <a 
              href="mailto:mshreyas2009@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm hidden sm:inline">mshreyas2009@gmail.com</span>
            </a>
            <a 
              href="tel:+918754427475" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm hidden sm:inline">+91 8754427475</span>
            </a>
            <a 
              href="https://instagram.com/m_shreyas09" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span className="text-sm hidden sm:inline">@m_shreyas09</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-t border-border z-20"
      >
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">16</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Old</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">9+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Career Races</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">700+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Laps Completed</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Hours on Track</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
