import React from 'react';

export const Logo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 260 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Network Nodes (Left) */}
        <circle cx="20" cy="30" r="5" fill="#0B1C3E" />
        <circle cx="35" cy="15" r="5" fill="#0B1C3E" />
        <circle cx="35" cy="45" r="5" fill="#0B1C3E" />
        <circle cx="50" cy="30" r="6" fill="#00D4FF" /> {/* Central node */}
        
        {/* Connections */}
        <path d="M20 30 L50 30" stroke="#0B1C3E" strokeWidth="2" />
        <path d="M35 15 L50 30" stroke="#0B1C3E" strokeWidth="2" />
        <path d="M35 45 L50 30" stroke="#0B1C3E" strokeWidth="2" />
        
        {/* Arrow Shape (Right) */}
        <path d="M60 10 L90 30 L60 50" stroke="#0B1C3E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M75 10 L105 30 L75 50" stroke="#00D4FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        
        {/* Text */}
        <text x="120" y="42" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="32" fill="#0B1C3E">Lypsyos</text>
      </svg>
    </div>
  );
};
