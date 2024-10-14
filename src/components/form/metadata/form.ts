import { FormConfig } from '@/components/types/form/formTypes';

export const formConfigs: Record<'supply' | 'purchaseOrder', FormConfig> = {
  supply: {
    title: "Nouvel approvisionnement",
    cancelRoute: "/approvisionnement",
    buttons: [
      { text: "Enregistrer" },
      { text: "Annuler" }
    ],
    formInputs: [
      { label: "Commande N", type: "text" },
      { label: "Bon de Livraison", type: "text" },
      { label: "Quantité livrée", type: "number" },
      { label: "Unité de mesure", type: "text" },
      { label: "Capacité récipient", type: "number" },
      { label: "Valorisation", type: "text" }
    ],
    showFooter: true
  },
  purchaseOrder: {
    title: "Nouveau bon de commande",
    cancelRoute: "/approvisionnement/bons-de-commande",
    buttons: [
      { text: "Enregistrer" },
      { text: "Annuler" }
    ],
    formInputs: [
      { label: "Reference", type: "text" }
    ],
    showFooter: true
  }
};
