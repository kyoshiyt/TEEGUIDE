import React from 'react';

export function Logo({ className = "h-12", isDark = false }: { className?: string, isDark?: boolean }) {
  const primaryColor = isDark ? "#FFFFFF" : "#0B132B";
  const accentColor = "#D5A575"; // closer to gold/tan

  return (
    <svg viewBox="0 0 400 160" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* T Shape */}
      <path d="M 120 10 L 280 10 L 280 30 L 210 30 L 210 90 A 30 30 0 0 1 150 90 L 150 30 L 120 30 Z" fill={primaryColor} />
      
      {/* G Shape overlapping */}
      <path d="M 210 90 A 40 40 0 0 0 290 50 L 320 50 L 320 60 A 70 70 0 0 1 180 120 L 210 90 Z" fill={accentColor} />
      
      {/* T-Shirt Hanger inside */}
      <path d="M 200 45 L 180 60 L 180 80 L 220 80 L 220 60 Z" fill="none" stroke={primaryColor} strokeWidth="3" />
      <circle cx="200" cy="40" r="4" fill="none" stroke={primaryColor} strokeWidth="2" />
      
      {/* Text TEEGUIDE */}
      <text x="200" y="145" fontFamily="sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" letterSpacing="8">
        <tspan fill={primaryColor}>TEE</tspan>
        <tspan fill={accentColor}>GUIDE</tspan>
      </text>

      {/* Slogan */}
      <text x="200" y="158" fontFamily="sans-serif" fontSize="7" fontWeight="normal" textAnchor="middle" letterSpacing="4" fill={isDark ? '#A8A29E' : '#444'}>
        FIND. COMPARE. WEAR BETTER.
      </text>
    </svg>
  );
}
