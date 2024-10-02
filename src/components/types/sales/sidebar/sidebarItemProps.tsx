export interface SidebarItemProps {
  icon: JSX.Element;
  title: string;
  children?: JSX.Element | JSX.Element[];
  isOpen?: boolean;
  onClick?: () => void;
}