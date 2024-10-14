import React from "react";

interface IconProps {
  className?: string;
}

const CancelIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.7144 3.57153L6.42871 7.85725L10.7144 12.143"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.2859 16.4286V13.5715C19.2859 12.0559 18.6839 10.6025 17.6121 9.53085C16.5406 8.45922 15.0871 7.85718 13.5716 7.85718H6.42871"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.00007 3.57153L0.714355 7.85725L5.00007 12.143"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CancelIcon;

