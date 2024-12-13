import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
  Icon?: LucideIcon;  // Utilisation directe du type LucideIcon
  onIconClick?: () => void;
}

export const FormInput = ({
  id,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  Icon,
  onIconClick
}: FormInputProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:outline-none focus:ring-purple-500 focus:border-transparent transition
          ${error ? 'border-red-500' : 'border-gray-300'}`}
        disabled={disabled}
      />
      {Icon && (
        <button
          type="button"
          onClick={onIconClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <Icon size={20} />
        </button>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  </div>
);