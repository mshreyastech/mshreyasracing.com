import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { PhotoScrollSection } from '@/components/PhotoScrollSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { AboutSection } from '@/components/AboutSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { CareerSection } from '@/components/CareerSection';
import { VisionSection } from '@/components/VisionSection';
import { SponsorshipSection } from '@/components/SponsorshipSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen bg-background">
          <Navigation />
          <HeroSection />
          <PhotoScrollSection />
          <MarqueeSection variant="primary" />
          <AboutSection />
          <AchievementsSection />
          <MarqueeSection variant="secondary" />
          <CareerSection />
          <VisionSection />
          <SponsorshipSection />
          <GallerySection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
