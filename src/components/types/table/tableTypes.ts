export interface Column {
  header: string;
  key: string;
}

export interface IconPath {
  id: string;
  d: string;
  fillRule?: "nonzero" | "evenodd";
  clipRule?: string;
  fill?: string;
  stroke?: string;
  strokeLinecap?: "round" | "inherit" | "butt" | "square";
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel";
}

export interface Button {
  text: string;
  icon?: {
    id: string;
    paths: IconPath[];
  };
}

export interface TableRow {
  [key: string]: boolean | string | number;
}

export interface TableConfig {
  title: string;
  addRoute: string;
  editRoute: string;
  columns: Column[];
  buttons: Button[];
  statusOptions: string[];
  filterOptions: string[];
  defaultStatus: string;
  defaultFilter: string;
  data: TableRow[];
}

export interface TableDataProps {
  columns: Column[];
  data: TableRow[];
}

export interface TableButtonsProps {
  buttons: Button[];
  handleButtonClick: (buttonText: string) => void;
}

export interface StatusFilterProps {
  selectedStatus: string;
  statusOptions: string[];
  onSelectStatus: (status: string) => void;
}

export interface SearchAndFilterProps {
  selectedFilter: string;
  filterOptions: string[];
  onSelectFilter: (filter: string) => void;
}