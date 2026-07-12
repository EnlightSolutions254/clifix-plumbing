import React from 'react';

interface ClimateTechLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ClimateTechLogo({ 
  theme = 'light', 
  className = '', 
  iconSize = 'md' 
}: ClimateTechLogoProps) {
  
  // Icon sizing classes
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textClasses = {
    light: {
      title: 'text-gray-900',
      subtitle: 'text-gray-700',
    },
    dark: {
      title: 'text-white',
      subtitle: 'text-brand-200/90',
    }
  };

  const currentText = textClasses[theme];

  return (
    <div className={`flex items-center gap-3 font-sans select-none ${className}`} id="climate-tech-logo-container">
      {/* Red CTL Monogram Symbol */}
      <div className={`relative flex-shrink-0 ${sizeClasses[iconSize]}`} id="climate-tech-symbol">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer circle C-arc (thick red, open on the right) */}
          <path
            d="M 82,30 A 38,38 0 1,0 82,70"
            stroke="#FF0000"
            strokeWidth="13"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          
          {/* Top horizontal bar going all the way across */}
          <path
            d="M 18,30 H 82"
            stroke="#FF0000"
            strokeWidth="13"
            strokeLinecap="butt"
          />

          {/* Central 'T' vertical stem going from top of circle to bottom */}
          <path
            d="M 50,12 V 88"
            stroke="#FF0000"
            strokeWidth="13"
            strokeLinecap="butt"
          />

          {/* Middle-right 'L' step shape */}
          <path
            d="M 50,56 H 68 V 70 H 82"
            stroke="#FF0000"
            strokeWidth="13"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      {/* Brand Text ("Climate Tech" and "Limited") */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-lg md:text-xl tracking-tight ${currentText.title}`}>
          Climate Tech
        </span>
        <span className={`font-sans font-medium text-xs md:text-sm tracking-wide mt-0.5 ${currentText.subtitle}`}>
          Limited
        </span>
      </div>
    </div>
  );
}
