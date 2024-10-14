import React from 'react';

interface IconProps {
  className?: string;
}

const DesactiverIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M10 0C4.48533 0 0 4.48533 0 10C0 15.5147 4.48533 20 10 20C15.5147 20 20 15.5147 20 10C20 4.48533 15.5147 0 10 0ZM10 18.3333C5.39797 18.3333 1.66667 14.602 1.66667 10C1.66667 5.39797 5.39797 1.66667 10 1.66667C14.602 1.66667 18.3333 5.39797 18.3333 10C18.3333 14.602 14.602 18.3333 10 18.3333Z" fill="currentColor"/>
    <path d="M13.3333 6.66667L6.66667 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default DesactiverIcon;
