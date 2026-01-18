import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';

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
    <div className="relative overflow-hidden">
      {/* Checkered flag borders */}
      <div className="absolute inset-x-0 top-0 h-2 flex">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={`top-${i}`} 
            className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2 flex">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={`bottom-${i}`} 
            className={`flex-1 h-full ${i % 2 === 1 ? 'bg-white' : 'bg-black'}`}
          />
        ))}
      </div>
      
      {/* Main track surface */}
      <div className={`py-6 ${isPrimary ? 'bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900' : 'bg-zinc-900'}`}>
        {/* Racing stripes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/30" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] mt-2 bg-racing-red/50" style={{ boxShadow: '0 0 10px rgba(255,0,0,0.5)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] -mt-2 bg-racing-blue/50" style={{ boxShadow: '0 0 10px rgba(0,100,255,0.5)' }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex animate-marquee relative z-10"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className={`font-heading text-lg md:text-xl uppercase tracking-[0.2em] whitespace-nowrap px-6 font-bold ${
                isPrimary ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'text-white/80'
              }`}>
                {item}
              </span>
              <Flag className="h-4 w-4 text-racing-red fill-racing-red animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
