
import SupplyTable from "@/components/sales/MainContent/supply/table/supplyTable";
import Footer from "@/components/footer";

const SupplyTablePage: React.FC = () => {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <main className="flex-1 p-8 overflow-y-auto">
        <SupplyTable />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
        </div>
      </main>
    </div>
  );
};

export default SupplyTablePage;