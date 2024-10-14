import { NavLink, useLocation } from "react-router-dom";
import { SidebarSubItemProps } from "../../types/sales/sidebar/sidebarSubItemProps";

const SidebarSubItem: React.FC<SidebarSubItemProps> = ({ title, to }) => {
  const location = useLocation();
  const isActive = 
    location.pathname === to ||
    (to === "/approvisionnement/bons-de-commande" && location.pathname.startsWith("/approvisionnement/bons-de-commande")) ||
    (to === "/approvisionnement" && 
     (location.pathname === "/approvisionnement" || location.pathname === "/approvisionnement/form"));

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