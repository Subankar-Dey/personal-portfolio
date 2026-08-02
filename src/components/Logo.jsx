import React, { useId } from 'react';

export const Logo = ({ className = "w-10 h-10" }) => {
  const id = useId();
  // Sanitize ID for SVG use (remove colons)
  const safeId = id.replace(/:/g, '');
  
  return (
    <div className={`${className} relative group cursor-pointer`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
      >
        <defs>
          {/* Vibrant Main Gradient */}
          <linearGradient id={`logo-grad-main-${safeId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          {/* Premium Glass Highlights */}
          <linearGradient id={`logo-grad-glass-${safeId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="50%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </linearGradient>

          {/* Ultra-Visible 3D Shadow */}
          <filter id={`logo-depth-${safeId}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feOffset dx="3" dy="3" result="offsetBlur" />
            <feFlood floodColor="#000000" floodOpacity="0.6" result="shadowColor" />
            <feComposite in="shadowColor" in2="offsetBlur" operator="in" result="shadow" />
            <feComposite in="SourceGraphic" in2="shadow" operator="over" />
          </filter>

          {/* Sharp Edge Highlight */}
          <filter id={`logo-shine-${safeId}`}>
            <feSpecularLighting surfaceScale="5" specularConstant="1" specularExponent="40" lightingColor="#ffffff">
              <fePointLight x="-50" y="-50" z="100" />
            </feSpecularLighting>
            <feComposite in="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* 1. Backdrop Glow (Static visibility) */}
        <circle cx="50" cy="50" r="35" fill="url(#logo-grad-main-${safeId})" fillOpacity="0.15" filter="url(#logo-glass-blur-${safeId})" />

        {/* 2. Bold Base Geometry (Interlocking Mark) */}
        <path
          d="M 25 35 C 25 25, 55 25, 55 45 C 55 65, 25 65, 25 75 C 25 85, 55 85, 55 85"
          stroke={`url(#logo-grad-main-${safeId})`}
          strokeWidth="16"
          strokeLinecap="round"
          filter={`url(#logo-depth-${safeId})`}
        />
        
        <path
          d="M 50 20 L 65 20 C 85 20, 85 80, 65 80 L 50 80"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* 3. The 3D Glass Lens (Overlapping the center) */}
        <rect
          x="40" y="25" width="40" height="50" rx="12"
          fill="rgba(255, 255, 255, 0.1)"
          stroke={`url(#logo-grad-glass-${safeId})`}
          strokeWidth="2"
          filter={`url(#logo-glass-blur-${safeId})`}
          className="backdrop-blur-md"
        />

        {/* 4. High-Contrast SD Initials */}
        <text 
          x="50" 
          y="56" 
          fontFamily="Inter, sans-serif" 
          fontSize="24" 
          fontWeight="900" 
          fill="white" 
          textAnchor="middle" 
          filter={`url(#logo-inner-glow-${safeId})`}
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          SD
        </text>

        {/* 5. Glowing Social Dot */}
        <circle
          cx="86"
          cy="78"
          r="6"
          fill="#f5a623"
          filter={`url(#logo-inner-glow-${safeId})`}
          className="animate-pulse"
        />
      </svg>
      
      {/* Permanent Ambient Glow */}
      <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full -z-10 opacity-60 md:opacity-40" />
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
