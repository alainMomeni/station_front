import { FC } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SidebarItemProps } from "../../types/sales/sidebar/sidebarItemProps";

const SidebarItem: FC<SidebarItemProps> = ({ icon, title, children, isOpen, onClick }) => {
  return (
    <div className="mb-2">
      <div
        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
        onClick={onClick}
      >
        {icon}
        <span className="ml-2 text-xs md:text-base text-customIndigoFade">{title}</span>
        {isOpen ? (
          <ChevronUp className="ml-auto text-customIndigoFade h-4" />
        ) : (
          <ChevronDown className="ml-auto text-customIndigoFade h-4" />
        )}
      </div>
      <div className={`pl-4 ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;


