import { useEffect, useRef, useState } from 'react';

const AnimationStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 8s ease infinite;
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
    `,
    }}
  />
);

const ProgramChairSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.01;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleParticles = () => {
      if (!ctx) return;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.1) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    const createParticles = () => {
      if (particles.length < 50) {
        particles.push(new Particle());
      }
    };

    const resizeCanvas = () => {
      const card = canvas.parentElement?.parentElement;
      if (card) {
        canvas.width = card.clientWidth;
        canvas.height = card.clientHeight;
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createParticles();
      handleParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="program-chair"
      className="py-16 md:py-20 relative overflow-hidden bg-transparent"
    >
      <AnimationStyles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="relative group">
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 animate-gradient leading-loose tracking-wide drop-shadow-lg pb-3 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`} style={{ animationDelay: '0.1s' }}>
                Program Chair
              </h2>
              <div className="relative mb-8">
                <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400 mx-auto rounded-full"></div>
                <div className="absolute inset-0 w-32 h-1.5 mx-auto bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        
          <div className={`flex justify-center transform transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-2xl p-8 md:p-10 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/50 group">
            {/* Grid Background */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(74, 74, 138, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(74, 74, 138, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
            
            {/* Ribbon */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] overflow-hidden z-10">
              <span className="absolute block w-[225px] py-2.5 bg-[#ffd700] shadow-[0_5px_10px_rgba(0,0,0,0.2)] text-[#1a163a] font-extrabold text-base text-center uppercase right-[-25px] top-[30px] rotate-45">
                BOSS
              </span>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <p className={`text-2xl md:text-3xl font-bold text-yellow-400 mb-2 transition-colors duration-300 group-hover:text-yellow-300 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`} style={{ animationDelay: '0.3s' }}>
                Dr. A MALLIKARJUNA REDDY
              </p>
              <p className={`text-xl font-medium text-gray-300 transition-colors duration-300 group-hover:text-yellow-400/90 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`} style={{ animationDelay: '0.4s' }}>
                HOD - AI
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramChairSection;
