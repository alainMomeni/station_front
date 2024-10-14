import { FormConfig } from "@components/types/form/formTypes";

export const formConfigs: Record<'supply' | 'purchaseOrder' | 'vente' | 'produit', FormConfig> = {
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
  },
  vente: {
    title: "Nouvelle vente",
    cancelRoute: "/ventes",
    buttons: [
      { text: "Enregistrer" },
      { text: "Annuler" }
    ],
    formInputs: [
      { label: "Client", type: "select", options: ["Alain Momeni", "Francis Doe", "Robert Doe"] },
      { label: "Prix de vente", type: "text" },
      { label: "Quantité vendu", type: "number" },
      { label: "Capacité", type: "number" },
      { label: "Mode de paiement", type: "select", options: ["Espèces", "Carte", "Virement"] },      
      { label: "Unité de mesure", type: "select", options: ["Kg", "L", "Unité"] },
      { label: "Prix total", type: "number", readOnly: true },
      { label: "Marge", type: "number", readOnly: true },
      { label: "Quantité totale", type: "number", readOnly: true }
    ],
    showFooter: true
  },
  produit: {
    title: "Nouveau produit",
    cancelRoute: "/produits",
    buttons: [
      { text: "Enregistrer" },
      { text: "Annuler" }
    ],
    formInputs: [
      { label: "Nom du produit", type: "text" },
      { label: "Catégorie de produit", type: "select", options: ["Lubrifiant", "Filtres", "Gaz"]  },
      { label: "Type", type: "select", options: ["Produit blanc", "Produit OLA"]  },
      { label: "Fiche de prix", type: "select", options: ["Fp-14-10-24", "Fp-12-10-24"]  },
      { label: "Quantité disponible", type: "number", readOnly: true },
      { label: "Quantité totale", type: "number", readOnly: true },
    ],
    showFooter: true
  }
};