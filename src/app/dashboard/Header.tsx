import { FC } from "react";
import { ChevronDown } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-4"></div>
      <div className="flex items-center space-x-4 relative">
        {/* Icone avec la badge de notification */}
        <div className="relative">
          <img
            src="/src/assets/svg/ring.svg"
            alt="Notifications"
            width="24"
            height="24"
            className="mr-3"
          />
          {/* Badge de notification */}
          <div className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            3
          </div>
        </div>

        {/* Utilisateur */}
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
  );
};

export default Header;
