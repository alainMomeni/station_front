import { Link } from 'react-router-dom';

interface RememberMeSectionProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RememberMeSection = ({ checked, onChange }: RememberMeSectionProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        id="remember"
        name="rememberMe"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
      />
      <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
        Se souvenir de moi
      </label>
    </div>
    <Link
      to="/forgot-password"
      className="text-sm text-purple-600 hover:text-purple-800"
    >
      Mot de passe oublié ?
    </Link>
  </div>
);