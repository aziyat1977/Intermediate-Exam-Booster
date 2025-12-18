import React from 'react';
import { ChevronRight, Mic, Play, RotateCcw } from 'lucide-react';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`art-3d-card p-8 md:p-10 relative overflow-hidden ${className}`}>
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    {children}
  </div>
);

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-8 py-4 font-bold text-lg tracking-wide flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "art-3d-btn-primary",
    secondary: "art-3d-btn-secondary hover:text-surgical-600"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-4 art-3d-tube mt-6 relative p-1">
      <div 
        className="h-full art-3d-tube-fill transition-all duration-700 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-surgical-100 text-surgical-700' }) => (
  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] ${color}`}>
    {children}
  </span>
);