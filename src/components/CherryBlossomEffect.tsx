import { useEffect, useRef } from 'react';

const CherryBlossomEffect = ({ targetId }: { targetId: string }) => {
  const effectOverlayRef = useRef<HTMLDivElement>(null);
  const petalContainerRef = useRef<HTMLDivElement>(null);
  const blossomInterval = useRef<NodeJS.Timeout | null>(null);
  const isEffectActive = useRef(false);
  const colors = ['#D81B60', '#C2185B', '#AD1457', '#880E4F', '#F06292'];

  useEffect(() => {
    const syncPosition = () => {
      const offerBox = document.getElementById(targetId);
      if (!offerBox || !petalContainerRef.current) return;
      
      const rect = offerBox.getBoundingClientRect();
      
      if (petalContainerRef.current) {
        petalContainerRef.current.style.top = `${rect.top}px`;
        petalContainerRef.current.style.left = `${rect.left}px`;
        petalContainerRef.current.style.width = `${rect.width}px`;
        petalContainerRef.current.style.height = `${rect.height}px`;
      }
    };

    const createPetal = () => {
      if (!petalContainerRef.current) return;
      
      const petalWrapper = document.createElement('div');
      petalWrapper.className = 'absolute top-0';
      
      const petal = document.createElement('div');
      
      const fallDuration = Math.random() * 8 + 7;
      const flutterDuration = Math.random() * 2 + 3;
      const size = Math.random() * 5 + 10;
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      petalWrapper.style.left = `${Math.random() * 100}%`;
      petalWrapper.style.animation = `fall ${fallDuration}s linear ${Math.random() * 5}s forwards`;
      
      petal.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${randomColor};
        border-radius: 0 50% 50% 50%;
        opacity: ${Math.random() * 0.5 + 0.5};
        animation: flutter ${flutterDuration}s ease-in-out infinite;
      `;
      
      petalWrapper.appendChild(petal);
      petalContainerRef.current.appendChild(petalWrapper);
      
      setTimeout(() => {
        if (petalWrapper.parentNode) {
          petalWrapper.parentNode.removeChild(petalWrapper);
        }
      }, fallDuration * 1000 + 5000);
    };

    const startEffect = () => {
      if (isEffectActive.current) return;
      isEffectActive.current = true;

      if (!effectOverlayRef.current) return;
      
      effectOverlayRef.current.classList.add('opacity-100', 'visible');
      effectOverlayRef.current.classList.remove('opacity-0', 'invisible');
      
      syncPosition();
      
      // Create initial petals
      for (let i = 0; i < 50; i++) {
        createPetal();
      }
      
      // Continue creating petals at intervals
      blossomInterval.current = setInterval(createPetal, 500);
    };

    const stopEffect = () => {
      if (!isEffectActive.current) return;
      isEffectActive.current = false;

      if (!effectOverlayRef.current || !petalContainerRef.current) return;
      
      effectOverlayRef.current.classList.remove('opacity-100', 'visible');
      effectOverlayRef.current.classList.add('opacity-0', 'invisible');
      
      if (blossomInterval.current) {
        clearInterval(blossomInterval.current);
        blossomInterval.current = null;
      }
      
      petalContainerRef.current.innerHTML = '';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startEffect();
          } else {
            stopEffect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      observer.observe(targetElement);
      
      const handleResize = () => {
        if (isEffectActive.current) {
          syncPosition();
        }
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize);
      
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize);
        stopEffect();
      };
    }
  }, [targetId]);

  return (
    <div 
      ref={effectOverlayRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999] opacity-0 invisible transition-opacity duration-500"
    >
      <div 
        ref={petalContainerRef} 
        className="absolute overflow-hidden w-full h-full"
      />
    </div>
  );
};

export default CherryBlossomEffect;
