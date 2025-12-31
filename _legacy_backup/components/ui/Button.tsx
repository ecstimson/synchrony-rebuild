import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  ...props 
}) => {
  // Base styles: Boxy but slightly rounded, uppercase, tracking wide, geometric feel
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-sm";
  
  const variants = {
    // Solid Navy
    primary: "bg-navy text-white hover:bg-navy-light hover:shadow-lg active:translate-y-0.5",
    
    // Ghost White / Light Grey
    secondary: "bg-ghost text-navy hover:bg-gray-200 hover:shadow-md",
    
    // Outline Navy
    outline: "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white",

    // White (for dark backgrounds)
    white: "bg-white text-navy hover:bg-ghost hover:shadow-lg"
  };

  const sizes = {
    sm: "h-10 px-6 text-xs",
    md: "h-14 px-8 text-sm", // Luxury standard height
    lg: "h-16 px-10 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};