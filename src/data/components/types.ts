import { IconType } from 'react-icons';

export interface Component {
  id: string;
  name: string;
  filename: string;
  isNewComponent?: boolean;
}

export interface ComponentContainer {
  id: string;
  name: string;
  hasAnyNewComponent?: boolean;
  icon: IconType;
  svgIcon?: JSX.Element;
  data: Component[];
}
