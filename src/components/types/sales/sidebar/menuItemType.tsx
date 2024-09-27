export interface MenuItemType {
    type: 'image' | 'svg';
    className: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    viewBox?: string;
    svgClassName?: string;
    content?: string;
  }