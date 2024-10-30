import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const RapportSuiviIcon: React.FC<IconProps> = ({ className = '', color = '#9197B3' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="5" y="4" width="14" height="17" rx="2" stroke={color} stroke-width="2"/>
    <path d="M9 9H15" stroke={color}  stroke-width="2" stroke-linecap="round"/>
    <path d="M9 13H15" stroke={color}  stroke-width="2" stroke-linecap="round"/>
    <path d="M9 17H13" stroke={color}  stroke-width="2" stroke-linecap="round"/>
  </svg>
);