import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const RapportStockIcon: React.FC<IconProps> = ({ className = '', color = '#9197B3' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="5" width="16" height="16" rx="2" stroke={color} stroke-width="2"/>
    <path d="M16 2L16 6C16 6.94281 16 7.41421 15.7071 7.7071C15.4142 8 14.9428 8 14 8L10 8C9.05719 8 8.58579 8 8.29289 7.70711C8 7.41421 8 6.94281 8 6L8 2" stroke={color} stroke-width="2" stroke-linecap="round"/>
    <path d="M9 14L15 14" stroke={color} stroke-width="2" stroke-linecap="round"/>
  </svg>
);
