import { FC } from "react";

const MainContent: FC = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-2 mb-6">
        <div className="flex items-center space-x-4">
          <button className="pl-4 py-2 flex items-center hover:text-customIndigoHover transition duration-300">
          <img src="/src/assets/svg/save.svg" alt="Save" className="mt-0.5 h-5 mr-4" />
            Enregistrer
          </button>
          <button className="py-2 flex items-center hover:text-customIndigoHover transition duration-300">
          <img src="/src/assets/svg/retour.svg" alt="Save" className="mt-0.5 h-5 mr-4" />
            Annuler
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Nouvel approvisionnement</h2>
        <form className="space-y-6">
          {/* Form fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Commande N :</label>
              <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bon de Livraison :</label>
              <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantité livrée :</label>
              <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unité de mesure :</label>
              <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacité récipient :</label>
              <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Valorisation :</label>
              <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:border-customIndigoHover focus:ring-1 focus:ring-customIndigoHover transition duration-300 rounded-lg" />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 mt-6 text-center">
        Copyright © 2024 Neema. Tous droits réservés
      </div>
    </div>
  );
};

export default MainContent;