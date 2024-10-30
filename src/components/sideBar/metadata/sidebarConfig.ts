import { SidebarConfig } from '@components/types/sidebar/sidebarTypes';
import { VenteMenuIcon } from '@/assets/svg/venteMenuIcon';
import { RapportMenuIcon } from '@/assets/svg/rapportMenuIcon';
import { ParamMenuIcon } from '@/assets/svg/paramMenuIcon';
import { VenteIcon } from '@/assets/svg/venteIcon';
import { SupplyIcon } from '@/assets/svg/supplyIcon';
import { StockIcon } from '@/assets/svg/stockIcon';
import { ClienteleIcon } from '@/assets/svg/clienteleIcon';
import { ActiviteIcon } from '@/assets/svg/activiteIcon';
import { AchatDepenseIcon } from '@/assets/svg/achatdepenseIcon';
import { RapportStockIcon } from '@/assets/svg/rapportStockIcon';
import { RapportSuiviIcon } from '@/assets/svg/rapportSuiviIcon';
import { RapportAchatIcon } from '@/assets/svg/rapportAchatIcon';
import { RapportSupplyIcon } from '@/assets/svg/rapportSupplyIcon';
import { RapportVenteIcon } from '@/assets/svg/rapportVenteIcon';
import { GestionRoleIcon } from '@/assets/svg/gestionRoleIcon';
import { ParamPaiementIcon } from '@/assets/svg/parametrePaiementIcon';
import { ParamProduitIcon } from '@/assets/svg/parametreProduitIcon';
import { ParamRepportIcon } from '@/assets/svg/parametreRepportIcon';

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
          icon: VenteIcon,
          title: "Ventes",
          subItems: [
            { title: "Produits", to: "/produits" },
            { title: "Ventes", to: "/ventes" }
          ]
        },
        {
          icon: SupplyIcon,
          title: "Approvisionnement",
          subItems: [
            { title: "Bons de Commande", to: "/bons-de-commande" },
            { title: "Approvisionnement", to: "/approvisionnement" }
          ]
        },
        {
          icon: StockIcon,
          title: "Stocks",
          subItems: [
            { title: "Stock Produits Blancs", to: "/stock-fuel" },
            { title: "Stock Produits Boutique", to: "/stock-OLA" }
          ]
        },
        {
          icon: ClienteleIcon,
          title: "Clientèle",
          subItems: [
            { title: "Comptes", to: "/comptes" },
            { title: "Clients", to: "/clients" }
          ]
        },
        {
          icon: ActiviteIcon,
          title: "Suivi de l'Activité",
          subItems: [
            { title: "Inventaires Fuel", to: "/inventaire-fuel" },
            { title: "Inventaires OLA", to: "/inventaire-OLA" },
            { title: "Control Stock Fuel", to: "/control-stock" },
            { title: "Constats", to: "/constat" }
          ]
        },
        {
          icon: AchatDepenseIcon,
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
          icon: RapportVenteIcon,
          title: "Rapports de ventes",
          subItems: [
            { title: "Ventes Produits", to: "/rapport-ventes-produits" },
            { title: "Ventes Fuel", to: "/rapport-ventes-fuel" },
            { title: "Ventes Journalières", to: "/rapport-ventes-journalieres" }
          ]
        },
        {
          icon: RapportSupplyIcon,
          title: "Rapports d'approvisionnements",
          subItems: [
            { title: "Suivi des approvisionnements", to: "/rapports/ventes-journalieres" },
            { title: "Rapport des Bons de commande", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: RapportStockIcon,
          title: "Rapports de stocks",
          subItems: [
            { title: "Stock Produits Blancs", to: "/rapports/ventes-journalieres" },
            { title: "Stock Produits Boutique", to: "/rapports/analyse-mensuelle" },
            { title: "Suivi des Versements", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: RapportAchatIcon,
          title: "Rapports d'Achats/Dépenses",
          subItems: [
            { title: "Dépenses Totales", to: "/rapports/ventes-journalieres" },
            { title: "Suivi des Salaires", to: "/rapports/analyse-mensuelle" },
            { title: "Analyse des Manquants", to: "/rapports/analyse-mensuelle" }
          ]
        },
        {
          icon: RapportSuiviIcon,
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
          icon: GestionRoleIcon,
          title: "Gestion des Roles",
          subItems: [
            { title: "Roles", to: "/roles" }
          ]
        },
        {
          icon: ParamProduitIcon,
          title: "Paramètres des produits",
          subItems: [
            { title: "Catégories de Produits", to: "/parametres" },
            { title: "Paramètres de Prix", to: "/utilisateurs" },
            { title: "Stock Minimun", to: "/utilisateurs" }
          ]
        },
        {
          icon: ParamPaiementIcon,
          title: "Paramètres de Paiement",
          subItems: [
            { title: "Modes de paiement", to: "/parametres" },
            { title: "Gestion des Vourchers", to: "/utilisateurs" },
            { title: "Réconciliation Bancaire", to: "/utilisateurs" }
          ]
        },
        {
          icon: ParamRepportIcon,
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
