import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import sections
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import WhyJoinSection from './sections/WhyJoinSection';
import ProductFashionSection from './sections/ProductFashionSection';
import ProductAccessoriesSection from './sections/ProductAccessoriesSection';
import ProductMotorSection from './sections/ProductMotorSection';
import CommunitySection from './sections/CommunitySection';
import EventsSection from './sections/EventsSection';
import ProgramsSection from './sections/ProgramsSection';
import JoinFormSection from './sections/JoinFormSection';
import FooterSection from './sections/FooterSection';
import WhatsAppFloat from './sections/WhatsAppFloat';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll-triggered animations
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger after all content loads
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative bg-kolanpe-black min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Why Join */}
        <WhyJoinSection />
        
        {/* Section 3: Product Fashion */}
        <ProductFashionSection />
        
        {/* Section 4: Product Accessories */}
        <ProductAccessoriesSection />
        
        {/* Section 5: Product Motor */}
        <ProductMotorSection />
        
        {/* Section 6: Community */}
        <CommunitySection />
        
        {/* Section 7: Events */}
        <EventsSection />
        
        {/* Section 8: Programs */}
        <ProgramsSection />
        
        {/* Section 9: Join Form */}
        <JoinFormSection />
        
        {/* Section 10: Footer */}
        <FooterSection />
      </main>
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
