import React from 'react';
import SaveIcon from '@/assets/svg/saveIcon';
import CancelIcon from '@/assets/svg/cancelIcon';
import { ButtonConfig } from '@components/types/form/formTypes';

interface FormButtonsProps {
  buttons: ButtonConfig[];
  handleButtonClick: (buttonText: string) => void;
}

const FormButtons: React.FC<FormButtonsProps> = ({ buttons, handleButtonClick }) => (
  <div className="bg-white rounded-xl shadow-md p-2 mb-6 overflow-x-auto">
    <div className="flex pr-2 pl-2 sm:pr-4 space-x-4 min-w-max flex-wrap">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.text)}
          className="py-2 flex items-center hover:text-customIndigoHover transition duration-300 whitespace-nowrap group"
        >
          {button.text === 'Enregistrer' && (
            <SaveIcon className="mr-4 flex-shrink-0 group-hover:text-customIndigoHover" />
          )}
          {button.text === 'Annuler' && (
            <CancelIcon className="mr-4 flex-shrink-0 group-hover:text-customIndigoHover" />
          )}
          {button.text}
        </button>
      ))}
    </div>
  </div>
);

export default FormButtons;
