export interface FichePrix {
  id: string; // Si 'id' est généré automatiquement
  date_debut: string;
  date_fin: string;
  prix_achat_ht: number;
  prix_achat_ttc: number;
  pourcentage_precompte: number;
  pourcentage_tva: number;
  prix_vente_ttc: number;
  marge_ttc: number;
  pourcentage_marge: number;
  [key: string]: any; 
}

export interface FichePrixState {
  data: FichePrix[] | null; // Doit être un tableau pour correspondre à votre logique
  loading: boolean;
  error: string | null;
}

// Mise à jour des types de formulaire
export interface FormInput {
  name: string;
  label: string;
  type: string;
  value?: string | number;
  readOnly?: boolean;
  options?: string[];
}
  