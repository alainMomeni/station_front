import React from 'react';
import { FormInput } from '@components/types/form/formTypes';

interface InputFieldProps {
  input: FormInput;
  readOnly?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ input, readOnly, onChange }) => {
  const { type, name, label, value, options } = input;

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === 'select' && options ? (
        <select
          id={name}
          name={name}
          value={value as string} // Typecast en string car les options sont toujours des chaînes
          onChange={onChange}
          disabled={readOnly}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            readOnly ? 'bg-gray-100 cursor-not-allowed' : ''
          }`}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            readOnly ? 'bg-gray-100 cursor-not-allowed' : ''
          }`}
        />
      )}
    </div>
  );
};

export default InputField;
