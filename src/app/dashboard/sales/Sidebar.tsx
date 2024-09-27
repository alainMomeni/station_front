import { FC } from "react";
import SidebarItem from "../../../components/sales/sidebar/SidebarItem";
import SidebarSubItem from "../../../components/sales/sidebar/SidebarSubItem";
import sidebarData from "../../../components/sales/sidebar/metadata/sidebarData.json";
import menuItemsData from "../../../components/sales/sidebar/metadata/menuItems.json";
import { MenuItemType } from "../../../components/types/sales/sidebar/menuItemType";
import { SidebarIconProps } from "../../../components/types/sales/sidebar/sidebarIconProps";


const SidebarIcon: FC<SidebarIconProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-6 h-6 mr-4" />
);

const MenuItem: FC<{ item: MenuItemType }> = ({ item }) => {
  if (item.type === 'image') {
    return (
      <div className={item.className}>
        <img
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
      </div>
    );
  } else if (item.type === 'svg') {
    return (
      <div className={item.className}>
        <svg
          width={item.viewBox?.split(' ')[2]}
          height={item.viewBox?.split(' ')[3]}
          viewBox={item.viewBox}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className={item.svgClassName}
          dangerouslySetInnerHTML={{ __html: item.content || '' }}
        />
      </div>
    );
  }
  return null;
};

const Sidebar: FC = () => (
  <aside className="w-80 bg-white shadow-md">
    <div className="flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold flex items-center">
        <img
          src="/src/assets/svg/logo.svg"
          alt="Logo"
          width="50"
          height="50"
          className="mr-3"
        />
        Station OLA
        <span className="text-sm text-customVColor ml-2 mt-4">v.01</span>
      </h1>
    </div>

    <div className="flex justify-center items-center space-x-6 p-4">
      {menuItemsData.menuItems.map((item, index) => (
        <MenuItem key={index} item={item as MenuItemType} />
      ))}
    </div>
    <nav className="mt-4 px-6">
      {sidebarData.sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          icon={<SidebarIcon src={item.icon} alt={item.title} />}
          title={item.title}
        >
          {item.subItems.map((subItem, subIndex) => (
            <SidebarSubItem
              key={subIndex}
              title={subItem.title}
              active={subItem.active}
              highlighted={subItem.highlighted}
            />
          ))}
        </SidebarItem>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
