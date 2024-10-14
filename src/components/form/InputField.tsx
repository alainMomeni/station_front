import React from 'react';
import { InputFieldProps } from '@components/types/form/formTypes';

const InputField: React.FC<InputFieldProps> = ({ input, readOnly }) => {
  const isReadOnly = readOnly || input.readOnly;

  const baseClasses = "w-full px-3 py-2 border rounded-lg text-sm sm:text-base transition duration-300";
  const activeClasses = "focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover";
  const readOnlyClasses = "bg-gray-100 text-gray-700 border-gray-300 cursor-not-allowed";

  const inputClasses = `${baseClasses} ${isReadOnly ? readOnlyClasses : activeClasses}`;

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700 mb-1 whitespace-nowrap">
        {input.label}
      </label>
      {input.type === "select" ? (
        <select
          className={inputClasses}
          disabled={isReadOnly}
        >
          {input.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={input.type}
          className={inputClasses}
          readOnly={isReadOnly}
          style={isReadOnly ? { WebkitTextFillColor: '#374151', opacity: 1 } : {}}
        />
      )}
      {isReadOnly && (
        <div className="mt-1 text-xs text-gray-500 italic">Lecture seule</div>
      )}
    </div>
  );
};

export default InputField;