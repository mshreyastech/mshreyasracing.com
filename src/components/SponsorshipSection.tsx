import { motion } from 'framer-motion';
import { Eye, Newspaper, Share2, Handshake } from 'lucide-react';
import shreyasRacing2 from '@/assets/shreyas-racing-2.png';

const benefits = [
  {
    icon: Eye,
    title: 'Brand Exposure',
    description: 'Prominent logo placement on car, racing suit, and helmet visible during all race events.',
  },
  {
    icon: Newspaper,
    title: 'Media Presence',
    description: 'Coverage through race day interviews, press releases, and motorsport media features.',
  },
  {
    icon: Share2,
    title: 'Digital Engagement',
    description: 'Growing social media presence with dedicated sponsor mentions and content collaboration.',
  },
  {
    icon: Handshake,
    title: 'Corporate Collaboration',
    description: 'Partnership opportunities for campaigns, promotions, and brand ambassador activities.',
  },
];

export const SponsorshipSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-heading uppercase tracking-wider text-sm">Partnership</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
              SPONSORSHIP <span className="text-gradient-racing">VALUE</span>
            </h2>
            
            <p className="text-muted-foreground font-body mb-8">
              Partner with a rising star in Indian motorsport. Your brand can be part of an 
              exciting journey from national championships to the international racing stage.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm font-body mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={shreyasRacing2}
                alt="Shreyas racing action"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-primary opacity-50 rounded-br-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
