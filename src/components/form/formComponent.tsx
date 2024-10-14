import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormButtons from './FormButtons';
import InputField from './InputField';
import { FormConfig } from '@components/types/form/formTypes';

interface FormComponentProps {
  config: FormConfig;
}

const FormComponent: React.FC<FormComponentProps> = ({ config }) => {
  const navigate = useNavigate();

  const handleButtonClick = (buttonText: 'Enregistrer' | 'Annuler') => {
    if (buttonText === 'Annuler') {
      navigate(config.cancelRoute);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FormButtons
        buttons={config.buttons}
        handleButtonClick={handleButtonClick}
        readOnly={config.readOnly}
      />
      <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
        <h2 className="text-xl font-semibold mb-6">{config.title}</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {config.formInputs.map((input, index) => (
              <InputField key={index} input={input} readOnly={config.readOnly} />
            ))}
          </div>
        </form>
      </div>
      {config.showFooter && (
        <div className="bg-white rounded-xl shadow-md p-4 mt-6 text-center text-sm sm:text-base">
          Copyright © 2024 Neema. Tous droits réservés
        </div>
      )}
    </div>
  );
};

export default FormComponent;
