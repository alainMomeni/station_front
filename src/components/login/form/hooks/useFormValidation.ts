import { useState } from 'react';
import { ValidationErrors } from '@components/types/auth/auth.types';

export const useFormValidation = () => {
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  
    const validateEmail = (email: string): boolean => {
      if (!email) {
        setValidationErrors(prev => ({ ...prev, email: "L'email est requis" }));
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setValidationErrors(prev => ({ ...prev, email: "Format d'email invalide" }));
        return false;
      }
      setValidationErrors(prev => ({ ...prev, email: undefined }));
      return true;
    };
  
    const validatePassword = (password: string): boolean => {
      if (!password) {
        setValidationErrors(prev => ({ ...prev, password: "Le mot de passe est requis" }));
        return false;
      }
      if (password.length < 3) {
        setValidationErrors(prev => ({ 
          ...prev, 
          password: "Le mot de passe doit contenir au moins 6 caractères" 
        }));
        return false;
      }
      setValidationErrors(prev => ({ ...prev, password: undefined }));
      return true;
    };
  
    return { validationErrors, setValidationErrors, validateEmail, validatePassword };
  };