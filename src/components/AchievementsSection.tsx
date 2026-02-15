import { motion } from "framer-motion";
import { Trophy, Flag, Medal, Calendar } from "lucide-react";
import shreyasRacing1 from "@/assets/shreyas-racing-1.png";
import mvmLogo from "@/assets/mvm-logo.jpg";
const championshipStanding = {
  championship: "MRF MMSC FMSCI INCRC 2025 - CHAMPIONSHIP STANDING",
  result: "P9",
  type: "finish",
};
const highlights = [
  {
    championship: "ROUND 1",
    location: "Kari Motor Speedway",
    result: "P9",
    type: "finish",
  },
  {
    championship: "ROUND 2",
    location: "Madras International Circuit",
    result: "P5",
    type: "top5",
  },
  {
    championship: "ROUND 3",
    location: "Madras International Circuit",
    result: "P8",
    type: "finish",
  },
  {
    championship: "ROUND 4",
    location: "Madras International Circuit",
    result: "P8",
    type: "finish",
  },
];
const jkTyre = {
  championship: "JK TYRE NOVICE CUP 2025",
  location: "Kari Motor Speedway",
  result: "P5",
  type: "top5",
};
const upcomingRaces = [
  {
    event: "RPPL Mumbai Street Race",
    location: "Mumbai (Night, FIA Approved)",
    date: "March 21-22, 2026",
  },
];
export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading uppercase tracking-wider text-sm">Track Record</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2">
            RACE <span className="text-gradient-racing">HIGHLIGHTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Competitor in MRF MMSC FMSCI Indian National Car Racing Championship 2025 & JK Tyre Novice Cup 2025. 12+
            career race starts with all finishes in top 10 places.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 2025-2026 Highlights */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-heading font-bold">2025 Season Results</h3>
            </div>

            <div className="space-y-4">
              {/* Championship Standing Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background/50 p-5 rounded-lg border border-border hover:border-primary/30 transition-all min-h-[72px] flex items-center"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground">{championshipStanding.championship}</h4>
                  </div>
                  <div className="px-4 py-2 rounded-lg font-heading font-bold text-xl bg-primary/10 text-primary">
                    {championshipStanding.result}
                  </div>
                </div>
              </motion.div>

              {/* Individual Rounds */}
              {highlights.map((race, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background/50 p-5 rounded-lg border border-border hover:border-primary/30 transition-all ml-4 min-h-[72px] flex items-center"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-foreground">{race.championship}</h4>
                      <p className="text-muted-foreground text-sm mt-1 flex items-center gap-2">
                        <Flag className="h-3 w-3" />
                        {race.location}
                      </p>
                    </div>
                    <div className={`px-4 py-2 rounded-lg font-heading font-bold text-xl ${race.type === "top5" ? "bg-primary/10 text-primary" : "bg-muted text-foreground"}`}>
                      {race.result}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* JK Tyre Novice Cup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-background/50 p-5 rounded-lg border border-border hover:border-primary/30 transition-all mt-6 min-h-[72px] flex items-center"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground">{jkTyre.championship}</h4>
                    <p className="text-muted-foreground text-sm mt-1 flex items-center gap-2">
                      <Flag className="h-3 w-3" />
                      {jkTyre.location}
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-lg font-heading font-bold text-xl bg-primary/10 text-primary">
                    {jkTyre.result}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <div className="mt-8">
              <img src={shreyasRacing1} alt="Shreyas racing" className="w-full rounded-lg shadow-lg" />
            </div>
          </motion.div>

          {/* Upcoming Races */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-heading font-bold">Upcoming Races</h3>
            </div>

            <div className="space-y-4">
              {upcomingRaces.map((race, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="bg-gradient-card p-5 rounded-lg border border-border relative overflow-hidden group hover:border-primary/30 transition-all"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-racing" />
                  <div className="pl-4">
                    <h4 className="font-heading font-semibold text-foreground">{race.event}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{race.location}</p>
                    <p className="text-primary text-sm font-medium mt-2">{race.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Next Year Plan */}
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-heading font-bold text-lg text-foreground mb-4">2026 Season Plan</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Medal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-body text-sm">MRF MMSC FMSCI INCRC 2026 F2000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Medal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-body text-sm">RPPL FIA INDIAN FORMULA 4</span>
                </li>
              </ul>
            </div>

            {/* Sponsor */}
            <div className="mt-6 p-6 bg-background/50 rounded-lg border border-border text-center">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Current Sponsor</span>
              <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <img
                  src={mvmLogo}
                  alt="Maharishi Vidya Mandir Logo"
                  className="h-20 w-auto object-contain rounded-lg"
                />
                <p className="font-heading font-semibold text-foreground text-lg">
                  MAHARISHI VIDYA MANDIR GROUP OF SCHOOLS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
