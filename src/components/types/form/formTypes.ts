export interface PathAttributes {
    id: string;
    d: string;
    stroke?: string;
    fill?: string;
    strokeLinecap?: "round" | "inherit" | "butt" | "square";
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel";
    fillRule?: "nonzero" | "evenodd";
    clipRule?: string;
  }
  
  export interface IconConfig {
    id: string;
    paths: PathAttributes[];
  }
  
  export interface ButtonConfig {
    text: string;
    icon: IconConfig;
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

  export interface InputFieldProps {
    label: string;
    type?: string;
  }