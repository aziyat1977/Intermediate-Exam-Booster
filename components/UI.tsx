import React from 'react';
import { ChevronRight, Mic, Play, RotateCcw } from 'lucide-react';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`surgical-card p-6 md:p-8 relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-surgical-300 via-surgical-500 to-surgical-300 opacity-50"></div>
    {children}
  </div>
);

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95";
  const variants = {
    primary: "surgical-btn text-white",
    secondary: "bg-white text-surgical-700 border border-surgical-200 shadow-sm hover:bg-surgical-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-2 bg-surgical-100 rounded-full overflow-hidden shadow-inner-3d mt-4">
      <div 
        className="h-full bg-surgical-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(14,165,233,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-surgical-100 text-surgical-700' }) => (
  <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${color} border border-white/50 shadow-sm`}>
    {children}
  </span>
);