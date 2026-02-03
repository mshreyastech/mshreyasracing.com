import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { PhotoScrollSection } from '@/components/PhotoScrollSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { AboutSection } from '@/components/AboutSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { VisionSection } from '@/components/VisionSection';
import { SponsorshipSection } from '@/components/SponsorshipSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

const Index = () => {
  // Smooth scroll with easing for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen bg-background">
          <Navigation />
          
          <HeroSection />
          
          <ScrollAnimationWrapper animation="fadeUp" duration={0.8}>
            <PhotoScrollSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scale" duration={0.6}>
            <MarqueeSection variant="primary" />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" duration={0.9}>
            <AboutSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeLeft" duration={0.8}>
            <AchievementsSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scale" duration={0.6}>
            <MarqueeSection variant="secondary" />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="blur" duration={1}>
            <VisionSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" duration={0.8}>
            <SponsorshipSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" duration={0.8} delay={0.1}>
            <GallerySection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeUp" duration={0.8}>
            <ContactSection />
          </ScrollAnimationWrapper>
          
          <Footer />
    </main>
  );
};

export default Index;
