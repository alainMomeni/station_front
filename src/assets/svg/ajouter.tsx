import React from 'react';

interface IconProps {
  className?: string;
}

const AddIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}  // Accepter la prop className
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.09091 9.09091V0H10.9091V9.09091H20V10.9091H10.9091V20H9.09091V10.9091H0V9.09091H9.09091Z"
      fill="currentColor"
    />
  </svg>
);

export default AddIcon;
