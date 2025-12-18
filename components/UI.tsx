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
  const baseStyle = "px-6 py-3 font-bold text-base tracking-wide flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200";
  const variants = {
    primary: "art-3d-btn-primary",
    secondary: "art-3d-btn-secondary hover:text-surgical-600 hover:shadow-lg"
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
    <div className="w-full h-2 art-3d-tube mt-2 relative p-[1px]">
      <div 
        className="h-full art-3d-tube-fill transition-all duration-700 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-surgical-100 text-surgical-700' }) => (
  <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${color}`}>
    {children}
  </span>
);