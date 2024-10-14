// types/sidebar.ts
export interface MenuItemType {
  id: string;
  type: 'image';
  src: string;
  hoverSrc?: string; // Support de l'image au survol
  alt: string;
  width: number;
  height: number;
  className: string;
}

export interface SubItemType {
  title: string;
  to: string;
}

export interface SidebarItemType {
  icon: string;
  title: string;
  subItems: SubItemType[];
}

export interface SectionType {
  id: string;
  menuItem: MenuItemType;
  sidebarItems: SidebarItemType[];
}

export interface SidebarConfig {
  sections: SectionType[];
}
