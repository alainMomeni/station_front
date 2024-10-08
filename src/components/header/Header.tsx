import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importation des icônes
import NotificationsModal from "./NotificationsModal";
import AccountMenuModal from "./AccountMenuModal"; // Importation du modal de compte
import HambergerIcon from "@/assets/svg/hambergerIcon";

// Ajout de toggleSidebar en tant que prop
const Header: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // Pour le modal de notifications
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false); // Pour le menu de compte

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  return (
    <header className="flex justify-between items-center mb-8 relative">
      {/* Bouton pour ouvrir/fermer la Sidebar sur mobile */}
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden  focus:outline-none"
          onClick={toggleSidebar}
        >
          <HambergerIcon className="w-12 h-12 text-customIndigoFade" />
        </button>
      </div>

      <div className="flex items-center space-x-4 relative">
        {/* Icône de notification avec badge */}
        <div
          className="relative cursor-pointer group"
          onClick={toggleNotifications}
        >
          <img
            src="/src/assets/svg/ring.svg"
            alt="Notifications"
            width="24"
            height="24"
            className="mr-3 group-hover:text-indigo-600 group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          {/* Badge de notification */}
          <div className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            3
          </div>
        </div>

        {/* Modal des notifications */}
        {isNotificationOpen && <NotificationsModal />}

        {/* Icône utilisateur */}
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
          F
        </div>
        <div>
          <p className="font-semibold">Franc</p>
          <p className="text-sm text-gray-500">System Admin</p>
        </div>

        {/* Changement de l'icône en fonction de l'état du menu */}
        <div onClick={toggleAccountMenu} className="cursor-pointer">
          {isAccountMenuOpen ? (
            <ChevronUp className="text-gray-500 h-4" />
          ) : (
            <ChevronDown className="text-gray-500 h-4" />
          )}
        </div>

        {/* Menu de compte */}
        {isAccountMenuOpen && <AccountMenuModal />}
      </div>
    </header>
  );
};

export default Header;
