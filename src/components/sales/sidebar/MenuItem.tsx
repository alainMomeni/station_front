import { FC, useState } from "react";
import { MenuItemType } from "../../../components/types/sales/sidebar/menuItemType";

const MenuItem: FC<{ item: MenuItemType }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (item.type === 'image') {
    const src = isHovered && item.hoverSrc ? item.hoverSrc : item.src;

    return (
      <div 
        className={`${item.className} ${isHovered ? 'bg-customIndigoHover' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
      </div>
    );
  }

  return null;
};

export default MenuItem;
