import React, { useEffect, useState } from 'react';
import { VisualPoint } from '../types';

interface Timeline3DProps {
  points: VisualPoint[];
  context?: string;
}

export const Timeline3D: React.FC<Timeline3DProps> = ({ points, context }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to let the layout settle before triggering the sequence
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getColorTheme = (color?: string) => {
    switch (color) {
      case 'green': return { 
        blade: 'bg-emerald-500', 
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.8)]', 
        text: 'text-emerald-900',
        bgCard: 'bg-emerald-50',
        border: 'border-emerald-500',
        arrow: 'border-t-emerald-500'
      };
      case 'red': return { 
        blade: 'bg-rose-500', 
        glow: 'shadow-[0_0_20px_rgba(244,63,94,0.8)]', 
        text: 'text-rose-900',
        bgCard: 'bg-rose-50',
        border: 'border-rose-500',
        arrow: 'border-t-rose-500'
      };
      case 'purple': return { 
        blade: 'bg-violet-500', 
        glow: 'shadow-[0_0_20px_rgba(139,92,246,0.8)]', 
        text: 'text-violet-900',
        bgCard: 'bg-violet-50',
        border: 'border-violet-500',
        arrow: 'border-t-violet-500'
      };
      case 'orange': return { 
        blade: 'bg-amber-500', 
        glow: 'shadow-[0_0_20px_rgba(245,158,11,0.8)]', 
        text: 'text-amber-900',
        bgCard: 'bg-amber-50',
        border: 'border-amber-500',
        arrow: 'border-t-amber-500'
      };
      default: return { 
        blade: 'bg-sky-500', 
        glow: 'shadow-[0_0_20px_rgba(14,165,233,0.8)]', 
        text: 'text-sky-900',
        bgCard: 'bg-sky-50',
        border: 'border-sky-500',
        arrow: 'border-t-sky-500'
      };
    }
  };

  const getPosition = (percentage: number) => {
    // Keep elements within readable bounds
    return Math.max(8, Math.min(92, percentage));
  };

  return (
    <div className="w-full py-16 px-2 relative min-h-[320px] flex flex-col justify-center perspective-1000 overflow-hidden">
      
      <style>{`
        @keyframes bladeInsert {
          0% { transform: translateY(-100px) scaleY(0); opacity: 0; }
          60% { transform: translateY(10px) scaleY(1.1); opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        
        @keyframes hudPop {
          0% { transform: scale(0.5) translateY(10px); opacity: 0; }
          80% { transform: scale(1.05) translateY(-2px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes streamData {
          0% { background-position: 0 0; }
          100% { background-position: 50px 0; }
        }

        @keyframes photonRun {
          0% { left: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
      `}</style>

      {/* Context Title - Floating Background */}
      {context && (
        <div className={`absolute top-0 left-0 right-0 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <h3 className="text-3xl md:text-5xl font-black text-slate-300/30 uppercase tracking-[0.2em] select-none">
            {context}
          </h3>
        </div>
      )}

      {/* Main Track Container */}
      <div className="relative w-full h-12 md:h-16 flex items-center z-10">
        
        {/* The Rail */}
        <div className="absolute left-0 right-0 h-3 bg-slate-800 rounded-full overflow-hidden shadow-2xl">
           
           {/* Moving Data Pattern Background (Stripes) */}
           <div className="absolute inset-0 opacity-30" 
                style={{ 
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)',
                  animation: 'streamData 1s linear infinite'
                }}>
           </div>

           {/* The Photon Runner (Real Movement - White Hot Pulse) */}
           <div className={`absolute top-0 bottom-0 w-40 bg-gradient-to-r from-transparent via-white to-transparent mix-blend-overlay ${isVisible ? '' : 'hidden'}`}
                style={{ animation: 'photonRun 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
           </div>
        </div>

        {/* Nodes (Blades) */}
        {points.map((point, index) => {
          const theme = getColorTheme(point.color);
          const leftPos = getPosition(point.percentage);
          const delay = index * 300; // Fast stagger

          return (
            <div 
              key={index}
              className="absolute top-0 bottom-0 w-1 flex flex-col items-center justify-center z-20"
              style={{ left: `${leftPos}%` }}
            >
              
              {/* THE BLADE (Vertical Laser Cut) */}
              <div 
                className={`w-1 md:w-1.5 h-40 ${theme.blade} ${theme.glow} rounded-full`}
                style={{ 
                  animation: isVisible ? `bladeInsert 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards` : 'none',
                  animationDelay: `${delay}ms`,
                  opacity: 0,
                  transformOrigin: 'top'
                }}
              ></div>

              {/* HUD CARD (Top Label) - MASSIVE CLARITY */}
              <div 
                className={`absolute -top-20 min-w-[140px] p-4 rounded-xl border-2 ${theme.border} ${theme.bgCard} shadow-xl text-center transform origin-bottom z-50`}
                style={{ 
                  animation: isVisible ? `hudPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : 'none',
                  animationDelay: `${delay + 300}ms`,
                  opacity: 0
                }}
              >
                <div className={`text-2xl md:text-3xl font-black ${theme.text} leading-none tracking-tight mb-1`}>{point.label}</div>
                
                {/* Connector Arrow */}
                <div className={`w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] ${theme.arrow} absolute -bottom-[12px] left-1/2 -translate-x-1/2 filter drop-shadow-sm`}></div>
              </div>

              {/* SUB LABEL (Bottom Example) - EXPLICIT ON TIMELINE */}
              {point.subLabel && (
                <div 
                  className={`absolute top-5 mt-16 min-w-[120px] bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-[0_5px_10px_rgba(0,0,0,0.1)] text-center`}
                  style={{ 
                     animation: isVisible ? `hudPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : 'none',
                     animationDelay: `${delay + 500}ms`,
                     opacity: 0
                  }}
                >
                  <span className="text-slate-600 font-bold text-sm leading-tight block">{point.subLabel}</span>
                </div>
              )}

              {/* Glowing Junction Point (Where Blade meets Rail) */}
              <div 
                className={`absolute w-4 h-4 rounded-full bg-white border-2 ${theme.border} shadow-[0_0_10px_white] z-30`}
                style={{
                    animation: isVisible ? `hudPop 0.3s ease-out forwards` : 'none',
                    animationDelay: `${delay + 200}ms`,
                    opacity: 0
                }}
              ></div>

            </div>
          );
        })}

      </div>
    </div>
  );
};