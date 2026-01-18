import { Navigation } from '@/components/Navigation';
import { HeaderSection } from '@/components/HeaderSection';
import { HeroSection } from '@/components/HeroSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { AboutSection } from '@/components/AboutSection';
import { CareerSection } from '@/components/CareerSection';
import { VisionSection } from '@/components/VisionSection';
import { SponsorshipSection } from '@/components/SponsorshipSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeaderSection />
      <HeroSection />
      <MarqueeSection variant="primary" />
      <AboutSection />
      <MarqueeSection variant="secondary" />
      <CareerSection />
      <VisionSection />
      <SponsorshipSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;