import React, { useEffect, useState } from 'react';
import { VisualPoint } from '../types';

interface Timeline3DProps {
  points: VisualPoint[];
  context?: string;
}

export const Timeline3D: React.FC<Timeline3DProps> = ({ points, context }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getColor = (color?: string) => {
    switch (color) {
      case 'green': return 'from-emerald-400 to-green-600 shadow-green-400/50';
      case 'red': return 'from-rose-400 to-red-600 shadow-red-400/50';
      case 'purple': return 'from-violet-400 to-purple-600 shadow-purple-400/50';
      case 'orange': return 'from-amber-400 to-orange-600 shadow-orange-400/50';
      default: return 'from-surgical-400 to-surgical-600 shadow-surgical-400/50';
    }
  };

  const getPosition = (percentage: number) => {
    // Ensure points don't fall off the edges too much
    return Math.max(5, Math.min(95, percentage));
  };

  return (
    <div className="w-full py-12 px-2 relative min-h-[400px] flex flex-col justify-center perspective-1000">
      
      {/* Context Label */}
      {context && (
        <div className={`absolute top-0 left-0 w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block bg-[#e0e5ec] px-6 py-2 rounded-full shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] text-slate-500 font-bold uppercase tracking-widest text-sm border border-white/50">
            {context}
          </div>
        </div>
      )}

      {/* Main Track Container */}
      <div className="relative w-full h-16 md:h-24 bg-[#e0e5ec] rounded-full shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff] flex items-center px-4 border border-white/20">
        
        {/* Animated Inner Glow/Fill */}
        <div 
          className={`absolute left-2 top-2 bottom-2 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 blur-xl transition-transform duration-[3s] ease-in-out infinite alternate`} 
        />

        {/* The Axis Line */}
        <div className="absolute left-4 right-4 h-1 bg-slate-300 rounded-full z-0 overflow-hidden">
             <div className={`h-full bg-surgical-500/30 transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`} />
        </div>

        {/* Render Points */}
        {points.map((point, index) => {
          const delay = index * 200 + 500; // Staggered delay
          const isShow = isVisible;
          
          return (
            <div 
              key={index}
              className="absolute top-1/2 z-10 flex flex-col items-center group"
              style={{ 
                left: `${getPosition(point.percentage)}%`,
                transform: 'translate(-50%, -50%)',
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`
              }}
            >
              {/* Connector Line (Vertical) */}
              <div 
                className={`w-1 bg-slate-400 transition-all duration-500 absolute bottom-1/2 shadow-sm ${isShow ? 'h-16 md:h-24 opacity-100' : 'h-0 opacity-0'}`}
                style={{ transitionDelay: `${delay}ms` }}
              />

              {/* The 3D Node */}
              <div 
                className={`
                  relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${getColor(point.color)} 
                  shadow-lg border-2 border-white/40 cursor-pointer
                  transition-all duration-500 transform
                  ${isShow ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-180'}
                  hover:scale-110 hover:-translate-y-2 z-20
                `}
              >
                 <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-white/60 blur-[2px] rounded-full" />
                 {/* Optional Icon or Center Dot */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full shadow-inner" />
                 </div>
              </div>

              {/* Labels Card (Floating) */}
              <div 
                className={`
                   absolute top-20 md:top-28 w-40 md:w-48 text-center
                   transition-all duration-700
                   ${isShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${delay + 200}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                  <p className="font-bold text-slate-800 text-sm md:text-base leading-tight">{point.label}</p>
                  {point.subLabel && (
                    <p className="text-xs text-slate-500 mt-1 font-medium">{point.subLabel}</p>
                  )}
                </div>
                {/* Connecting triangle to card */}
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white/80 absolute -top-2 left-1/2 -translate-x-1/2"></div>
              </div>

            </div>
          );
        })}
      </div>

      {/* 3D Floor Shadow */}
      <div className="absolute bottom-0 left-10 right-10 h-4 bg-black/10 blur-xl rounded-full" />

    </div>
  );
};