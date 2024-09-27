import { FC } from "react";
import { User, LogOut } from "lucide-react"; // Importation des icônes

const AccountMenuModal: FC = () => {
  return (
    <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg">
      <ul className="space-y-0">
        <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-3 border-b hover:shadow-md">
          <User className="w-5 h-5 mr-2" />
          <span>Mon profil</span>
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-3">
          <LogOut className="w-5 h-5 mr-2" />
          <span>Se déconnecter</span>
        </li>
      </ul>
    </div>
  );
};

export default AccountMenuModal;