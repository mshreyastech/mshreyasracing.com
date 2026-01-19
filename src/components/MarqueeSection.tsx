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
      {/* Red/White Racing Kerb - Top */}
      <div className="h-3 flex">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={`kerb-top-${i}`} 
            className={`flex-1 h-full ${i % 2 === 0 ? 'bg-primary' : 'bg-white'}`}
          />
        ))}
      </div>
      
      {/* Main Track Surface */}
      <div className={`py-8 relative ${isPrimary ? 'bg-zinc-900' : 'bg-zinc-950'}`}>
        {/* Asphalt texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        {/* Track lane markings */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
          {/* Top lane line - dashed */}
          <div className="absolute top-3 left-0 right-0 flex gap-4">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={`dash-top-${i}`}
                className="h-0.5 w-8 bg-white/40"
              />
            ))}
          </div>
          
          {/* Center racing line - red glow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.5)]" />
          
          {/* Bottom lane line - dashed */}
          <div className="absolute bottom-3 left-0 right-0 flex gap-4">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={`dash-bottom-${i}`}
                className="h-0.5 w-8 bg-white/40"
              />
            ))}
          </div>
        </div>
        
        {/* Tire marks / skid marks effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 left-[10%] w-32 h-1 bg-zinc-600 rotate-2 blur-sm" />
          <div className="absolute top-1/2 left-[30%] w-24 h-0.5 bg-zinc-600 -rotate-1 blur-sm" />
          <div className="absolute bottom-1/3 left-[60%] w-28 h-1 bg-zinc-600 rotate-3 blur-sm" />
          <div className="absolute top-1/4 right-[20%] w-20 h-0.5 bg-zinc-600 -rotate-2 blur-sm" />
        </div>
        
        {/* Animated speed blur on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-900 to-transparent z-10" />
        
        {/* Marquee content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex animate-marquee relative z-20"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className={`font-heading text-xl md:text-2xl uppercase tracking-[0.3em] whitespace-nowrap px-8 font-bold ${
                isPrimary 
                  ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
                  : 'text-white/90'
              }`}>
                {item}
              </span>
              <motion.div
                animate={{ 
                  rotate: [-10, 10, -10],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.6, 
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                <Flag className="h-5 w-5 text-primary fill-primary drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Red/White Racing Kerb - Bottom */}
      <div className="h-3 flex">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={`kerb-bottom-${i}`} 
            className={`flex-1 h-full ${i % 2 === 1 ? 'bg-primary' : 'bg-white'}`}
          />
        ))}
      </div>
      
      {/* Subtle glow effect under the track */}
      <div className="absolute -bottom-4 left-1/4 right-1/4 h-8 bg-primary/20 blur-xl" />
    </div>
  );
};
