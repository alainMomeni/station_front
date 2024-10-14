import React from 'react';

interface IconProps {
  className?: string;
}

const EditIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M5.92971 19.283L5.95151 19.2775L8.58384 18.6194C9.04877 18.5037 9.2278 18.4023 9.71248 17.9947C9.74527 17.9618 16.9393 10.7678 16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.7333 9.91573 18.0858 9C18.0858 8.63961 17.7333 8.34719 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L13.2555 7.03739L6.03816 14.2547Z" stroke="currentColor"/>
    <path d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z" fill="currentColor"/>
  </svg>
);

export default EditIcon;


