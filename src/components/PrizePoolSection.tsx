"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy } from "lucide-react";

const PrizePoolSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prizeAmountRef = useRef<HTMLDivElement>(null);
  const prizeIconRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lightningSvgRef = useRef<SVGSVGElement>(null);
  const lightningPathRef = useRef<SVGPathElement>(null);
  const lightningGlowRef = useRef<SVGPathElement>(null);
  
  const [count, setCount] = useState(0);
  const animationFrameId = useRef<number>();
  const lightningTimeout = useRef<NodeJS.Timeout>();
  const isObserving = useRef(false);

  // Lightning effect
  const createLightning = () => {
    if (!containerRef.current || !lightningPathRef.current || !lightningGlowRef.current) return;
    
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    const startY = Math.random() * height;
    const endY = Math.random() * height;
    
    let path = `M 0 ${startY}`;
    let currentX = 0;
    let currentY = startY;
    
    while (currentX < width) {
      const segmentLength = Math.random() * 80 + 40;
      const nextX = currentX + segmentLength;
      const nextY = currentY + (Math.random() - 0.5) * 40;
      path += ` L ${nextX} ${nextY}`;
      currentX = nextX;
      currentY = nextY;
    }
    
    lightningPathRef.current.setAttribute('d', path);
    lightningGlowRef.current.setAttribute('d', path);

    // Trigger the flash
    lightningSvgRef.current?.classList.add('flash');
    prizeAmountRef.current?.classList.add('glow');
    prizeIconRef.current?.classList.add('icon-glow');
    containerRef.current?.classList.add('container-glow');

    // End the flash
    setTimeout(() => {
      lightningSvgRef.current?.classList.remove('flash');
      prizeAmountRef.current?.classList.remove('glow');
      prizeIconRef.current?.classList.remove('icon-glow');
      containerRef.current?.classList.remove('container-glow');
    }, 200);
  };

  const scheduleLightning = () => {
    createLightning();
    const randomDelay = Math.random() * 800 + 200;
    lightningTimeout.current = setTimeout(scheduleLightning, randomDelay);
  };

  // Counter animation
  const animateCount = (start: number, end: number, duration: number) => {
    let startTime: number;
    
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentNum = Math.floor(progress * (end - start) + start);
      
      setCount(currentNum);
      
      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId.current = requestAnimationFrame(step);
  };

  // Intersection Observer
  useEffect(() => {
    if (!sectionRef.current || isObserving.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(0, 100000, 2000);
            if (!lightningTimeout.current) {
              scheduleLightning();
            }
          } else {
            if (animationFrameId.current) {
              cancelAnimationFrame(animationFrameId.current);
            }
            setCount(0);
            if (lightningTimeout.current) {
              clearTimeout(lightningTimeout.current);
              lightningTimeout.current = undefined;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);
    isObserving.current = true;

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (lightningTimeout.current) {
        clearTimeout(lightningTimeout.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="prizes" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={containerRef}
          className="relative w-full rounded-2xl p-8 md:p-10 bg-[#1a163a] border border-[#4a4a8a] shadow-[0_0_30px_rgba(74,74,138,0.5)] transition-all duration-300"
        >
          {/* Particles Background */}
          <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(100,100,220,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-[pan_60s_linear_infinite]" />
          
          {/* Lightning Effect */}
          <svg ref={lightningSvgRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-100">
            <path 
              ref={lightningGlowRef} 
              className="stroke-[#87cefa] stroke-[8px] fill-none"
              style={{ filter: 'blur(10px)' }}
              strokeLinecap="round"
            />
            <path 
              ref={lightningPathRef} 
              className="stroke-white stroke-[3px] fill-none"
              style={{ filter: 'blur(2px)' }}
              strokeLinecap="round"
            />
          </svg>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div 
                ref={prizeIconRef}
                className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl p-5 shadow-[0_0_20px_#FFD700] animate-[pulse_2s_infinite] transition-all duration-200 flex items-center justify-center"
              >
                <Trophy className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Total Prize Pool</h3>
                <p className="text-gray-400 text-sm">Cash prizes for top teams</p>
              </div>
            </div>
            <div 
              ref={prizeAmountRef}
              className="text-5xl md:text-6xl font-bold text-[#FFD700] transition-all duration-200"
              style={{ textShadow: '0 0 15px #FFA500' }}
            >
              <span className="font-mono">₹{count.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pan {
          from { background-position: 0% 0%; }
          to { background-position: 100% 100%; }
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px #FFD700; }
          50% { box-shadow: 0 0 35px #FFA500; }
        }
        
        .flash {
          opacity: 1 !important;
        }
        
        .glow {
          text-shadow: 0 0 25px #ffffff, 0 0 15px #FFD700 !important;
        }
        
        .icon-glow {
          box-shadow: 0 0 40px #ffffff !important;
          transform: scale(1.05) !important;
        }
        
        .container-glow {
          box-shadow: 0 0 50px rgba(173, 216, 230, 0.7) !important;
        }
      `}</style>
    </section>
  );
};

export default PrizePoolSection;
