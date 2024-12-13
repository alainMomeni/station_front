import React, { useState } from 'react';
import { User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LogoutModal } from "./LogoutModal";
import { useAppDispatch } from '@/components/statement/store/store';
import { logoutUser } from '@components/statement/auth/authThunks';

export const AccountMenuModal: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      setShowLogoutModal(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/');
    }
  };

  return (
    <>
      <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg">
        <ul className="space-y-0">
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-3 border-b hover:shadow-md">
            <Link to="/profil" className="flex items-center w-full">
              <User className="w-5 h-5 mr-2" />
              <span>Mon profil</span>
            </Link>
          </li>
          <li
            className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-3"
            onClick={() => setShowLogoutModal(true)}
          >
            <div className="flex items-center w-full">
              <LogOut className="w-5 h-5 mr-2" />
              <span>Se déconnecter</span>
            </div>
          </li>
        </ul>
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};