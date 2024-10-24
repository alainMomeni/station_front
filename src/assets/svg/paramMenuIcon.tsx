import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

// src/components/icons/ParamMenuIcon.tsx
export const ParamMenuIcon: React.FC<IconProps> = ({ className = '', color = '#292D32' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75" fill={color}/>
    <path d="M15.21 22.19C15 22.19 14.79 22.16 14.58 22.11C13.96 21.94 13.44 21.55 13.11 21L12.99 20.8C12.4 19.78 11.59 19.78 11 20.8L10.89 20.99C10.56 21.55 10.04 21.95 9.42 22.11C8.79 22.28 8.14 22.19 7.59 21.86L5.87 20.87C5.26 20.52 4.82 19.95 4.63 19.26C4.45 18.57 4.54 17.86 4.89 17.25C5.18 16.74 5.26 16.28 5.09 15.99C4.92 15.7 4.49 15.53 3.9 15.53C2.44 15.53 1.25 14.34 1.25 12.88V11.12C1.25 9.65998 2.44 8.46998 3.9 8.46998C4.49 8.46998 4.92 8.29998 5.09 8.00998C5.26 7.71998 5.19 7.25998 4.89 6.74998C4.54 6.13998 4.45 5.41998 4.63 4.73998C4.81 4.04998 5.25 3.47998 5.87 3.12998L7.6 2.13998C8.73 1.46998 10.22 1.85998 10.9 3.00998L11.02 3.20998C11.61 4.22998 12.42 4.22998 13.01 3.20998L13.12 3.01998C13.8 1.85998 15.29 1.46998 16.43 2.14998L18.15 3.13998C18.76 3.48998 19.2 4.05998 19.39 4.74998C19.57 5.43998 19.48 6.14998 19.13 6.75998C18.84 7.26998 18.76 7.72998 18.93 8.01998C19.1 8.30998 19.53 8.47998 20.12 8.47998C21.58 8.47998 22.77 9.66998 22.77 11.13V12.89C22.77 14.35 21.58 15.54 20.12 15.54C19.53 15.54 19.1 15.71 18.93 16C18.76 16.29 18.83 16.75 19.13 17.26C19.48 17.87 19.58 18.59 19.39 19.27C19.21 19.96 18.77 20.53 18.15 20.88L16.42 21.87C16.04 22.08 15.63 22.19 15.21 22.19ZM12 18.49C12.89 18.49 13.72 19.05 14.29 20.04L14.4 20.23C14.52 20.44 14.72 20.59 14.96 20.65C15.2 20.71 15.44 20.68 15.64 20.56L17.37 19.56C17.63 19.41 17.83 19.16 17.91 18.86C17.99 18.56 17.95 18.25 17.8 17.99C17.23 17.01 17.16 16 17.6 15.23C18.04 14.46 18.95 14.02 20.09 14.02C20.73 14.02 21.24 13.51 21.24 12.87V11.11C21.24 10.48 20.73 9.95998 20.09 9.95998C18.95 9.95998 18.04 9.51998 17.6 8.74998C17.16 7.97998 17.23 6.96998 17.8 5.98998C17.95 5.72998 17.99 5.41998 17.91 5.11998C17.83 4.81998 17.64 4.57998 17.38 4.41998L15.65 3.42998C15.22 3.16998 14.65 3.31998 14.39 3.75998L14.28 3.94998C13.71 4.93998 12.88 5.49998 11.99 5.49998C11.1 5.49998 10.27 4.93998 9.7 3.94998L9.59 3.74998C9.34 3.32998 8.78 3.17998 8.35 3.42998L6.62 4.42998C6.36 4.57998 6.16 4.82998 6.08 5.12998C6 5.42998 6.04 5.73998 6.19 5.99998C6.76 6.97998 6.83 7.98998 6.39 8.75998C5.95 9.52998 5.04 9.96998 3.9 9.96998C3.26 9.96998 2.75 10.48 2.75 11.12V12.88C2.75 13.51 3.26 14.03 3.9 14.03C5.04 14.03 5.95 14.47 6.39 15.24C6.83 16.01 6.76 17.02 6.19 18C6.04 18.26 6 18.57 6.08 18.87C6.16 19.17 6.35 19.41 6.61 19.57L8.34 20.56C8.55 20.69 8.8 20.72 9.03 20.66C9.27 20.6 9.47 20.44 9.6 20.23L9.71 20.04C10.28 19.06 11.11 18.49 12 18.49Z" fill={color}/>
  </svg>
);