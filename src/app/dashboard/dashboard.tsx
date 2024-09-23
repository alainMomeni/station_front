import { FC } from "react";
import {
  ChevronDown,
  ShoppingCart,
  BarChart2,
  Settings,
  Package,
  Users,
  FileText,
  DollarSign,
} from "lucide-react";

// Sidebar Item Interface
interface SidebarItemProps {
  icon: JSX.Element;
  title: string;
  children?: JSX.Element | JSX.Element[];
  active?: boolean;
}

// Sidebar SubItem Interface
interface SidebarSubItemProps {
  title: string;
  active?: boolean;
}

const Dashboard: FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-xl font-semibold flex items-center">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="setting 1">
                <path
                  id="Vector"
                  d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z"
                  fill="black"
                />
                <path
                  id="Vector_2"
                  d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z"
                  fill="black"
                />
              </g>
            </svg>
            Station OLA
            <span className="text-xs text-gray-500 ml-2 mt-4">v.01</span>
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-6 p-4 ">
          <div className="border p-1 bg-indigo-600 rounded-lg">
            <ShoppingCart className="text-white" />
          </div>
          <BarChart2 className="text-gray-400" />
          <Settings className="text-gray-400" />
        </div>
        <nav className="mt-4">
          <SidebarItem icon={<Package />} title="Ventes" active>
            <SidebarSubItem title="Produits" />
            <SidebarSubItem title="Ventes" />
          </SidebarItem>
          <SidebarItem icon={<Users />} title="Approvisionnement">
            <SidebarSubItem title="Bons de Commande" />
            <SidebarSubItem title="Approvisionnement" active />
          </SidebarItem>
          <SidebarItem icon={<Package />} title="Stocks">
            <SidebarSubItem title="Stock Produits blancs" />
            <SidebarSubItem title="Stock produits boutique" />
          </SidebarItem>
          <SidebarItem icon={<Users />} title="Clientèle">
            <SidebarSubItem title="Comptes" />
            <SidebarSubItem title="Clients" />
          </SidebarItem>
          <SidebarItem icon={<FileText />} title="Suivi de l'activité">
            <SidebarSubItem title="Inventaires" />
            <SidebarSubItem title="Control Stock Fuel" />
            <SidebarSubItem title="Constats - Produits /" />
          </SidebarItem>
          <SidebarItem icon={<DollarSign />} title="Achats/Dépenses">
            <SidebarSubItem title="Commandes" />
            <SidebarSubItem title="Dépenses" />
          </SidebarItem>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4"></div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              F
            </div>
            <div>
              <p className="font-semibold">Franc</p>
              <p className="text-sm text-gray-500">System Admin</p>
            </div>
            <ChevronDown />
          </div>
        </header>
        <div className="bg-white rounded-lg shadow-md p-2 mb-6">
          <div className="flex items-center space-x-4">
            <button className="pl-4 py-2  flex items-center">
              <svg
                className="mt-0.5 h-5 mr-4"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="download-file">
                  <g id="download-file_2">
                    <path
                      id="Vector"
                      d="M17.8571 17.8572C17.8571 18.2361 17.7065 18.5995 17.4387 18.8674C17.1708 19.1352 16.8074 19.2858 16.4285 19.2858H3.57139C3.19251 19.2858 2.82915 19.1352 2.56124 18.8674C2.29334 18.5995 2.14282 18.2361 2.14282 17.8572V2.14293C2.14282 1.76404 2.29334 1.40068 2.56124 1.13277C2.82915 0.864865 3.19251 0.714355 3.57139 0.714355H12.8571L17.8571 5.71436V17.8572Z"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="vector 377"
                      d="M12.8571 11.4287L9.99997 14.2859L7.14282 11.4287"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="vector 378"
                      d="M10 14.2859V6.42871"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
              Enregistrer
            </button>
            <button className="py-2 flex items-center">
              <svg
                className="mt-0.5 h-5 mr-4"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mail-send-reply-all--email-message-reply-all-actions-action-arrow">
                  <g id="mail-send-reply-all--email-message-reply-all-actions-action-arrow_2">
                    <path
                      id="Vector"
                      d="M10.7144 3.57153L6.42871 7.85725L10.7144 12.143"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M19.2859 16.4286V13.5715C19.2859 12.0559 18.6839 10.6025 17.6121 9.53085C16.5406 8.45922 15.0871 7.85718 13.5716 7.85718H6.42871"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M5.00007 3.57153L0.714355 7.85725L5.00007 12.143"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
              Annuler
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            Nouvel approvisionnement
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Commande N :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bon de Livraison :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantité livrée :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unité de mesure :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capacité récipient :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valorisation :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mt-6 text-center">
          Copyright © 2024 Neema. Tous droits réservés
        </div>
      </main>
    </div>
  );
};

// SidebarItem Component
const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  title,
  children,
  active,
}) => {
  return (
    <div className={`mb-2 ${active ? "bg-indigo-50" : ""}`}>
      <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
        {icon}
        <span className="ml-2">{title}</span>
        <ChevronDown className="ml-auto" />
      </div>
      {children}
    </div>
  );
};

// SidebarSubItem Component
const SidebarSubItem: FC<SidebarSubItemProps> = ({ title, active }) => {
  return (
    <div
      className={`pl-12 py-2 text-sm ${
        active ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {title}
    </div>
  );
};

export default Dashboard;
