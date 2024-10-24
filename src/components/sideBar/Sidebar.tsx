import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./menuItem";
import SidebarItem from "./sidebarItem";
import SidebarSubItem from "./sidebarSubItem";
import { sidebarConfig } from "@components/sideBar/metadata/sidebarConfig";
import { SectionType } from "@components/types/sidebar/sidebarTypes";
import { LogoIcon } from "@/assets/svg/logo";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("sales");
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const findActiveSection = useCallback((pathname: string) => {
    return sidebarConfig.sections.find((section: SectionType) =>
      section.sidebarItems.some(item =>
        item.subItems.some(subItem => pathname.startsWith(subItem.to))
      )
    );
  }, []);

  useEffect(() => {
    const section = findActiveSection(location.pathname);
    if (section) {
      setActiveSection(section.id);
    }
  }, [location.pathname, findActiveSection]);

  const handleItemClick = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const activeItems = useMemo(() => {
    return sidebarConfig.sections.find((section: SectionType) =>
      section.id === activeSection
    )?.sidebarItems || [];
  }, [activeSection]);

  return (
    <div>
      <aside
        className={`bg-white shadow-md fixed inset-y-0 left-0 w-72 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block md:w-80`}
      >
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <LogoIcon
              className="mr-3"
            />
            Station OLA
            <span className="text-xs md:text-sm text-customVColor ml-2 mt-4">
              v.01
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center space-x-3 p-4">
          {sidebarConfig.sections.map((section: SectionType) => (
            <MenuItem
              key={section.id}
              item={section.menuItem}
              isActive={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            />
          ))}
        </div>

        <nav className="mt-4 px-6">
          {activeItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;