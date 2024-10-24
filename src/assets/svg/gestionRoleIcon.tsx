import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

// src/components/icons/ParamMenuIcon.tsx
export const GestionRoleIcon: React.FC<IconProps> = ({ className = '', color = '#9197B3' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059" strokeWidth="1.5" stroke={color}/>
    <circle cx="12" strokeWidth="1.5" cy="10" r="3" stroke={color} stroke-linecap="round"/>
    <rect x="2.5" y="2.5" width="19" strokeWidth="1.5" height="19" rx="3.5" stroke={color}/>
  </svg>
);
