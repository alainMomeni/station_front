import { FC } from "react";
import InputField from "@components/sales/MainContent/supply/form/InputField";
import formInputs from "@components/sales/MainContent/supply/form/metadata/formInputs.json";
import SupplyFormButtons from "@/components/sales/MainContent/supply/form/SupplyFormButtons";

const SupplyForm: FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Buttons */}
    <SupplyFormButtons />

    {/* Form */}
    <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-6">Nouvel approvisionnement</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formInputs.formInputs.map((input, index) => (
            <InputField key={index} label={input.label} type={input.type} />
          ))}
        </div>
      </form>
    </div>
  </div>
);

export default SupplyForm;
