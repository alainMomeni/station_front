// src/components/types/table/tableTypes.ts

export interface Column {
  header: string;
  key: string;
}

export interface Button {
  text: string;
  icon: string;
}

export interface TableRow {
  [key: string]: boolean | string | number;
}

export interface TableConfig {
  title: string;
  dataKey: string;
  addRoute: string;
  editRoute: string;
  columns: Column[];
  buttons: Button[];
  statusOptions: string[];
  filterOptions: string[];
  defaultStatus: string;
  defaultFilter: string;
}

export interface TableDataProps {
  columns: Column[];
  data: TableRow[];
  onRowSelect: (row: TableRow) => void;
  selectedRows: TableRow[];
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