import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/components/statement/store/store';
import { login } from '@components/statement/auth/authThunks';
import { FormInput } from './FormInput';
import { RememberMeSection } from './RememberMeSection';
import { useFormValidation } from '@components/login/form/hooks/useFormValidation';
import type { FormData } from '@components/types/auth/auth.types';

export const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { validationErrors, validateEmail, validatePassword } = useFormValidation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const isValid = validateEmail(formData.email) && validatePassword(formData.password);
    if (!isValid) return;
  
    try {
      await dispatch(login({
        email: formData.email,
        password: formData.password
      })).unwrap();
      navigate('/produits');
    } catch (err) {
    // Log détaillé de l'erreur
    console.error('Login Error in Form:', err);
    // L'erreur sera automatiquement gérée par le state Redux
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <FormInput
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        onBlur={() => validateEmail(formData.email)}
        error={validationErrors.email}
        disabled={isLoading}
      />

      <FormInput
        id="password"
        label="Mot de passe"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleInputChange}
        onBlur={() => validatePassword(formData.password)}
        error={validationErrors.password}
        disabled={isLoading}
        Icon={showPassword ? EyeOff : Eye}
        onIconClick={() => setShowPassword(!showPassword)}
      />

      <RememberMeSection
        checked={formData.rememberMe}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 transform hover:-translate-y-1"
      >
        {isLoading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
};

export default SignupForm;