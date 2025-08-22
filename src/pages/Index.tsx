import MeteorField from "@/components/MeteorField";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import PrizesSection from "@/components/PrizesSection";
import ScheduleSection from "@/components/ScheduleSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import InteractiveEffects from "@/components/InteractiveEffects";
import { useClickEffects } from "@/hooks/useClickEffects";

const Index = () => {
  const { effects, handleClick } = useClickEffects();

  return (
    <div className="min-h-screen relative" onClick={handleClick}>
      {/* Animated Meteor Background */}
      <MeteorField />
      
      {/* Interactive Click Effects */}
      <InteractiveEffects effects={effects} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <PrizesSection />
        <ScheduleSection />
        <RulesSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;