import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { REGISTER_FORM_URL } from "@/lib/links";
import { Calendar, MapPin } from "lucide-react";

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl md:text-6xl font-bold text-primary">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = useMemo(() => new Date("2025-09-18T00:00:00"), []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    // Update immediately
    updateCountdown();
    
    // Then update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="text-center space-y-8 max-w-4xl mx-auto animate-slide-in">
        {/* Badge */}
        <div className="inline-block px-6 py-2 rounded-full glass border border-primary/30 text-primary font-medium">
          National Level Hackathon • Bootcamp
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-neon bg-gradient-to-r from-primary via-primary-glow to-accent-cyan bg-clip-text text-transparent">
          AVINYA 2K25
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
          24-Hour National Level Hackathon + Bootcamp
        </p>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-text-secondary">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent-blue" />
            <span>Sep 18-19, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-success" />
            <span>Anurag University</span>
          </div>
        </div>

        {/* Prize Pool */}
        <div className="text-4xl md:text-5xl font-bold text-gold text-glow">
          ₹1 Lakh Prize Pool
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => {
              const element = document.getElementById('registration-pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            ⚡ Register Now
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg hover-glow"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📖 Learn More
          </Button>
        </div>

        {/* Countdown Timer */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-primary mb-6">Time Until Launch</h3>
          <div className="flex justify-center gap-4">
            <CountdownItem value={timeLeft.days} label="Days" />
            <div className="text-4xl md:text-6xl font-bold text-primary flex items-center">:</div>
            <CountdownItem value={timeLeft.hours} label="Hours" />
            <div className="text-4xl md:text-6xl font-bold text-primary flex items-center">:</div>
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <div className="text-4xl md:text-6xl font-bold text-primary flex items-center">:</div>
            <CountdownItem value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;