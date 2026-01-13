import { motion } from 'framer-motion';
import { Target, Zap, Brain, Users, Clock, CloudRain } from 'lucide-react';
import shreyasProfile1 from '@/assets/shreyas-profile-1.png';
import shreyasProfile2 from '@/assets/shreyas-profile-2.png';

const strengths = [
  { icon: Brain, title: 'Calm Under Pressure', description: 'Sharp decision-making in critical moments' },
  { icon: Target, title: 'Physical & Mental', description: 'Strong conditioning for peak performance' },
  { icon: Users, title: 'Team Oriented', description: 'Works seamlessly with engineers & mentors' },
  { icon: Zap, title: 'Quick Learner', description: 'Adapts rapidly to new tracks & cars' },
  { icon: Clock, title: 'Extensive Training', description: 'Countless hours of practice & testing' },
  { icon: CloudRain, title: 'Wet Weather Expert', description: 'Rapid and confident in rain conditions' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={shreyasProfile1}
                alt="Shreyas in racing gear"
                className="w-full max-w-md rounded-lg shadow-2xl glow-primary"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:right-8 w-48 md:w-64 z-20">
              <img
                src={shreyasProfile2}
                alt="Shreyas racing"
                className="w-full rounded-lg shadow-xl border-4 border-background"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-primary opacity-50" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-heading uppercase tracking-wider text-sm">About Me</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
              MEET <span className="text-gradient-racing">SHREYAS</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Shreyas Meenakshisundar is a promising young racing talent from Chennai, Tamil Nadu, 
                whose passion for motorsport ignited at an early age. Beginning his journey at just 
                five years old, Shreyas has rapidly developed the skills and determination necessary 
                to compete at increasingly competitive levels.
              </p>
              <p>
                His early experiences in international rental karting have honed his precision, 
                consistency, and adaptability, laying a solid foundation for a successful racing career. 
                Exposure to diverse track conditions has further strengthened his racecraft and resilience, 
                making him a formidable competitor on the track.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 pl-6 border-l-4 border-primary">
              <p className="text-foreground italic font-body">
                "Reliable, disciplined, and laser-focused. Delivered consistent performances 
                across Junior and Open — showcasing sharp racecraft every lap."
              </p>
              <span className="text-primary text-sm mt-2 block">— Team MSPORT</span>
            </div>
          </motion.div>
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-heading uppercase tracking-wider text-sm">What Drives Me</span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mt-2">
              CORE <span className="text-gradient-racing">STRENGTHS</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <strength.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{strength.title}</h4>
                <p className="text-muted-foreground text-sm font-body">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
