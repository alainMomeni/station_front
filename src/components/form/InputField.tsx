import React from 'react';
import { InputFieldProps } from '@components/types/form/formTypes';


const InputField: React.FC<InputFieldProps> = ({ label, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg text-sm sm:text-base"
      />
    </div>
  );
};

export default InputField;