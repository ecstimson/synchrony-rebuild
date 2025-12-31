import React from 'react';

export const Logo: React.FC<{ className?: string; theme?: 'light' | 'dark' }> = ({ className = '', theme = 'light' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-navy';
  const iconMain = theme === 'dark' ? '#FFFFFF' : '#032235';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="32" height="38" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M20 48C20 48 40 40 40 12V4L20 0L0 4V12C0 40 20 48 20 48Z" fill={iconMain}/>
        <path d="M20 44C20 44 36 37 36 14V6L20 2L4 6V14C4 37 20 44 20 44Z" fill={theme === 'dark' ? '#032235' : '#FFFFFF'}/>
        <path d="M20 10V38" stroke="#55B9BE" strokeWidth="4" strokeLinecap="round"/>
        <path d="M10 20L30 28" stroke="#55B9BE" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <div className={`flex flex-col font-bold uppercase leading-none tracking-widest ${textColor}`}>
        <span className="text-lg">Synchrony</span>
        <span className="text-lg text-teal">Labs</span>
      </div>
    </div>
  );
};