// Types pour la configuration des boutons et des champs de formulaire
export interface ButtonConfig {
  text: string;
}

export interface FormInput {
  label: string;
  type: string;
}

export interface FormConfig {
  title: string;
  buttons: ButtonConfig[];
  formInputs: FormInput[];
  cancelRoute: string;
  showFooter?: boolean;
}

// Props pour le composant InputField
export interface InputFieldProps {
  label: string;
  type?: string;
}
