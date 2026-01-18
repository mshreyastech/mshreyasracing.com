import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Trophy, Calendar, Flag } from 'lucide-react';

const seasonResults = [
  {
    event: 'MRF MMSC FMSCI INCRC 2025 – Round 3 (F1300)',
    result: 'P8',
    location: 'Madras International Circuit',
    flag: '🇮🇳',
    date: '2025',
  },
];

const upcomingEvents = [
  { name: 'RPPL Mumbai Street Race', status: 'Upcoming', icon: '🏎️' },
  { name: 'RPPL Goa Street Race', status: 'Upcoming', icon: '🏁' },
];

const racingCategories = [
  { name: 'Formula LGB 1300', years: '2025–2026', status: 'Current', color: 'primary' },
  { name: 'Indian National Car Racing Championship', years: '2025', status: 'Active', color: 'primary' },
  { name: 'Formula Regional', years: 'Target', status: 'Future', color: 'secondary' },
  { name: 'RPPL FIA Indian Formula 4', years: 'Target', status: 'Future', color: 'secondary' },
  { name: 'Formula 3', years: '', status: 'Goal', color: 'muted' },
  { name: 'Formula 2', years: '', status: 'Goal', color: 'muted' },
];

export const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-20 bg-background relative overflow-hidden">
      {/* Racing stripes background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 right-0 h-20 bg-gradient-to-r from-primary via-transparent to-secondary skew-y-3" />
        <div className="absolute bottom-1/3 left-0 right-0 h-20 bg-gradient-to-r from-secondary via-transparent to-primary -skew-y-3" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-racing mb-4">
            Career & Results
          </h2>
          <div className="w-24 h-1 bg-gradient-racing mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 2025 Season Results */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground font-heading mb-6 flex items-center gap-2">
              <Trophy className="text-primary" size={24} />
              2025 Season Results
            </h3>
            
            {seasonResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border mb-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xl font-bold font-heading rounded-bl-xl">
                  {result.result}
                </div>
                <h4 className="text-lg font-bold text-foreground pr-16 mb-3">{result.event}</h4>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {result.location}
                  </span>
                  <span>{result.flag}</span>
                </div>
              </motion.div>
            ))}

            {/* Upcoming Events */}
            <h3 className="text-2xl font-bold text-foreground font-heading mt-10 mb-6 flex items-center gap-2">
              <Calendar className="text-secondary" size={24} />
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{event.icon}</span>
                    <span className="font-medium text-foreground">{event.name}</span>
                  </div>
                  <span className="text-sm text-secondary font-medium uppercase tracking-wider">
                    {event.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Racing Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground font-heading mb-6 flex items-center gap-2">
              <Flag className="text-primary" size={24} />
              Racing Categories
            </h3>
            
            <div className="space-y-4">
              {racingCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative p-4 rounded-xl border ${
                    category.color === 'primary' 
                      ? 'border-primary/50 bg-primary/5' 
                      : category.color === 'secondary'
                      ? 'border-secondary/50 bg-secondary/5'
                      : 'border-border bg-muted/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground">{category.name}</h4>
                      {category.years && (
                        <p className="text-sm text-muted-foreground mt-1">{category.years}</p>
                      )}
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      category.status === 'Current' || category.status === 'Active'
                        ? 'bg-primary/20 text-primary'
                        : category.status === 'Future'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {category.status}
                    </span>
                  </div>
                  
                  {/* Connection line */}
                  {index < racingCategories.length - 1 && (
                    <div className="absolute left-8 bottom-0 w-0.5 h-4 bg-gradient-to-b from-border to-transparent translate-y-full" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};