import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      {/* Racing stripes background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ x: '200%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
        />
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      {/* Speedometer-style loader */}
      <div className="relative mb-8">
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-muted relative"
          style={{
            background: `conic-gradient(hsl(var(--primary)) ${progress * 3.6}deg, hsl(var(--muted)) 0deg)`,
          }}
        >
          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
            <motion.span
              className="text-3xl font-heading font-bold text-primary"
              key={progress}
            >
              {progress}
            </motion.span>
          </div>
        </motion.div>
        
        {/* Racing car icon */}
        <motion.div
          animate={{ 
            rotate: progress * 3.6,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom"
          style={{ height: '64px' }}
        >
          <div className="w-3 h-3 bg-primary rounded-full glow-primary" />
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="font-heading text-2xl text-foreground mb-2">STARTING ENGINE</h2>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          {progress < 30 && 'Warming up...'}
          {progress >= 30 && progress < 60 && 'Revving up...'}
          {progress >= 60 && progress < 90 && 'Full throttle...'}
          {progress >= 90 && 'Launch mode!'}
        </p>
      </motion.div>

      {/* Progress bar styled as race track */}
      <div className="absolute bottom-12 left-8 right-8">
        <div className="h-2 bg-muted rounded-full overflow-hidden relative">
          {/* Track markings */}
          <div className="absolute inset-0 flex justify-between px-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-px h-full bg-background/30" />
            ))}
          </div>
          
          {/* Progress fill */}
          <motion.div
            className="h-full bg-gradient-racing rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Car indicator */}
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-primary rounded-sm rotate-45 glow-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </motion.div>
        </div>
        
        {/* Start/Finish labels */}
        <div className="flex justify-between mt-2 text-xs text-muted-foreground uppercase tracking-wider">
          <span>Start</span>
          <span>Finish</span>
        </div>
      </div>

      {/* Checkered flag corners */}
      <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 4) + i) % 2 === 0 ? 'bg-foreground' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 4) + i) % 2 === 0 ? 'bg-foreground' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
