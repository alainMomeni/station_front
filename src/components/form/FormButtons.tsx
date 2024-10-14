import React from 'react';
import SaveIcon from '@/assets/svg/saveIcon';
import CancelIcon from '@/assets/svg/cancelIcon';
import { ButtonConfig } from '@components/types/form/formTypes';

// Mappage des icônes avec les boutons
const iconComponents = {
  Enregistrer: SaveIcon,
  Annuler: CancelIcon,
};

interface FormButtonsProps {
  buttons: ButtonConfig[];
  handleButtonClick: (buttonText: 'Enregistrer' | 'Annuler') => void;
  readOnly?: boolean;
}

const FormButtons: React.FC<FormButtonsProps> = ({ buttons, handleButtonClick, readOnly }) => (
  <div className="bg-white rounded-xl shadow-md p-2 mb-6 overflow-x-auto">
    <div className="flex pr-2 pl-2 sm:pr-4 space-x-4 min-w-max flex-wrap">
      {buttons.map((button, index) => {
        const Icon = iconComponents[button.text];  // Sélectionner l'icône appropriée

        return (
          <button
            key={index}
            onClick={() => handleButtonClick(button.text)}
            className={`py-2 flex items-center transition duration-300 whitespace-nowrap group ${
              readOnly ? 'opacity-50 cursor-not-allowed' : 'hover:text-customIndigoHover'
            }`}
            disabled={readOnly}
          >
            {Icon && <Icon className="mr-4 flex-shrink-0 group-hover:text-customIndigoHover" />}
            {button.text}
          </button>
        );
      })}
    </div>
  </div>
);

export default FormButtons;
