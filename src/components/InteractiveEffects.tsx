import React from 'react';

interface Effect {
  id: string;
  x: number;
  y: number;
  type: 'meteoroid' | 'blackhole';
  timestamp: number;
}

interface InteractiveEffectsProps {
  effects: Effect[];
}

const InteractiveEffects: React.FC<InteractiveEffectsProps> = ({ effects }) => {
  console.log('Rendering effects:', effects); // Debug log
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {effects.map((effect) => (
        <div
          key={effect.id}
          className={`absolute ${
            effect.type === 'meteoroid' ? 'meteoroid-blast' : 'black-hole-effect'
          }`}
          style={{
            left: effect.x - 40,
            top: effect.y - 40,
            zIndex: 1000,
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveEffects;