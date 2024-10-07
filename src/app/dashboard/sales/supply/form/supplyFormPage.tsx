import SupplyForm from "@/components/sales/MainContent/supply/form/SupplyForm";
import Footer from "@/components/footer";

const SupplyFormPage: React.FC = () => {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <main className="flex-1 p-8 overflow-y-auto">
        <SupplyForm />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
        </div>
      </main>
    </div>
  );
};

export default SupplyFormPage;



