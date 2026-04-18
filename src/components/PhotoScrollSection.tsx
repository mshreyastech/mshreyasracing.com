import { motion } from 'framer-motion';
import racing1 from '@/assets/racing1.jpeg';
import racing2 from '@/assets/racing2.jpeg';
import racing3 from '@/assets/racing3.jpeg';
import racing4 from '@/assets/racing4.jpeg';
import racing5 from '@/assets/racing5.jpeg';
import racing6 from '@/assets/racing6.jpg';

const photos = [racing1, racing2, racing3, racing4, racing5, racing1, racing2, racing3, racing4, racing5, racing6];

export const PhotoScrollSection = () => {
  return (
    <section className="py-4 bg-card/50 border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        <div className="flex gap-4 animate-photo-scroll">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 md:w-56 md:h-32 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
            >
              <img
                src={photo}
                alt={`Racing moment ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};
