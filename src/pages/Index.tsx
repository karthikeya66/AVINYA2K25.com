import ParticlesBackground from "@/components/ParticlesBackground";
import MeteorField from "@/components/MeteorField";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrizePoolSection from "@/components/PrizePoolSection";
import TracksSection from "@/components/TracksSection";
import WhyAttendSection from "@/components/WhyAttendSection";
import RegistrationPricingSection from "@/components/RegistrationPricingSection";
import OrganizingCommittee from "@/components/OrganizingCommittee";
import ProgramChairSection from "@/components/ProgramChairSection";
import ContactSection from "@/components/ContactSection";
import VenueSection from "@/components/VenueSection";
import ClubsSection from "@/components/ClubsSection";
import FAQSection from "@/components/FAQSection";
import InteractiveEffects from "@/components/InteractiveEffects";
import { useClickEffects } from "@/hooks/useClickEffects";
import Footer from "@/components/Footer";

const Index = () => {
  const { effects, handleClick } = useClickEffects();

  return (
    <div className="app-container" onClick={handleClick}>
      {/* Particle Background */}
      <ParticlesBackground />
      
      {/* Animated Meteor Background */}
      <MeteorField />
      
      {/* Interactive Click Effects */}
      <InteractiveEffects effects={effects} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="main-content">
        <div className="section">
          <div className="container">
            <HeroSection />
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <AboutSection />
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <PrizePoolSection />
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <TracksSection />
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <WhyAttendSection />
          </div>
        </div>
        
        <section id="registration" className="section">
          <div className="container">
            <RegistrationPricingSection />
          </div>
        </section>
        
        <div className="section">
          <div className="container">
            <VenueSection />
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <FAQSection />
          </div>
        </div>
        
        
        <div className="section">
          <div className="container">
            <ClubsSection />
          </div>
        </div>
        
        <ProgramChairSection />
        
        <div className="section">
          <div className="container">
            <OrganizingCommittee />
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <ContactSection />
          </div>
        </div>
        
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;