import { useState } from 'react';
import { MenuItemType } from '@components/types/sidebar/sidebarTypes';

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Choisir l'icône en fonction de l'état (survolé ou actif)
  const iconSrc = isActive || isHovered ? item.hoverSrc || item.src : item.src;

  return (
    <div
      className={`${item.className} ${isActive ? 'bg-customIndigoHover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={iconSrc}
        alt={item.alt}
        width={item.width}
        height={item.height}
      />
    </div>
  );
};

export default MenuItem;
