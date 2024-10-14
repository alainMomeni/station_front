import { useState } from 'react';
import { MenuItemType } from '@components/types/sidebar/sidebarTypes';

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${item.className} ${isActive ? 'bg-customIndigoHover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={isHovered && item.hoverSrc ? item.hoverSrc : item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
      />
    </div>
  );
};

export default MenuItem;