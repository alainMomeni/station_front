import { FC } from "react";
import InputField from "@components/sales/MainContent/supply/form/InputField";
import formInputs from "@components/sales/MainContent/purchase order/form/metadata/formInputs.json";
import PurchaseOrderFormButtons from "@/components/sales/MainContent/purchase order/form/PurchaseOrderFormButtons";

const PurchaseOrderForm: FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Buttons */}
    <PurchaseOrderFormButtons />

    {/* Form */}
    <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-6"> Nouveau bon de commande </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formInputs.formInputs.map((input, index) => (
            <InputField key={index} label={input.label} type={input.type} />
          ))}
        </div>
      </form>
    </div>

    {/* Footer */}
    <div className="bg-white rounded-xl shadow-md p-4 mt-6 text-center text-sm sm:text-base">
      Copyright © 2024 Neema. Tous droits réservés
    </div>
  </div>
);

export default PurchaseOrderForm;