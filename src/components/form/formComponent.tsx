import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@components/statement/store/store';
import FormButtons from './FormButtons';
import InputField from './InputField';
import { FormComponentProps } from '@components/types/form/formTypes';

const FormComponent: React.FC<FormComponentProps> = ({ 
  config, 
  initialData, 
  onSubmit, 
  mode = 'create' 
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<any>(initialData || {});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleButtonClick = async (buttonText: 'Enregistrer' | 'Annuler') => {
    if (buttonText === 'Annuler') {
      navigate(config.cancelRoute);
    } else if (buttonText === 'Enregistrer') {
      try {
        await onSubmit(formData);
        navigate(config.cancelRoute);
      } catch (error) {
        console.error('Erreur lors de la soumission:', error);
      }
    }
  };

  const handleInputChange = (name: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FormButtons
        buttons={config.buttons}
        handleButtonClick={handleButtonClick}
        readOnly={config.readOnly}
      />
      <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-6">
          {mode === 'edit' ? `Modifier ${config.title}` : config.title}
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {config.formInputs.map((input, index) => (
  <InputField
    key={index}
    input={{
      ...input,
      value: formData[input.name],
      type: input.type as 'number' | 'text' | 'select' | 'date'
    }}
    readOnly={config.readOnly}
    onChange={(event) => handleInputChange(input.name, event)}
  />
))}
          </div>
        </form>
      </div>
      {config.showFooter && (
        <div className="bg-white rounded-xl shadow-md p-4 mt-6 text-center">
          Copyright © 2024 Neema. Tous droits réservés
        </div>
      )}
    </div>
  );
};

export default FormComponent;
