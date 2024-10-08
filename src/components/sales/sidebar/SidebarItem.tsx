// components/sales/sidebar/SidebarItem.tsx
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import { SidebarItemProps } from "../../types/sales/sidebar/sidebarItemProps";

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, children, isOpen, onClick }) => {
  const location = useLocation();
  const childrenArray = Array.isArray(children) ? children : [children];
  const isActive = childrenArray.some((child: any) => {
    const path = location.pathname;
    const targetPath = child.props.to;
    
    if (targetPath === "/approvisionnement") {
      return path === "/approvisionnement" || path === "/approvisionnement/form";
    }
    
    return path === targetPath;
  });

  return (
    <div className="mb-2">
      <div
        className={`flex items-center px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100`}
        onClick={onClick}
      >
        {icon}
        <span className="ml-2 text-sm text-customIndigoFade">
          {title}
        </span>
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


