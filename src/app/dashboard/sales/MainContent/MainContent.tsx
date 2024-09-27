import { FC } from "react";
import InputField from "../../../../components/sales/MainContent/supplyForm/InputField";
import formInputs from "../../../../components/sales/MainContent/supplyForm/metadata/formInputs.json";
import buttons from "../../../../components/sales/MainContent/supplyForm/metadata/buttons.json";

const MainContent: FC = () => (
  <div>
    {/* Buttons */}
    <div className="bg-white rounded-xl shadow-md p-2 mb-6">
      <div className="flex items-center space-x-4">
        {buttons.buttons.map((button, index) => (
          <button key={index} className={`${index === 0 ? 'pl-4' : ''} py-2 flex items-center hover:text-customIndigoHover transition duration-300`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mr-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id={button.icon.id}>
                {button.icon.paths.map((path, pathIndex) => (
                  <path
                    key={pathIndex}
                    id={path.id}
                    d={path.d}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Nouvel approvisionnement</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {formInputs.formInputs.map((input, index) => (
            <InputField key={index} label={input.label} type={input.type} />
          ))}
        </div>
      </form>
    </div>

    {/* Footer */}
    <div className="bg-white rounded-xl shadow-md p-4 mt-6 text-center">
      Copyright © 2024 Neema. Tous droits réservés
    </div>
  </div>
);

export default MainContent;
