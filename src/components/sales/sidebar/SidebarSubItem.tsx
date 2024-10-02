import { FC } from "react";
import { NavLink } from "react-router-dom";
import { SidebarSubItemProps } from "../../types/sales/sidebar/sidebarSubItemProps";

const SidebarSubItem: FC<SidebarSubItemProps> = ({ title, to, highlighted }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 text-xs md:text-sm cursor-pointer ${
        isActive
          ? "bg-customIndigoHover text-white border rounded-lg w-full ml-8 pl-4 pr-4 mr-12"
          : highlighted
          ? "ml-8 text-customIndigoFade bg-transparent px-4 py-2 w-fit ease-in-out hover:bg-customIndigoHover  hover:text-white hover:border hover:rounded-lg"
          : "pl-12 text-customIndigoFade hover:bg-gray-100"
      }`
    }
  >
    {title}
  </NavLink>
);

export default SidebarSubItem;


