import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Flag, Volume2, VolumeX } from 'lucide-react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundLoading, setSoundLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Generate and play engine sound
  const playEngineSound = async () => {
    if (soundLoading) return;
    
    setSoundLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-sfx`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ 
            prompt: "Formula 1 race car engine revving, high-pitched powerful V8 engine acceleration, intense motorsport racing sound",
            duration: 8
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`SFX request failed: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
      
      const audio = new Audio(audioUrl);
      audio.loop = true;
      audio.volume = 0.6;
      audioRef.current = audio;
      await audio.play();
      setSoundEnabled(true);
    } catch (error) {
      console.error('Failed to play engine sound:', error);
    } finally {
      setSoundLoading(false);
    }
  };

  const toggleSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.pause();
      setSoundEnabled(false);
    } else {
      playEngineSound();
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Fade out audio before completing
          if (audioRef.current) {
            const fadeOut = setInterval(() => {
              if (audioRef.current && audioRef.current.volume > 0.1) {
                audioRef.current.volume -= 0.1;
              } else {
                clearInterval(fadeOut);
                if (audioRef.current) {
                  audioRef.current.pause();
                }
              }
            }, 50);
          }
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
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Sound toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleSound}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 hover:border-primary/50 hover:bg-zinc-700/80 transition-all group"
        title={soundEnabled ? "Mute engine sound" : "Play engine sound"}
      >
        {soundLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
          />
        ) : soundEnabled ? (
          <Volume2 className="w-6 h-6 text-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </motion.button>
      {/* Animated race track background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving asphalt texture */}
        <motion.div
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 42px)`,
          }}
        />
        
        {/* Speed lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '200%', opacity: [0, 1, 0] }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              delay: i * 0.15,
              ease: 'linear'
            }}
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ left: `${10 + i * 12}%` }}
          />
        ))}
      </div>

      {/* Large animated checkered flag background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] grid grid-cols-16 grid-rows-16">
          {[...Array(256)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 16) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Central F1 Car with glow */}
      <div className="relative mb-8 z-10">
        {/* Glowing aura */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -inset-8 bg-primary/30 rounded-full blur-3xl"
        />
        
        {/* F1 Car SVG */}
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="relative"
        >
          <svg viewBox="0 0 120 40" className="w-48 h-16 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
            {/* Car body */}
            <path
              d="M10 25 L25 15 L90 15 L110 20 L110 28 L100 30 L80 30 L75 28 L45 28 L40 30 L20 30 L10 25Z"
              className="fill-primary"
            />
            {/* Cockpit */}
            <path
              d="M45 15 L55 10 L65 10 L70 15Z"
              className="fill-zinc-800"
            />
            {/* Front wing */}
            <path
              d="M5 22 L15 20 L15 28 L5 30Z"
              className="fill-primary"
            />
            {/* Rear wing */}
            <path
              d="M105 10 L115 10 L115 15 L105 15Z"
              className="fill-zinc-800"
            />
            <path
              d="M103 8 L117 8 L117 10 L103 10Z"
              className="fill-primary"
            />
            {/* Wheels */}
            <motion.circle
              cx="30"
              cy="30"
              r="8"
              className="fill-zinc-900 stroke-zinc-600 stroke-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle
              cx="90"
              cy="28"
              r="8"
              className="fill-zinc-900 stroke-zinc-600 stroke-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
            />
            {/* Wheel spokes */}
            <circle cx="30" cy="30" r="3" className="fill-zinc-400" />
            <circle cx="90" cy="28" r="3" className="fill-zinc-400" />
            {/* Racing number */}
            <text x="60" y="24" className="fill-white text-[8px] font-bold text-center" textAnchor="middle">SM</text>
          </svg>
          
          {/* Exhaust flames */}
          <motion.div
            animate={{ 
              scaleX: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
          >
            <div className="w-8 h-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent rounded-full blur-sm" />
            <div className="w-6 h-1 bg-gradient-to-r from-primary via-orange-400 to-transparent rounded-full -mt-1.5 ml-1" />
          </motion.div>
        </motion.div>
      </div>

      {/* Progress percentage with flags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center z-10 relative"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Flag className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
          <motion.span
            className="text-6xl font-heading font-bold text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]"
            key={progress}
          >
            {progress}%
          </motion.span>
          <motion.div
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Flag className="w-8 h-8 text-white fill-white" />
          </motion.div>
        </div>
        
        <h2 className="font-heading text-2xl text-foreground mb-2 tracking-wider">
          {progress < 30 && '🏁 STARTING ENGINE'}
          {progress >= 30 && progress < 60 && '🔥 REVVING UP'}
          {progress >= 60 && progress < 90 && '⚡ FULL THROTTLE'}
          {progress >= 90 && '🚀 LAUNCH MODE!'}
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em]">
          {progress < 30 && 'Warming up the engine...'}
          {progress >= 30 && progress < 60 && 'Building power...'}
          {progress >= 60 && progress < 90 && 'Pushing to the limit...'}
          {progress >= 90 && 'Ready to race!'}
        </p>
      </motion.div>

      {/* Race track progress bar */}
      <div className="absolute bottom-16 left-8 right-8 z-10">
        {/* Track with kerbs */}
        <div className="relative">
          {/* Red/white kerb top */}
          <div className="h-2 flex mb-1">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 ${i % 2 === 0 ? 'bg-primary' : 'bg-white'}`}
              />
            ))}
          </div>
          
          {/* Main track surface */}
          <div className="h-6 bg-zinc-800 rounded relative overflow-hidden">
            {/* Track texture */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-0 bottom-0 w-px bg-white/20" 
                  style={{ left: `${(i + 1) * 3.33}%` }}
                />
              ))}
            </div>
            
            {/* Progress fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-orange-500 to-yellow-400 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
            
            {/* F1 Car on track */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${Math.max(0, progress - 5)}%` }}
            >
              <motion.div
                animate={{ y: [-1, 1, -1] }}
                transition={{ duration: 0.15, repeat: Infinity }}
              >
                <svg viewBox="0 0 40 15" className="w-10 h-4">
                  <path
                    d="M2 8 L8 5 L32 5 L38 7 L38 10 L35 11 L28 11 L26 10 L14 10 L12 11 L5 11 L2 8Z"
                    className="fill-zinc-900"
                  />
                  <circle cx="10" cy="11" r="3" className="fill-zinc-700" />
                  <circle cx="30" cy="10" r="3" className="fill-zinc-700" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Red/white kerb bottom */}
          <div className="h-2 flex mt-1">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 ${i % 2 === 1 ? 'bg-primary' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Start/Finish labels with flags */}
        <div className="flex justify-between mt-3 text-sm text-muted-foreground uppercase tracking-wider font-heading">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 grid grid-cols-2 grid-rows-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`${i % 2 === (Math.floor(i/2) % 2) ? 'bg-white' : 'bg-zinc-900'}`} />
              ))}
            </div>
            <span>Start</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Finish</span>
            <div className="w-4 h-4 grid grid-cols-2 grid-rows-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`${i % 2 === (Math.floor(i/2) % 2) ? 'bg-white' : 'bg-zinc-900'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated checkered flag corners */}
      <motion.div 
        className="absolute top-0 left-0 w-24 h-24"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 6) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="absolute top-0 right-0 w-24 h-24"
        animate={{ opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 6) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-24 h-24"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 6) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-24 h-24"
        animate={{ opacity: [0.6, 0.4, 0.6] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className={`${(Math.floor(i / 6) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
