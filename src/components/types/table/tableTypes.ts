import React from 'react';

export interface Column {
  header: string;
  key: string;
}

export interface Button {
  text: string;
  icon?: React.FC<{ className?: string }>;
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