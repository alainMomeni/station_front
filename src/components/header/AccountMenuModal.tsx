import { User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const AccountMenuModal: React.FC = () => {
  return (
    <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg">
      <ul className="space-y-0">
        <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-3 border-b hover:shadow-md">
          <Link to="/profil" className="flex items-center w-full">
            <User className="w-5 h-5 mr-2" />
            <span>Mon profil</span>
          </Link>
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-3">
          <Link to="/" className="flex items-center w-full">
            <LogOut className="w-5 h-5 mr-2" />
            <span>Se déconnecter</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountMenuModal;

