import React from 'react';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`art-3d-card p-4 md:p-6 relative ${className}`}>
    {children}
  </div>
);

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-6 py-3 font-bold text-base tracking-wide flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group";
  const variants = {
    primary: "art-3d-btn-primary hover:brightness-110",
    secondary: "art-3d-btn-secondary hover:text-surgical-600 dark:hover:text-surgical-400 hover:shadow-lg hover:-translate-y-0.5"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
    </button>
  );
};

export const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 relative overflow-hidden shadow-inner-light dark:shadow-inner-dark">
      <div 
        className="h-full bg-gradient-to-r from-surgical-400 to-surgical-600 shadow-[0_0_10px_rgba(14,165,233,0.5)] transition-all duration-700 ease-out rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-surgical-100 text-surgical-700' }) => (
  <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm ${color}`}>
    {children}
  </span>
);