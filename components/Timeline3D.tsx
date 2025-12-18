import React, { useEffect, useState } from 'react';
import { VisualPoint } from '../types';

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

  const getColorTheme = (color?: string) => {
    switch (color) {
      case 'green': return { 
        blade: 'bg-emerald-500', 
        glow: 'shadow-[0_0_30px_rgba(16,185,129,1)]', 
        text: 'text-emerald-400',
        bgCard: 'bg-emerald-900/90',
        border: 'border-emerald-400',
        arrow: 'border-t-emerald-400',
        laser: 'bg-emerald-300'
      };
      case 'red': return { 
        blade: 'bg-rose-600', 
        glow: 'shadow-[0_0_30px_rgba(225,29,72,1)]', 
        text: 'text-rose-400',
        bgCard: 'bg-rose-900/90',
        border: 'border-rose-500',
        arrow: 'border-t-rose-500',
        laser: 'bg-rose-300'
      };
      case 'purple': return { 
        blade: 'bg-violet-600', 
        glow: 'shadow-[0_0_30px_rgba(124,58,237,1)]', 
        text: 'text-violet-400',
        bgCard: 'bg-violet-900/90',
        border: 'border-violet-500',
        arrow: 'border-t-violet-500',
        laser: 'bg-violet-300'
      };
      case 'orange': return { 
        blade: 'bg-amber-500', 
        glow: 'shadow-[0_0_30px_rgba(245,158,11,1)]', 
        text: 'text-amber-400',
        bgCard: 'bg-amber-900/90',
        border: 'border-amber-500',
        arrow: 'border-t-amber-500',
        laser: 'bg-amber-300'
      };
      case 'gold': return {
        blade: 'bg-yellow-500',
        glow: 'shadow-[0_0_40px_rgba(234,179,8,1)]',
        text: 'text-yellow-300',
        bgCard: 'bg-yellow-900/90',
        border: 'border-yellow-400',
        arrow: 'border-t-yellow-400',
        laser: 'bg-yellow-200'
      };
      default: return { 
        blade: 'bg-sky-500', 
        glow: 'shadow-[0_0_30px_rgba(14,165,233,1)]', 
        text: 'text-sky-400',
        bgCard: 'bg-sky-900/90',
        border: 'border-sky-500',
        arrow: 'border-t-sky-500',
        laser: 'bg-sky-300'
      };
    }
  };

  const getPosition = (percentage: number) => {
    return Math.max(8, Math.min(92, percentage));
  };

  return (
    <div className="w-full py-20 px-2 relative min-h-[350px] flex flex-col justify-center perspective-1000 overflow-hidden">
      
      <style>{`
        @keyframes bladeInsert {
          0% { transform: translateY(-200px) scaleY(2); opacity: 0; filter: blur(10px); }
          50% { transform: translateY(20px) scaleY(0.8); opacity: 1; filter: blur(0); }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        
        @keyframes hudPop {
          0% { transform: scale(0) rotateX(90deg); opacity: 0; }
          70% { transform: scale(1.2) rotateX(-20deg); opacity: 1; }
          100% { transform: scale(1) rotateX(0deg); opacity: 1; }
        }

        @keyframes streamData {
          0% { background-position: 0 0; }
          100% { background-position: 200px 0; }
        }

        @keyframes photonRun {
          0% { left: -20%; width: 5%; opacity: 0; }
          20% { width: 30%; opacity: 1; }
          80% { width: 30%; opacity: 1; }
          100% { left: 120%; width: 5%; opacity: 0; }
        }

        @keyframes laserScan {
          0%, 100% { opacity: 0.2; height: 100%; top: 0; }
          50% { opacity: 0.8; height: 120%; top: -10%; box-shadow: 0 0 20px currentColor; }
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(255,255,255, 0.7); }
          70% { transform: scale(2); opacity: 0; box-shadow: 0 0 0 20px rgba(255,255,255, 0); }
          100% { transform: scale(1); opacity: 0; }
        }
        
        .gta-text-shadow {
          text-shadow: 0 0 5px rgba(255,255,255,0.5), 0 0 10px currentColor;
        }
      `}</style>

      {/* Context Title - Floating Background with Holographic effect */}
      {context && (
        <div className={`absolute top-4 left-0 right-0 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-150'}`}>
          <h3 className="text-4xl md:text-6xl font-black text-slate-400/10 uppercase tracking-[0.3em] select-none blur-[1px] transform skew-x-12">
            {context}
          </h3>
        </div>
      )}

      {/* Main Track Container */}
      <div className="relative w-full h-16 flex items-center z-10">
        
        {/* The Rail - High Tech Tube */}
        <div className="absolute left-0 right-0 h-4 bg-slate-900 rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-slate-700/50">
           
           {/* Moving Data Pattern Background (High Speed) */}
           <div className="absolute inset-0 opacity-40" 
                style={{ 
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(255,255,255,0.8) 4px, rgba(255,255,255,0.8) 8px)',
                  animation: 'streamData 0.5s linear infinite',
                  backgroundSize: '200px 100%'
                }}>
           </div>

           {/* The Photon Runner (Super Bright Pulse) */}
           <div className={`absolute top-0 bottom-0 bg-white mix-blend-overlay blur-md ${isVisible ? '' : 'hidden'}`}
                style={{ animation: 'photonRun 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
           </div>
        </div>

        {/* Nodes (Blades) */}
        {points.map((point, index) => {
          const theme = getColorTheme(point.color);
          const leftPos = getPosition(point.percentage);
          const delay = index * 200;

          return (
            <div 
              key={index}
              className="absolute top-0 bottom-0 w-2 flex flex-col items-center justify-center z-20"
              style={{ left: `${leftPos}%` }}
            >
              
              {/* THE BLADE (Laser Beam) */}
              <div 
                className={`w-1.5 md:w-2 h-64 ${theme.blade} ${theme.glow} rounded-full relative overflow-hidden`}
                style={{ 
                  animation: isVisible ? `bladeInsert 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards` : 'none',
                  animationDelay: `${delay}ms`,
                  opacity: 0,
                  transformOrigin: 'top'
                }}
              >
                {/* Internal Laser Scanner */}
                <div className={`absolute left-0 right-0 h-full bg-white/50 animate-pulse`} style={{ animationDuration: '0.2s' }}></div>
              </div>

              {/* HUD CARD (Top Label) - 3D Floating Plate */}
              <div 
                className={`absolute -top-28 min-w-[160px] p-4 rounded-lg border-2 ${theme.border} ${theme.bgCard} shadow-[0_0_40px_rgba(0,0,0,0.5)] text-center transform-gpu z-50 backdrop-blur-md`}
                style={{ 
                  animation: isVisible ? `hudPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : 'none',
                  animationDelay: `${delay + 200}ms`,
                  opacity: 0
                }}
              >
                <div className={`text-2xl md:text-4xl font-black ${theme.text} leading-none tracking-tighter mb-1 gta-text-shadow`}>{point.label}</div>
                {/* Tech Deco Lines */}
                <div className="w-full h-[2px] bg-white/20 mb-2"></div>
                
                {/* Connector Arrow */}
                <div className={`w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] ${theme.arrow} absolute -bottom-[14px] left-1/2 -translate-x-1/2 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]`}></div>
              </div>

              {/* SUB LABEL (Bottom) - Floating Chip */}
              {point.subLabel && (
                <div 
                  className={`absolute top-8 mt-24 min-w-[140px] ${theme.bgCard} px-4 py-2 rounded border ${theme.border} shadow-[0_10px_20px_rgba(0,0,0,0.5)] text-center`}
                  style={{ 
                     animation: isVisible ? `hudPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : 'none',
                     animationDelay: `${delay + 400}ms`,
                     opacity: 0
                  }}
                >
                  <span className={`font-bold text-sm leading-tight block ${theme.text} uppercase tracking-widest`}>{point.subLabel}</span>
                </div>
              )}

              {/* Glowing Junction Point (Where Blade meets Rail) */}
              <div 
                className={`absolute w-6 h-6 rounded-full bg-white border-4 ${theme.border} shadow-[0_0_20px_white] z-30`}
                style={{
                    animation: isVisible ? `pulseRing 2s infinite` : 'none',
                    animationDelay: `${delay + 200}ms`,
                    opacity: 1 // Keep visible
                }}
              ></div>
              <div className={`absolute w-4 h-4 rounded-full bg-white z-40`}></div>

            </div>
          );
        })}

      </div>
    </div>
  );
};