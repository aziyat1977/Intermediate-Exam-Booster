import React, { useEffect, useState } from 'react';
import { VisualPoint } from '../types';
import { Sparkles } from 'lucide-react';

interface Timeline3DProps {
  points: VisualPoint[];
  context?: string;
}

export const Timeline3D: React.FC<Timeline3DProps> = ({ points, context }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getSpellTheme = (color?: string) => {
    switch (color) {
      case 'green': return { text: 'text-emerald-400', border: 'border-emerald-500', shadow: 'shadow-emerald-500/50', bg: 'bg-emerald-500' };
      case 'red': return { text: 'text-red-400', border: 'border-red-500', shadow: 'shadow-red-500/50', bg: 'bg-red-500' };
      case 'purple': return { text: 'text-purple-400', border: 'border-purple-500', shadow: 'shadow-purple-500/50', bg: 'bg-purple-500' };
      case 'orange': return { text: 'text-orange-400', border: 'border-orange-500', shadow: 'shadow-orange-500/50', bg: 'bg-orange-500' };
      case 'gold': return { text: 'text-yellow-400', border: 'border-yellow-500', shadow: 'shadow-yellow-500/50', bg: 'bg-yellow-500' };
      default: return { text: 'text-blue-400', border: 'border-blue-500', shadow: 'shadow-blue-500/50', bg: 'bg-blue-500' };
    }
  };

  const getPosition = (percentage: number) => Math.max(8, Math.min(92, percentage));

  return (
    <div className="w-full h-full relative flex flex-col justify-center perspective-1000 overflow-visible">
      
      {/* Context - Holographic Spell Name */}
      {context && (
        <div className={`absolute top-0 left-0 right-0 text-center transition-all duration-1000 z-0 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}`}>
          <h3 className="text-6xl md:text-8xl font-magic font-black text-white/10 uppercase tracking-widest blur-[2px]">
            {context}
          </h3>
        </div>
      )}

      {/* Wand Stream (Main Line) */}
      <div className="relative w-full h-4 flex items-center z-10">
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]"></div>
        <div className="absolute left-0 right-0 h-[2px] bg-white animate-pulse"></div>
        
        {/* Particle Stream */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white] animate-wand" style={{ animationDuration: '3s' }}></div>
        </div>

        {points.map((point, index) => {
          const theme = getSpellTheme(point.color);
          const leftPos = getPosition(point.percentage);
          const delay = index * 300;

          return (
            <div 
              key={index}
              className="absolute top-0 bottom-0 w-1 flex flex-col items-center justify-center z-20"
              style={{ left: `${leftPos}%` }}
            >
              
              {/* Spell Impact Burst */}
              <div 
                className={`absolute w-8 h-8 rounded-full border-2 bg-black ${theme.border} ${theme.shadow.replace('shadow-', 'shadow-[0_0_30px_')} z-30 transition-all duration-500`}
                style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transitionDelay: `${delay}ms`
                }}
              >
                <div className="absolute inset-0 animate-ping opacity-50 rounded-full bg-white"></div>
              </div>

              {/* Vertical Magic Beam */}
              <div 
                className={`w-[2px] h-40 bg-gradient-to-t from-transparent via-white to-transparent opacity-50`}
                style={{ 
                  height: isVisible ? '200px' : '0px',
                  transition: 'height 0.8s ease-out',
                  transitionDelay: `${delay + 100}ms`
                }}
              ></div>

              {/* Label Card - Floating Parchment */}
              <div 
                className={`absolute -top-32 min-w-[140px] p-3 rounded bg-[#0c1220]/90 border ${theme.border} backdrop-blur-md text-center transform-gpu transition-all duration-700 shadow-lg`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(20px) rotateX(90deg)',
                  transitionDelay: `${delay + 200}ms`
                }}
              >
                <div className={`text-xl font-magic font-bold text-white mb-1 drop-shadow-md`}>{point.label}</div>
                {point.subLabel && <div className={`text-xs font-serif uppercase tracking-widest ${theme.text}`}>{point.subLabel}</div>}
                
                {/* Floating Particles around card */}
                <Sparkles className={`absolute -top-4 -right-4 w-6 h-6 ${theme.text} animate-spin-slow`} />
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};