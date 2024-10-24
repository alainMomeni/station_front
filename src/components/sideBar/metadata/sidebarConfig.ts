import { SidebarConfig } from '@components/types/sidebar/sidebarTypes';
import { VenteMenuIcon } from '@/assets/svg/venteMenuIcon';
import { RapportMenuIcon } from '@/assets/svg/rapportMenuIcon';
import { ParamMenuIcon } from '@/assets/svg/ParamMenuIcon';

export const sidebarConfig: SidebarConfig = {
  sections: [
    {
      id: "sales",
      menuItem: {
        id: "sales",
        type: "image",
        icon: VenteMenuIcon,
        activeIcon: VenteMenuIcon,
        alt: "sales",
        width: 26,
        height: 26,
        className: "hover:border p-2 hover:bg-customIndigoHover rounded-lg cursor-pointer"
      },
      sidebarItems: [
        {
          icon: VenteMenuIcon,
          title: "Ventes",
          subItems: [
            { title: "Produits", to: "/produits" },
            { title: "Ventes", to: "/ventes" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Approvisionnement",
          subItems: [
            { title: "Bons de Commande", to: "/bons-de-commande" },
            { title: "Approvisionnement", to: "/approvisionnement" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Stocks",
          subItems: [
            { title: "Stock Produits Blancs", to: "/stock-fuel" },
            { title: "Stock Produits Boutique", to: "/stock-OLA" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Clientèle",
          subItems: [
            { title: "Comptes", to: "/comptes" },
            { title: "Clients", to: "/clients" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Suivi de l'Activité",
          subItems: [
            { title: "Inventaires Fuel", to: "/inventaire-fuel" },
            { title: "Inventaires OLA", to: "/inventaire-OLA" },
            { title: "Control Stock Fuel", to: "/control-stock" },
            { title: "Constats", to: "/constat" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Achats / Dépenses",
          subItems: [
            { title: "Commandes", to: "/commandes" },
            { title: "Dépenses", to: "/depenses" },
            { title: "Salaires", to: "/salaire" },
            { title: "Manquants", to: "/manquant" }
          ]
        }
      ]
    },
    {
      id: "reporting",
      menuItem: {
        id: "reporting",
        type: "image",
        icon: RapportMenuIcon,
        activeIcon: RapportMenuIcon,
        alt: "chart",
        width: 26,
        height: 26,
        className: "hover:border p-2 hover:bg-customIndigoHover rounded-lg cursor-pointer"
      },
      sidebarItems: [
        {
          icon: RapportMenuIcon,
          title: "Rapports de ventes",
          subItems: [
            { title: "Ventes Produits", to: "/rapports/ventes-journalieres" },
            { title: "Ventes Fuel", to: "/rapports/analyse-mensuelle" },
            { title: "Ventes Journalières", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Rapports d'approvisionnements",
          subItems: [
            { title: "Suivi des approvisionnements", to: "/rapports/ventes-journalieres" },
            { title: "Rapport des Bons de commande", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: RapportMenuIcon,
          title: "Rapports de stocks",
          subItems: [
            { title: "Stock Produits Blancs", to: "/rapports/ventes-journalieres" },
            { title: "Stock Produits Boutique", to: "/rapports/analyse-mensuelle" },
            { title: "Suivi des Versements", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: ParamMenuIcon,
          title: "Rapports d'Achats/Dépenses",
          subItems: [
            { title: "Dépenses Totales", to: "/rapports/ventes-journalieres" },
            { title: "Suivi des Salaires", to: "/rapports/analyse-mensuelle" },
            { title: "Analyse des Manquants", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: ParamMenuIcon,
          title: "Rapports de suivi des activités",
          subItems: [
            { title: "Versements Quotidiens", to: "/rapports/ventes-journalieres" },
            { title: "Règlements Clients", to: "/rapports/analyse-mensuelle" },
            { title: "Synthèse SQV", to: "/rapports/analyse-mensuelle" }
          ]
        }
      ]
    },
    {
      id: "settings",
      menuItem: {
        id: "settings",
        type: "image",
        icon: ParamMenuIcon,
        activeIcon: ParamMenuIcon,
        alt: "setting",
        width: 26,
        height: 26,
        className: "hover:border p-2 hover:bg-customIndigoHover rounded-lg cursor-pointer"
      },
      sidebarItems: [
        {
          icon: ParamMenuIcon,
          title: "Gestion des Roles",
          subItems: [
            { title: "Roles", to: "/parametres" }
          ]
        },
        {
          icon: ParamMenuIcon,
          title: "Paramètres des produits",
          subItems: [
            { title: "Catégories de Produits", to: "/parametres" },
            { title: "Paramètres de Prix", to: "/utilisateurs" },
            { title: "Stock Minimun", to: "/utilisateurs" }
          ]
        },
        {
          icon: ParamMenuIcon,
          title: "Paramètres de Paiement",
          subItems: [
            { title: "Modes de paiement", to: "/parametres" },
            { title: "Gestion des Vourchers", to: "/utilisateurs" },
            { title: "Réconciliation Bancaire", to: "/utilisateurs" }
          ]
        },
        {
          icon: ParamMenuIcon,
          title: "Paramètres de Reporting",
          subItems: [
            { title: "Configuration des Rapports", to: "/parametres" },
            { title: "Périodicité des Rapports", to: "/utilisateurs" },
            { title: "Exportation des données", to: "/utilisateurs" }
          ]
        }
      ]
    }
  ]
};
