import { FC } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";

const Dashboard: FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <MainContent />
      </main>
    </div>
  );
};

export default Dashboard;
