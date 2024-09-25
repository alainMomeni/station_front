import { FC } from "react";
import SidebarItem from "../../../components/sales/sidebar/SidebarItem";
import SidebarSubItem from "../../../components/sales/sidebar/SidebarSubItem";

const SidebarIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-6 h-6 mr-4" />
);

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
      <div className="border p-1 bg-customIndigoHover rounded-lg">
        <img
          src="/src/assets/svg/sales_white.svg"
          alt="sales"
          width="26"
          height="26"
        />
      </div>
      <div className="hover:border hover:p-1 hover:bg-customIndigoHover hover:rounded-lg cursor-pointer group">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#292D32] group-hover:text-white transition-colors duration-300"
        >
          <g id="Chart">
            <path
              id="Vector 8"
              d="M8 10L8 16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector 9"
              d="M12 12V16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector 10"
              d="M16 8V16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              id="Rectangle 25"
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              stroke="currentColor"
            />
          </g>
        </svg>
      </div>
      <div className="hover:border hover:p-1 hover:bg-customIndigoHover hover:rounded-lg cursor-pointer group">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 group-hover:text-white transition-colors duration-300"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>
    </div>

    <nav className="mt-4 px-6">
      <SidebarItem
        icon={<SidebarIcon src="/src/assets/svg/vente.svg" alt="Ventes" />}
        title="Ventes"
      >
        <SidebarSubItem title="Produits" highlighted />
        <SidebarSubItem title="Ventes" highlighted />
      </SidebarItem>
      <SidebarItem
        icon={
          <SidebarIcon
            src="/src/assets/svg/supply.svg"
            alt="Approvisionnement"
          />
        }
        title="Approvisionnement"
      >
        <SidebarSubItem title="Bons de Commande" highlighted />
        <SidebarSubItem title="Approvisionnement" active />
      </SidebarItem>
      <SidebarItem
        icon={<SidebarIcon src="/src/assets/svg/stock.svg" alt="Stocks" />}
        title="Stocks"
      >
        <SidebarSubItem title="Stock Produits blancs" highlighted />
        <SidebarSubItem title="Stock produits boutique" highlighted />
      </SidebarItem>
      <SidebarItem
        icon={
          <SidebarIcon src="/src/assets/svg/clientele.svg" alt="Clientèle" />
        }
        title="Clientèle"
      >
        <SidebarSubItem title="Comptes" highlighted />
        <SidebarSubItem title="Clients" highlighted />
      </SidebarItem>
      <SidebarItem
        icon={<SidebarIcon src="/src/assets/images/activite.png" alt="Suivi" />}
        title="Suivi de l'activité"
      >
        <SidebarSubItem title="Inventaires" highlighted />
        <SidebarSubItem title="Control Stock Fuel" highlighted />
      </SidebarItem>
      <SidebarItem
        icon={<SidebarIcon src="/src/assets/images/achats.png" alt="Achats" />}
        title="Achats/Dépenses"
      >
        <SidebarSubItem title="Commandes" highlighted />
        <SidebarSubItem title="Dépenses" highlighted />
      </SidebarItem>
    </nav>
  </aside>
);

export default Sidebar;
