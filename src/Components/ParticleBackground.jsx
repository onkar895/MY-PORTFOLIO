import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none ">
      {Array.from({ length: 100 }).map((_, i) => {
        const duration = 4 + Math.random() * 10;
        return (
          <div
            key={i}
            className="absolute w-[2.5px] h-[2.5px] opacity-10 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--color': 'white',
              '--duration': `${duration}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ParticleBackground;
