export interface ButtonConfig {
  text: 'Enregistrer' | 'Annuler';
  action: 'submit' | 'cancel';
}

export interface FormInputBase {
  name: string;
  label: string;
  type: string;
  readOnly?: boolean;
}

export interface TextInput extends FormInputBase {
  type: 'text' | 'number' | 'date';
  value?: string | number; // Ajout de la propriété value
}

export interface SelectInput extends FormInputBase {
  type: 'select';
  options: string[];
  value?: string; // Ajout de la propriété value
}

export interface FormInput {
  type: 'number' | 'text' | 'select' | 'date';
  name: string;
  label: string;
  value?: string | number;
  options?: string[];
  readOnly?: boolean;
  required?: boolean;
}

export interface FormConfig {
  title: string;
  cancelRoute: string;
  formName: string;
  buttons: ButtonConfig[];
  formInputs: FormInput[];
  showFooter: boolean;
  readOnly?: boolean;
}


export interface InputFieldProps {
  input: FormInput;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export interface InputConfig {
  name: string;
  label: string;
  type: string; // Exemple : 'text', 'number', etc.
  value?: any;
  required?: boolean;
}

export interface FormComponentProps {
  config: {
    title: string;
    cancelRoute: string;
    readOnly: boolean;
    formInputs: InputConfig[];
    buttons: ButtonConfig[];
    showFooter?: boolean;
  };
  initialData?: Record<string, any>; // Permet des données initiales optionnelles
  onSubmit: (data: Record<string, any>) => Promise<void>; // Fonction appelée pour soumettre le formulaire
  mode?: 'create' | 'edit'; // Indique le mode (par défaut à 'create')
}