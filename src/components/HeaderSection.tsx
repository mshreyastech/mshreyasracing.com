import { motion } from 'framer-motion';
import logo from '@/assets/logo.jpeg';
import racing1 from '@/assets/racing1.jpeg';
import racing2 from '@/assets/racing2.jpeg';
import racing3 from '@/assets/racing3.jpeg';
import racing4 from '@/assets/racing4.jpeg';
import racing5 from '@/assets/racing5.jpeg';

const photos = [racing1, racing2, racing3, racing4, racing5, racing1, racing2, racing3];

export const HeaderSection = () => {
  return (
    <section className="relative pt-24 pb-8 bg-gradient-to-b from-background via-background to-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo and India Flag */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <img 
              src={logo} 
              alt="SM Racing Logo" 
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-primary glow-primary"
            />
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-medium text-foreground uppercase tracking-wider">
                Representing India Globally
              </span>
            </div>
          </motion.div>

          {/* Horizontal Photo Scroll */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 overflow-hidden"
          >
            <div className="relative">
              <div className="flex gap-4 animate-photo-scroll">
                {photos.map((photo, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-32 h-20 md:w-48 md:h-28 rounded-lg overflow-hidden border border-border"
                  >
                    <img 
                      src={photo} 
                      alt={`Racing moment ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};