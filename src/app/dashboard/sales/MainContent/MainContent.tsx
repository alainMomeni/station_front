import { FC } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
}

const InputField: FC<InputFieldProps> = ({ label, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} :
    </label>
    <input
      type={type}
      className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg"
    />
  </div>
);

const MainContent: FC = () => (
  <div>
    {/* Buttons */}
    <div className="bg-white rounded-xl shadow-md p-2 mb-6">
      <div className="flex items-center space-x-4">
        <button className="pl-4 py-2 flex items-center hover:text-customIndigoHover transition duration-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Path */}
            <g id="download-file">
              <path
                id="Vector"
                d="M17.8571 17.8572C17.8571 18.2361 17.7065 18.5995 17.4387 18.8674C17.1708 19.1352 16.8074 19.2858 16.4285 19.2858H3.57139V2.14293H12.8571L17.8571 5.71436V17.8572Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="vector 377"
                d="M12.8571 11.4287L9.99997 14.2859L7.14282 11.4287"
                stroke="currentColor"
              />
              <path
                id="vector 378"
                d="M10 14.2859V6.42871"
                stroke="currentColor"
              />
            </g>
          </svg>
          Enregistrer
        </button>

        <button className="py-2 flex items-center hover:text-customIndigoHover transition duration-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="mail-send-reply-all--email-message-reply-all-actions-action-arrow">
              <g id="mail-send-reply-all--email-message-reply-all-actions-action-arrow_2">
                <path
                  id="Vector"
                  d="M10.7144 3.57153L6.42871 7.85725L10.7144 12.143"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M19.2859 16.4286V13.5715C19.2859 12.0559 18.6839 10.6025 17.6121 9.53085C16.5406 8.45922 15.0871 7.85718 13.5716 7.85718H6.42871"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M5.00007 3.57153L0.714355 7.85725L5.00007 12.143"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
          Annuler
        </button>
      </div>
    </div>

    {/* Form */}
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Nouvel approvisionnement</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <InputField label="Commande N" />
          <InputField label="Bon de Livraison" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <InputField label="Quantité livrée" />
          <InputField label="Unité de mesure" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <InputField label="Capacité récipient" />
          <InputField label="Valorisation" />
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
