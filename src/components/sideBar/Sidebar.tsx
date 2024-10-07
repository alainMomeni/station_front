import { useState } from "react";
import SidebarItem from "@/components/sales/sidebar/SidebarItem";
import SidebarSubItem from "@/components/sales/sidebar/SidebarSubItem";
import MenuItem from "@/components/sales/sidebar/MenuItem";
import sidebarData from "@/components/sales/sidebar/metadata/sidebarData.json";
import menuItemsData from "@/components/sales/sidebar/metadata/menuItems.json";
import { MenuItemType } from "@/components/types/sales/sidebar/menuItemType";
import { SidebarIconProps } from "@components/types/sales/sidebar/sidebarIconProps";

// Sidebar Icon Component
const SidebarIcon: React.FC<SidebarIconProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-6 h-6 mr-4" />
);

// Sidebar avec isOpen et toggleSidebar
const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div>
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md fixed inset-y-0 left-0 w-72 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block md:w-80 z-50`}
      >
        {/* Logo */}
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <img
              src="/src/assets/svg/logo.svg"
              alt="Logo"
              width="50"
              height="50"
              className="mr-3"
            />
            Station OLA
            <span className="text-xs md:text-sm text-customVColor ml-2 mt-4">
              v.01
            </span>
          </h1>
        </div>

        {/* Menu Items */}
        <div className="flex justify-center items-center space-x-3 p-4">
          {menuItemsData.menuItems.map((item, index) => (
            <MenuItem key={index} item={item as MenuItemType} />
          ))}
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-6">
          {sidebarData.sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={<SidebarIcon src={item.icon} alt={item.title} />}
              title={item.title}
              isOpen={openItemIndex === index}
              onClick={() => handleItemClick(index)}
            >
              {item.subItems.map((subItem, subIndex) => (
                <SidebarSubItem
                  key={subIndex}
                  title={subItem.title}
                  to={subItem.to}
                />
              ))}
            </SidebarItem>
          ))}
        </nav>
      </aside>

      {/* Overlay for closing sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
