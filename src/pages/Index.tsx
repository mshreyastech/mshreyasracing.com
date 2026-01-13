import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { AboutSection } from '@/components/AboutSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { VisionSection } from '@/components/VisionSection';
import { SponsorshipSection } from '@/components/SponsorshipSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MarqueeSection variant="primary" />
      <AboutSection />
      <MarqueeSection variant="secondary" />
      <AchievementsSection />
      <VisionSection />
      <SponsorshipSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
