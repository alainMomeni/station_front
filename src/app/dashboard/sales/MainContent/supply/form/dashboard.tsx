import { FC, useState } from "react";
import Sidebar from "../../../Sidebar";
import Header from "../../../../Header";
import SupplyForm from "./form";

const DashboardFormSupply: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour la Sidebar

  // Fonction pour ouvrir/fermer la Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Passer l'état et la fonction de toggle à la Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Passer la fonction de toggle au Header */}
        <Header toggleSidebar={toggleSidebar} />
        <SupplyForm />
      </main>
    </div>
  );
};

export default DashboardFormSupply;



