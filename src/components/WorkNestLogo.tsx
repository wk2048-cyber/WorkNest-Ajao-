import React from 'react';

interface WorkNestLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showGlow?: boolean;
}

export const WorkNestLogo: React.FC<WorkNestLogoProps> = ({
  size = 'md',
  className = '',
  showGlow = true
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  const dimension = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${dimension} ${className} group`}>
      {/* Intriguing Ambient Back-glow in Warm Amber / Light Brown */}
      {showGlow && (
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 via-[#C59A68]/30 to-[#8B6239]/40 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-80 pointer-events-none" />
      )}

      {/* Futuristic Geometric Vector Monogram Emblem in Warm Earth Tones */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Outer Glass Shield Gradient - Warm Dark Mocha */}
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A1E14" />
            <stop offset="50%" stopColor="#3D2B1C" />
            <stop offset="100%" stopColor="#1E140C" />
          </linearGradient>

          {/* Border Highlight Gradient - Light Brown & Warm Sand */}
          <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9B487" />
            <stop offset="50%" stopColor="#C59A68" />
            <stop offset="100%" stopColor="#8B6239" />
          </linearGradient>

          {/* Left Ribbon (W Start) - Warm Caramel */}
          <linearGradient id="ribbonCaramel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C59A68" />
            <stop offset="50%" stopColor="#E2C49F" />
            <stop offset="100%" stopColor="#8B6239" />
          </linearGradient>

          {/* Center-Right Intersect Ribbon (W to N fold) - Sand Gold */}
          <linearGradient id="ribbonSand" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B6239" />
            <stop offset="60%" stopColor="#D9B487" />
            <stop offset="100%" stopColor="#F5E4CE" />
          </linearGradient>

          {/* Core Energy Flare */}
          <radialGradient id="energyFlare" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#D9B487" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B6239" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Squircle Container with Precision Tech Border */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="18"
          fill="url(#shieldGrad)"
          stroke="url(#shieldBorder)"
          strokeWidth="2"
        />

        {/* Subtle Isometric Grid Texture */}
        <path d="M12 24 L52 24 M12 40 L52 40 M24 12 L24 52 M40 12 L40 52" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />

        {/* Intriguing Interconnected 'W' & 'N' Fold Monogram */}
        {/* Stroke 1: Left Wing of 'W' */}
        <path
          d="M15 20 L23 45 L29 30 L22 18 Z"
          fill="url(#ribbonCaramel)"
        />

        {/* Stroke 2: Center Origami Bridge (Joining W and N seamlessly) */}
        <path
          d="M26 36 L32 46 L40 22 L33 18 Z"
          fill="url(#ribbonSand)"
        />

        {/* Stroke 3: Right Wing forming 'N' Stem */}
        <path
          d="M37 28 L47 45 L49 20 L43 18 Z"
          fill="url(#ribbonCaramel)"
        />

        {/* Center Interlocking Prism Triangle (creates 3D origami depth) */}
        <path
          d="M28 32 L32 44 L36 32 Z"
          fill="#1E140C"
          opacity="0.85"
        />

        {/* Modern Accent: Energy Core Dot (At the focal nexus) */}
        <circle cx="32" cy="27" r="3.5" fill="url(#energyFlare)" />
        <circle cx="32" cy="27" r="1.5" fill="#ffffff" />

        {/* Corner Micro Tech Indicator */}
        <circle cx="50" cy="14" r="2" fill="#D9B487" />
      </svg>
    </div>
  );
};
