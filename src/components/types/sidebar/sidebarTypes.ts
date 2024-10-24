// types/sidebarTypes.ts
import { FC } from 'react';

export interface IconProps {
  className?: string;
  color?: string;
}

export interface MenuItemType {
  id: string;
  type: 'image';
  icon: FC<IconProps>;
  activeIcon?: FC<IconProps>;
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
  icon: FC<IconProps>;
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