import { FC } from "react";

interface SidebarSubItemProps {
  title: string;
  active?: boolean;
  highlighted?: boolean;
}

const SidebarSubItem: FC<SidebarSubItemProps> = ({ title, active, highlighted }) => (
  <div
    className={`py-2 text-sm cursor-pointer ${
      active
        ? "bg-customIndigoHover text-white border rounded-lg w-fit ml-8 pl-4 pr-4 mr-12"
        : highlighted
        ? "ml-8 text-customIndigoFade bg-transparent px-4 py-2 w-fit ease-in-out hover:bg-customIndigoHover hover:text-white hover:border hover:rounded-lg"
        : "pl-12 text-customIndigoFade hover:bg-gray-100"
    }`}
  >
    {title}
  </div>
);

export default SidebarSubItem;
