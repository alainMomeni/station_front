import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormConfig } from '@components/types/form/formTypes';
import InputField from './InputField';

interface FormComponentProps {
    config: FormConfig;
  }
  
  const FormComponent: React.FC<FormComponentProps> = ({ config }) => {
    const navigate = useNavigate();
  
    const handleButtonClick = (buttonText: string) => {
      if (buttonText === "Annuler") {
        navigate(config.cancelRoute);
      }
    };
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Buttons */}
        <div className="bg-white rounded-xl shadow-md p-2 mb-6 overflow-x-auto">
          <div className="flex space-x-4 min-w-max flex-wrap">
            {config.buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(button.text)}
                className={`${
                  index === 0 ? "md:pl-4 pl-2" : ""
                } py-2 flex items-center hover:text-customIndigoHover transition duration-300 whitespace-nowrap`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mr-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id={button.icon.id}>
                    {button.icon.paths.map((path, pathIndex) => (
                      <path
                        key={pathIndex}
                        id={path.id}
                        d={path.d}
                        stroke={path.stroke}
                        fill={path.fill || "none"}
                        strokeLinecap={path.strokeLinecap}
                        strokeLinejoin={path.strokeLinejoin}
                        fillRule={path.fillRule}
                        clipRule={path.clipRule}
                      />
                    ))}
                  </g>
                </svg>
                {button.text}
              </button>
            ))}
          </div>
        </div>
  
        {/* Form */}
        <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
          <h2 className="text-xl font-semibold mb-6">{config.title}</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {config.formInputs.map((input, index) => (
                <InputField
                  key={index}
                  label={input.label}
                  type={input.type}
                />
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