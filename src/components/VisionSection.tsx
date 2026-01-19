import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';

const careerPath = [
  { stage: 'Formula LGB 1300', status: 'current', year: '2025-2026' },
  { stage: 'Indian Formula 4 & F2000', status: 'next', year: '2026-2027' },
  { stage: 'Formula Regional', status: 'planned', year: '' },
  { stage: 'Formula 3', status: 'future', year: '' },
  { stage: 'Formula 2', status: 'future', year: '' },
  { stage: 'Formula 1', status: 'dream', year: 'Goal' },
];

export const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-heading font-bold text-foreground">
          F1
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading uppercase tracking-wider text-sm">The Road Ahead</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2">
            MY <span className="text-gradient-racing">VISION</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Aspire to rise through the ranks and represent India on the global stage in Formula 1.
          </p>
        </motion.div>

        {/* Career Path Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {careerPath.map((step, index) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center"
              >
                <div className={`relative px-4 md:px-6 py-4 md:py-6 rounded-lg text-center min-w-[120px] md:min-w-[150px] ${
                  step.status === 'current' 
                    ? 'bg-gradient-racing text-primary-foreground glow-primary' 
                    : step.status === 'dream'
                    ? 'bg-gradient-card border-2 border-primary'
                    : 'bg-card border border-border'
                }`}>
                  {step.status === 'current' && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  )}
                  <p className={`font-heading font-bold text-sm md:text-base ${
                    step.status === 'current' ? 'text-primary-foreground' :
                    step.status === 'dream' ? 'text-primary' : 'text-foreground'
                  }`}>
                    {step.stage}
                  </p>
                  <span className={`text-xs ${
                    step.status === 'current' ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {step.year}
                  </span>
                </div>
                {index < careerPath.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mx-1 md:mx-2 shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement with Indian Flag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto text-center relative"
        >
          {/* Animated Indian Flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Flag Pole */}
              <div className="absolute -left-4 top-0 h-full w-2 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-full shadow-lg" />
              <div className="absolute -left-5 -top-3 w-4 h-4 bg-amber-500 rounded-full shadow-md" />
              
              {/* Waving Flag Container */}
              <motion.div
                animate={{ 
                  rotateY: [0, 5, 0, -3, 0],
                  skewX: [0, 2, 0, -1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative ml-2 overflow-hidden rounded-r-sm shadow-2xl"
                style={{ transformOrigin: 'left center', perspective: '1000px' }}
              >
                {/* Indian Flag */}
                <div className="w-40 md:w-56 h-24 md:h-36 flex flex-col relative">
                  {/* Saffron */}
                  <div className="flex-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </div>
                  {/* White with Ashoka Chakra */}
                  <div className="flex-1 bg-gradient-to-r from-white via-gray-50 to-white flex items-center justify-center relative overflow-hidden">
                    <motion.div 
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                    {/* Ashoka Chakra */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative"
                    >
                      <svg 
                        viewBox="0 0 100 100" 
                        className="w-6 h-6 md:w-10 md:h-10"
                      >
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="8" fill="#000080"/>
                        {/* 24 Spokes */}
                        {[...Array(24)].map((_, i) => (
                          <line
                            key={i}
                            x1="50"
                            y1="50"
                            x2="50"
                            y2="8"
                            stroke="#000080"
                            strokeWidth="1.5"
                            transform={`rotate(${i * 15} 50 50)`}
                          />
                        ))}
                      </svg>
                    </motion.div>
                  </div>
                  {/* Green */}
                  <div className="flex-1 bg-gradient-to-r from-green-600 via-green-500 to-green-600 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </div>
                  
                  {/* Wave overlay effect */}
                  <motion.div
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 0%']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      backgroundSize: '200% 100%'
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Flag Shadow */}
              <div className="absolute -bottom-4 left-4 right-0 h-4 bg-gradient-to-r from-black/20 to-transparent blur-sm rounded-full" />
            </div>
          </motion.div>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
            Representing <span className="text-gradient-racing">India</span> Globally
          </h3>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            With dedication, discipline, and the right support, I am committed to becoming 
            India's next Formula 1 driver — showcasing Tamil Nadu and India on international 
            racing circuits, inspiring young motorsport enthusiasts across the nation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
