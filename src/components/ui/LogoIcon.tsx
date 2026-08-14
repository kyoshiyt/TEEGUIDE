import React from 'react';

export function LogoIcon({ className = "h-8 w-8", isDark = false }: { className?: string, isDark?: boolean }) {
  const primaryColor = isDark ? "#FFFFFF" : "#0A1118"; // Darker navy/black
  const accentColor = "#B59A7E"; // The tan color

  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* We use a mask to cut the T-shirt shape OUT of the circle shapes */}
        <mask id="tshirt-mask">
          {/* Everything white stays */}
          <rect width="200" height="200" fill="white" />
          
          {/* The t-shirt shape, colored black so it is removed from the letters beneath */}
          <g fill="black">
            {/* T-shirt Body */}
            <path d="M 60 110 L 140 110 L 140 170 L 60 170 Z" />
            {/* T-shirt Sleeves and shoulders */}
            <path d="M 60 110 L 35 125 L 25 110 L 80 80 L 120 80 L 175 110 L 165 125 L 140 110 Z" />
            {/* Neck hole */}
            <circle cx="100" cy="80" r="18" fill="white" /> 
            {/* Additional cutout for the G bar gap */}
            <rect x="155" y="80" width="10" height="40" fill="black" />
          </g>
        </mask>
      </defs>

      <g mask="url(#tshirt-mask)">
        {/* T Top Bar (Slanted right side) */}
        <polygon points="10,15 150,15 115,50 10,50" fill={primaryColor} />
        
        {/* T Left Semi-Circle */}
        <path d="M 100 50 A 75 75 0 0 0 100 200 Z" fill={primaryColor} />
        
        {/* G Right Semi-Circle (tan color) */}
        {/* Start at bottom center, arc up to right edge, go flat left to center, straight down */}
        <path d="M 100 200 A 75 75 0 0 0 175 125 L 175 85 L 100 85 Z" fill={accentColor} />
      </g>

      {/* Hanger inside the white space */}
      {/* Hook */}
      <path d="M 94 65 C 88 60, 92 48, 100 48 C 108 48, 110 58, 100 68 L 100 82" fill="none" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
      {/* Hanger Base */}
      <polygon points="100,82 60,105 140,105" fill="none" stroke={primaryColor} strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}
