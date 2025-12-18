import React, { useEffect, useState } from 'react';
import { VisualPoint } from '../types';

interface Timeline3DProps {
  points: VisualPoint[];
  context?: string;
}

export const Timeline3D: React.FC<Timeline3DProps> = ({ points, context }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to ensure DOM is ready for the entrance sequence
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color?: string) => {
    switch (color) {
      case 'green': return { bg: 'from-emerald-400 to-green-600', shadow: 'shadow-green-500/50', border: 'border-green-200' };
      case 'red': return { bg: 'from-rose-400 to-red-600', shadow: 'shadow-red-500/50', border: 'border-red-200' };
      case 'purple': return { bg: 'from-violet-400 to-purple-600', shadow: 'shadow-purple-500/50', border: 'border-purple-200' };
      case 'orange': return { bg: 'from-amber-400 to-orange-600', shadow: 'shadow-orange-500/50', border: 'border-orange-200' };
      default: return { bg: 'from-sky-400 to-blue-600', shadow: 'shadow-blue-500/50', border: 'border-blue-200' };
    }
  };

  const getPosition = (percentage: number) => {
    // Clamp to keep within the rounded edges of the track
    return Math.max(8, Math.min(92, percentage));
  };

  return (
    <div className="w-full py-20 px-4 relative min-h-[500px] flex flex-col justify-center perspective-1000">
      
      {/* Custom Styles for Ultra Animation */}
      <style>{`
        @keyframes drawLine {
          from { height: 0; opacity: 0; }
          to { height: var(--target-height); opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes floatNode {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slideUpCard {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px var(--shadow-color); }
          50% { box-shadow: 0 0 40px var(--shadow-color); }
        }
        .node-float {
          animation: floatNode 4s ease-in-out infinite;
        }
      `}</style>

      {/* 3D Floor Shadow / Ambient Depth */}
      <div 
        className={`absolute bottom-10 left-10 right-10 h-16 bg-black/5 blur-3xl rounded-full transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Context Label (Floating Header) */}
      {context && (
        <div className={`absolute top-0 left-0 right-0 flex justify-center z-0 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
          <div className="bg-white/40 backdrop-blur-md px-10 py-3 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.1)] border border-white/60">
            <h4 className="text-surgical-700 font-black tracking-[0.2em] uppercase text-sm md:text-base">{context}</h4>
          </div>
        </div>
      )}

      {/* Main 3D Track */}
      <div className="relative w-full h-24 md:h-32 bg-[#e0e5ec] rounded-full shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] flex items-center px-4 border border-white/40 z-10 overflow-hidden">
        
        {/* Animated Volumetric Shine on Track */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full opacity-50 animate-[shimmer_3s_infinite_linear]" />

        {/* The Central Groove */}
        <div className="absolute left-6 right-6 h-4 bg-slate-200/50 rounded-full shadow-inner overflow-hidden">
             {/* Progress Fill Animation */}
             <div 
                className={`h-full bg-gradient-to-r from-surgical-300 to-surgical-500 shadow-[0_0_15px_rgba(14,165,233,0.6)] rounded-full transition-all duration-[2500ms] ease-out ${isVisible ? 'w-full' : 'w-0'}`} 
             />
        </div>

        {/* Render Visualization Points */}
        {points.map((point, index) => {
          const colors = getColorClasses(point.color);
          const leftPos = getPosition(point.percentage);
          
          // Delays for staggered animation
          const baseDelay = 800 + (index * 400); // Slower, clearer stagger
          
          return (
            <div 
              key={index}
              className="absolute top-1/2"
              style={{ 
                left: `${leftPos}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              
              {/* NODE CONTAINER: Holds the dot and connector */}
              <div 
                 className={`flex flex-col items-center justify-center ${isVisible ? 'node-float' : ''}`}
                 style={{ animationDelay: `${baseDelay + 1000}ms` }} // Start floating after entrance
              >
                  
                  {/* The Connector Line (Draws downwards) */}
                  <div 
                    className="absolute top-full w-1.5 bg-gradient-to-b from-slate-400 to-transparent rounded-full origin-top"
                    style={{ 
                        '--target-height': '6rem',
                        animation: isVisible ? `drawLine 1s cubic-bezier(0.4, 0, 0.2, 1) forwards` : 'none',
                        animationDelay: `${baseDelay + 200}ms`,
                        opacity: 0,
                        height: 0
                    } as React.CSSProperties}
                  />

                  {/* The 3D Sphere Node (Pops in) */}
                  <div 
                    className={`
                      relative w-16 h-16 md:w-20 md:h-20 rounded-full 
                      bg-gradient-to-br ${colors.bg}
                      border-[3px] ${colors.border}
                      flex items-center justify-center
                      z-20 cursor-pointer group
                    `}
                    style={{ 
                        '--shadow-color': point.color === 'red' ? '#f87171' : '#38bdf8',
                        animation: isVisible ? `popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, pulseGlow 3s infinite ease-in-out ${baseDelay + 1000}ms` : 'none',
                        animationDelay: `${baseDelay}ms`,
                        opacity: 0,
                        boxShadow: `0 10px 25px -5px rgba(0,0,0,0.3)`
                    } as React.CSSProperties}
                  >
                     {/* Glossy Reflection */}
                     <div className="absolute top-2 left-3 right-3 h-1/2 bg-gradient-to-b from-white/90 to-transparent rounded-full opacity-60 blur-[1px]" />
                     
                     {/* Inner Core */}
                     <div className="w-4 h-4 bg-white rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] group-hover:scale-125 transition-transform duration-300" />
                  </div>

              </div>

              {/* The Info Card (Slides up from bottom of connector) */}
              <div 
                className="absolute top-36 w-56 -translate-x-1/2"
                style={{ 
                    animation: isVisible ? `slideUpCard 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards` : 'none',
                    animationDelay: `${baseDelay + 600}ms`,
                    opacity: 0 
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-xl p-5 rounded-2xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-transform duration-300 hover:z-50 text-center">
                  
                  {/* Triangle Pointer */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-white/90 filter drop-shadow-sm"></div>
                  
                  <p className="font-extrabold text-slate-800 text-lg leading-tight mb-2 tracking-tight">{point.label}</p>
                  
                  {point.subLabel && (
                    <div className="inline-block bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{point.subLabel}</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};