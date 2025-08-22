import { useState, useCallback } from 'react';

interface ClickEffect {
  id: string;
  x: number;
  y: number;
  type: 'meteoroid' | 'blackhole';
  timestamp: number;
}

export const useClickEffects = () => {
  const [effects, setEffects] = useState<ClickEffect[]>([]);

  const createEffect = useCallback((x: number, y: number, type: 'meteoroid' | 'blackhole' = 'meteoroid') => {
    const effect: ClickEffect = {
      id: `effect-${Date.now()}-${Math.random()}`,
      x,
      y,
      type,
      timestamp: Date.now()
    };

    console.log('Creating effect:', effect); // Debug log
    setEffects(prev => [...prev, effect]);

    // Remove effect after animation completes
    const duration = type === 'meteoroid' ? 1500 : 2000;
    setTimeout(() => {
      setEffects(prev => prev.filter(e => e.id !== effect.id));
    }, duration);
  }, []);

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    const x = event.clientX;
    const y = event.clientY;
    
    console.log('Click at:', x, y); // Debug log
    
    // Create meteoroid blast first
    createEffect(x, y, 'meteoroid');
    
    // Then create black hole effect after short delay
    setTimeout(() => {
      createEffect(x, y, 'blackhole');
    }, 300);
  }, [createEffect]);

  return { effects, handleClick };
};