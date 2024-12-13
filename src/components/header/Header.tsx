import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import NotificationsModal from "./NotificationsModal";
import { AccountMenuModal } from "./AccountMenuModal";
import HambergerIcon from "@/assets/svg/hambergerIcon";
import { RingIcon } from "@/assets/svg/ringIcon";
import { HeaderProps } from '@components/types/auth/auth.types';

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  return (
    <header className="flex justify-between items-center mb-8 relative">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          <HambergerIcon className="w-12 h-12 text-customIndigoFade" />
        </button>
      </div>

      <div className="flex items-center space-x-4 relative">
        <div
          className="relative cursor-pointer group"
          onClick={toggleNotifications}
        >
          <RingIcon
            className="mr-3 group-hover:text-indigo-600 group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            3
          </div>
        </div>

        {isNotificationOpen && <NotificationsModal />}

        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
          F
        </div>
        <div>
          <p className="font-semibold">Franc</p>
          <p className="text-sm text-gray-500">System Admin</p>
        </div>

        <div onClick={toggleAccountMenu} className="cursor-pointer">
          {isAccountMenuOpen ? (
            <ChevronUp className="text-gray-500 h-4" />
          ) : (
            <ChevronDown className="text-gray-500 h-4" />
          )}
        </div>

        {isAccountMenuOpen && <AccountMenuModal />}
      </div>
    </header>
  );
};

export default Header;