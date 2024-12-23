import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const RingIcon: React.FC<IconProps> = ({ className = '', color = '#B0C3CC' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path id="Notif Icon" d="M10 20C8.62006 19.9946 7.50115 19.1039 7.4875 18H12.4875C12.4901 18.2674 12.4264 18.5325 12.3 18.78C11.9721 19.382 11.3023 19.8211 10.5 19.96H10.4938H10.475H10.4525H10.4412C10.296 19.9842 10.1483 19.9976 10 20ZM20 17H0V15L2.5 14V8.5C2.43415 7.08912 2.83242 5.68913 3.655 4.44C4.4738 3.28151 5.87337 2.45888 7.5 2.18V0H12.5V2.18C15.7238 2.794 17.5 5.038 17.5 8.5V14L20 15V17Z" fill={color}/>
  </svg>
);
