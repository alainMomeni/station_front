import React from 'react';
import { FC } from 'react';
import { IconProps } from '@components/types/sidebar/sidebarTypes';
import { ChevronDown, ChevronUp } from "lucide-react";

interface SidebarItemProps {
  icon: FC<IconProps>;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  title,
  children,
  isOpen,
  onClick
}) => {
  return (
    <div className="mb-2">
      <div
        className="flex items-center px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100"
        onClick={onClick}
      >
        <Icon className="w-6 h-6 mr-4" color="#292D32" />
        <span className="ml-2 text-sm text-customIndigoFade">{title}</span>
        {isOpen ? (
          <ChevronUp className="ml-auto h-4 text-customIndigoFade" />
        ) : (
          <ChevronDown className="ml-auto h-4 text-customIndigoFade" />
        )}
      </div>
      <div className={`mt-1 space-y-1 ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default SidebarItem;