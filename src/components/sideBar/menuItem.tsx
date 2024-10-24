import React, { useState } from 'react';
import { MenuItemType } from '@/components/types/sidebar/sidebarTypes';

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const Icon = (isActive || isHovered) && item.activeIcon ? item.activeIcon : item.icon;
  
  return (
    <div
      className={`${item.className} ${isActive ? 'bg-customIndigoHover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Icon
        color={(isActive || isHovered) ? '#FFFFFF' : '#292D32'}
        className={`w-${item.width} h-${item.height}`}
      />
    </div>
  );
};

export default MenuItem;