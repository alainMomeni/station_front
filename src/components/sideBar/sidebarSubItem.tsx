import { NavLink, useLocation } from "react-router-dom";
import { SubItemType } from '@components/types/sidebar/sidebarTypes';

const SidebarSubItem: React.FC<SubItemType> = ({ title, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(to);

  return (
    <NavLink
      to={to}
      className={`block transition-all duration-200 ${
        isActive
          ? "bg-customIndigoHover text-white w-fit rounded-lg ml-16 px-4 py-2"
          : "text-customIndigoFade hover:bg-customIndigoHover w-fit hover:ml-16 hover:text-white hover:rounded-lg ml-12 px-4 py-2"
      }`}
    >
      <span className="text-sm">{title}</span>
    </NavLink>
  );
};

export default SidebarSubItem;