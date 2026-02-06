import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const ContactSection = () => {
  return <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)`
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="text-primary font-heading uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mt-2">
            SPONSORSHIP <span className="text-gradient-racing">INQUIRIES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            With your partnership, I am ready to leap into Indian Formula 4 & F2000 racing, 
            building an international career and showcasing Tamil Nadu and India on global grounds.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              <a href="mailto:mshreyas2009@gmail.com" className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="font-heading font-semibold text-foreground">info@mshreyasracing.com</p>
                </div>
              </a>

              <a href="tel:+918220070938" className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">YouTube</p>
                  <p className="font-heading font-semibold text-foreground">https://www.youtube.com/@ShreyasM_Racing</p>
                </div>
              </a>

              <a href="https://instagram.com/m_shreyas09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Instagram</p>
                  <p className="font-heading font-semibold text-foreground">@m_shreyas09</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-heading font-semibold text-foreground">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-gradient-card p-8 rounded-lg border border-border flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to Partner?</h3>
              <p className="text-muted-foreground font-body mb-6">
                I'm actively seeking sponsors and partners who believe in nurturing young Indian 
                motorsport talent. Let's discuss how we can achieve success together.
              </p>
              <Button asChild size="lg" className="bg-gradient-racing hover:opacity-90 font-heading uppercase tracking-wider group w-full">
                <a href="mailto:mshreyas2009@gmail.com?subject=Sponsorship%20Inquiry%20-%20Shreyas%20Meenakshisundar">
                  <Send className="mr-2 h-5 w-5" />
                  Send Inquiry
                </a>
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};