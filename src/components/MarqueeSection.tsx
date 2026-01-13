import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const marqueeItems = [
  "BORN TO RACE",
  "BUILT TO WIN",
  "NEVER GIVE UP",
  "STAY FOCUSED",
  "CHASE YOUR DREAMS",
  "BELIEVE IN YOURSELF",
];

export const MarqueeSection = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className={`overflow-hidden py-4 ${isPrimary ? 'bg-gradient-racing' : 'bg-card border-y border-border'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex animate-marquee"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className={`font-heading text-lg md:text-xl uppercase tracking-wider whitespace-nowrap px-4 ${
              isPrimary ? 'text-primary-foreground' : 'text-muted-foreground'
            }`}>
              {item}
            </span>
            <ChevronRight className={`h-5 w-5 ${isPrimary ? 'text-primary-foreground/70' : 'text-muted-foreground/50'}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
