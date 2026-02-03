import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";

const careerPath = [
  { stage: "Formula LGB 1300", status: "current", year: "2025-2026" },
  { stage: "Indian Formula 4 & F2000", status: "next", year: "2026-2027" },
  { stage: "Formula Regional", status: "dream", year: "Goal" },
  { stage: "Formula 3", status: "dream", year: "Goal" },
  { stage: "Formula 2", status: "dream", year: "Goal" },
  { stage: "Formula 1", status: "dream", year: "Goal" },
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
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {careerPath.map((step, index) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center mb-2"
              >
                <div
                  className={`relative px-4 md:px-6 py-4 md:py-6 rounded-lg text-center min-w-[120px] md:min-w-[150px] ${
                    step.status === "current"
                      ? "bg-gradient-racing text-primary-foreground glow-primary"
                      : step.status === "dream"
                        ? "bg-gradient-card border-2 border-primary"
                        : "bg-card border border-border"
                  }`}
                >
                  {step.status === "current" && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  )}
                  <p
                    className={`font-heading font-bold text-sm md:text-base ${
                      step.status === "current"
                        ? "text-primary-foreground"
                        : step.status === "dream"
                          ? "text-primary"
                          : "text-foreground"
                    }`}
                  >
                    {step.stage}
                  </p>
                  <span
                    className={`text-xs ${
                      step.status === "current" ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {step.year}
                  </span>
                </div>
                {index < careerPath.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-green-500 mx-2 md:mx-4 shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
            Representing{" "}
            <motion.span
              className="relative inline-block"
              animate={{
                textShadow: [
                  "0 0 20px #FF9933, 0 0 40px #FF9933",
                  "0 0 20px #FFFFFF, 0 0 40px #FFFFFF",
                  "0 0 20px #138808, 0 0 40px #138808",
                  "0 0 20px #FF9933, 0 0 40px #FF9933",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "linear-gradient(180deg, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 8px rgba(255, 153, 51, 0.5)) drop-shadow(0 0 16px rgba(19, 136, 8, 0.5))",
              }}
            >
              India
              {/* Tricolor Underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)",
                  boxShadow: "0 0 8px rgba(255, 153, 51, 0.6), 0 0 8px rgba(19, 136, 8, 0.6)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              />
              {/* Animated shimmer on underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full overflow-hidden"
                style={{ opacity: 0.6 }}
              >
                <motion.span
                  className="absolute inset-0 h-full w-8"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                />
              </motion.span>
            </motion.span>{" "}
            Globally 🇮🇳
          </h3>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            With dedication, discipline, and the right support, I am committed to becoming India's next Formula 1 driver
            — showcasing Tamil Nadu and India on international racing circuits, inspiring young motorsport enthusiasts
            across the nation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
