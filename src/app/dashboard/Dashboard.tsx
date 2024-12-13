import Header from "@/components/header/Header";
import Sidebar from "@components/sideBar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from '@components/statement/auth/useAuth';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-8 overflow-y-auto">
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;