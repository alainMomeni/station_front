export interface ButtonConfig {
  text: string;
}

export interface FormInputBase {
  label: string;
  type: string;
  readOnly?: boolean;
}

export interface TextInput extends FormInputBase {
  type: 'text' | 'number';
}

export interface SelectInput extends FormInputBase {
  type: 'select';
  options: string[];
}

export type FormInput = TextInput | SelectInput;

export interface FormConfig {
  title: string;
  cancelRoute: string;
  buttons: ButtonConfig[];
  formInputs: FormInput[];
  showFooter: boolean;
  readOnly?: boolean;
}

export interface InputFieldProps {
  input: FormInput;
  readOnly?: boolean;
}