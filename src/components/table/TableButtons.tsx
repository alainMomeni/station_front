import React from 'react';

interface ButtonWithIcon {
  text: string;
  icon?: React.FC<{ className?: string }>;
}

interface TableButtonsProps {
  buttons: ButtonWithIcon[];
  handleButtonClick: (buttonText: string) => void;
}

const TableButtons: React.FC<TableButtonsProps> = ({ buttons, handleButtonClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 pl-4 mb-6 overflow-x-auto">
      <div className="flex space-x-4 min-w-max flex-wrap pr-2">
        {buttons.map((button: ButtonWithIcon, index: number) => {
          const Icon = button.icon;
          
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(button.text)}
              className="flex items-center space-x-2 hover:text-customIndigoHover transition duration-300 group"
            >
              {Icon && <Icon className="w-5 h-5 group-hover:text-customIndigoHover transition-colors duration-300" />}
              <span>{button.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TableButtons;