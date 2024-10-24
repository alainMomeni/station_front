import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

// src/components/icons/ParamMenuIcon.tsx
export const ParamRepportIcon: React.FC<IconProps> = ({ className = '', color = '#9197B3' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8 10L8 16" stroke={color} stroke-linecap="round" strokeWidth="1.5" stroke-linejoin="round"/>
    <path d="M12 12V16" stroke={color} stroke-linecap="round" strokeWidth="1.5" stroke-linejoin="round"/>
    <path d="M16 8V16" stroke={color} stroke-linecap="round"  strokeWidth="1.5"stroke-linejoin="round"/>
    <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" stroke={color}/>
  </svg>
);
