// src/types.ts

export type Column = {
    key: string;
    label: string;
  };
  
  export type Row = {
    [key: string]: any;
  };
  
  export type Action = {
    type: string;
    label: string;
    icon?: string;
  };
  
  export type TableConfig = {
    title: string;
    columns: Column[];
    rows: Row[];
    actions: Action[];
  };
  