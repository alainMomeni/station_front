import { FC } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
}

const InputField: FC<InputFieldProps> = ({ label, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} :
    </label>
    <input
      type={type}
      className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg"
    />
  </div>
);

export default InputField;