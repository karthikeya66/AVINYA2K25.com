import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

const MeteorField = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const createRandomMeteors = () => {
      const meteorCount = 20;
      const newMeteors: Meteor[] = [];

      for (let i = 0; i < meteorCount; i++) {
        newMeteors.push({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${2 + Math.random() * 6}s`,
        });
      }

      setMeteors(newMeteors);
    };

    createRandomMeteors();

    // Create new random meteors periodically
    const interval = setInterval(() => {
      createRandomMeteors();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced Starfield background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background-secondary/80" />
      
      {/* Aurora Background Effects */}
      <div className="aurora-background" />
      <div className="aurora-wave" style={{ top: '10%' }} />
      <div className="aurora-wave" style={{ top: '30%' }} />
      <div className="aurora-wave" style={{ top: '50%' }} />
      <div className="aurora-wave" style={{ top: '70%' }} />
      
      {/* Enhanced Stars */}
      {[...Array(80)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full opacity-70"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${180 + Math.random() * 80} 70% ${60 + Math.random() * 40}%)`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
          }}
        />
      ))}

      {/* Enhanced Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
      
      {/* Ambient glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-accent-cyan/3 to-transparent" />
    </div>
  );
};

export default MeteorField;