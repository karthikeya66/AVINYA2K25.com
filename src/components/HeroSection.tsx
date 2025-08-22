import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-18T00:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

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
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg hover-glow animate-pulse-glow"
            onClick={() => window.open('https://forms.gle/YsjWa5qstQYPeFgD7', '_blank')}
          >
            ⚡ Register Now
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg hover-glow">
            📖 Learn More
          </Button>
        </div>

        {/* Countdown Timer */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-primary mb-6">Time Until Launch</h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-4 border border-primary/20 hover-scale">
                <div className="text-3xl font-bold text-primary text-glow">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-text-muted font-medium mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;