import PurchaseOrderForm from "@components/sales/MainContent/purchase order/form/purchaseOrderForm";

const PurchaseOrderFormPage: React.FC = () => {


  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Passer l'état et la fonction de toggle à la Sidebar */}
      <main className="flex-1 p-8 overflow-y-auto">
        <PurchaseOrderForm />
      </main>
    </div>
  );
};

export default PurchaseOrderFormPage;