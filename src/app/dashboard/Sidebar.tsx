import { useState, FC } from "react";
import { ChevronDown, ChevronUp, Settings } from "lucide-react";

// Sidebar Item Interface
interface SidebarItemProps {
  icon: JSX.Element;
  title: string;
  children?: JSX.Element | JSX.Element[];
}

interface SidebarSubItemProps {
  title: string;
  active?: boolean;
  highlighted?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-2">
      <div
        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span className="ml-2 text-customIndigoFade">{title}</span>
        {isOpen ? (
          <ChevronUp className="ml-auto text-customIndigoFade h-4" />
        ) : (
          <ChevronDown className="ml-auto text-customIndigoFade" />
        )}
      </div>
      <div className={`pl-4 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

const SidebarSubItem: FC<SidebarSubItemProps> = ({
  title,
  active,
  highlighted,
}) => {
  return (
    <div
      className={`py-2 text-sm cursor-pointer ${
        active
          ? "bg-customIndigoHover ml-8 pl-4 pr-4 mr-12 w-fit text-white border rounded-lg"
          : highlighted
          ? "ml-8 text-customIndigoFade bg-transparent px-4 py-2 w-fit ease-in-out hover:bg-customIndigoHover hover:text-white hover:border hover:rounded-lg transition duration-300"
          : "pl-12 text-customIndigoFade hover:bg-gray-100"
      }`}
    >
      {title}
    </div>
  );
};

const Sidebar: FC = () => {
  return (
    <aside className="w-80 bg-white shadow-md">
      {/* Logo and title */}
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

      {/* Icons */}
      <div className="flex justify-center items-center space-x-6 p-4">
        <div className="border pl-1 py-1 pr-0.25 bg-customIndigoHover rounded-lg">
        <img
            src="/src/assets/svg/sales_white.svg"
            alt="sales"
            width="26"
            height="26"
            className="mr-2"
          />
        </div>
        <img
            src="/src/assets/svg/chart.svg"
            alt="sales"
            width="26"
            height="26"
            className="mr-2"
          />
        <Settings className="text-gray-400" />
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-6">
        <SidebarItem
          icon={
            <img
              src="/src/assets/svg/vente.svg"
              alt="Ventes"
              className="w-6 h-6 mr-4"
            />
          }
          title="Ventes"
        >
          <SidebarSubItem title="Produits" highlighted />
          <SidebarSubItem title="Ventes" highlighted />
        </SidebarItem>
        <SidebarItem
          icon={
            <img
              src="/src/assets/svg/supply.svg"
              alt="Approvisionnement"
              className="w-6 h-6 mr-4"
            />
          }
          title="Approvisionnement"
        >
          <SidebarSubItem title="Bons de Commande" highlighted />
          <SidebarSubItem title="Approvisionnement" active />
        </SidebarItem>
        <SidebarItem
          icon={
            <img src="/src/assets/svg/stock.svg" alt="Stocks" className="w-6 h-6 mr-4" />
          }
          title="Stocks"
        >
          <SidebarSubItem title="Stock Produits blancs" highlighted />
          <SidebarSubItem title="Stock produits boutique" highlighted />
        </SidebarItem>
        <SidebarItem
          icon={
            <img
              src="/src/assets/svg/clientele.svg"
              alt="Clientèle"
              className="w-6 h-6 mr-4"
            />
          }
          title="Clientèle"
        >
          <SidebarSubItem title="Comptes" highlighted />
          <SidebarSubItem title="Clients" highlighted />
        </SidebarItem>
        <SidebarItem
          icon={
            <img
              src="/src/assets/images/activite.png"
              alt="Suivi"
              className="w-6 h-6 mr-4"
            />
          }
          title="Suivi de l'activité"
        >
          <SidebarSubItem title="Inventaires" highlighted />
          <SidebarSubItem title="Control Stock Fuel" highlighted />
        </SidebarItem>
        <SidebarItem
          icon={
            <img
              src="/src/assets/images/achats.png"
              alt="Achats"
              className="w-6 h-6 mr-4"
            />
          }
          title="Achats/Dépenses"
        >
          <SidebarSubItem title="Commandes" highlighted />
          <SidebarSubItem title="Dépenses" highlighted />
        </SidebarItem>
      </nav>
    </aside>
  );
};

export default Sidebar;
