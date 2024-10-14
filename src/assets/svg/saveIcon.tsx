import React from "react";

interface IconProps {
  className?: string;
}

const SaveIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.8571 17.8572C17.8571 18.2361 17.7065 18.5995 17.4387 18.8674C17.1708 19.1352 16.8074 19.2858 16.4285 19.2858H3.57139C3.19251 19.2858 2.82915 19.1352 2.56124 18.8674C2.29334 18.5995 2.14282 18.2361 2.14282 17.8572V2.14293C2.14282 1.76404 2.29334 1.40068 2.56124 1.13277C2.82915 0.864865 3.19251 0.714355 3.57139 0.714355H12.8571L17.8571 5.71436V17.8572Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8571 11.4287L9.99997 14.2859L7.14282 11.4287"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.2859V6.42871"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SaveIcon;
