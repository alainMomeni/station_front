import { FC, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Header";
import MainContent from "./MainContent/MainContent";

const Dashboard: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour la Sidebar

  // Fonction pour ouvrir/fermer la Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Passer l'état et la fonction de toggle à la Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 p-8">
        {/* Passer la fonction de toggle au Header */}
        <Header toggleSidebar={toggleSidebar} />
        <MainContent />
      </main>
    </div>
  );
};

export default Dashboard;


