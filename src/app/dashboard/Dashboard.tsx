import Header from "@/components/header/Header";
import Sidebar from "@/components/sideBar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour la Sidebar

    // Fonction pour ouvrir/fermer la Sidebar
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        {/* Passer l'état et la fonction de toggle à la Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-8 overflow-y-auto">
          {/* Passer la fonction de toggle au Header */}
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
