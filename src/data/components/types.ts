import { IconType } from 'react-icons';

export interface Component {
  id: string;
  name: string;
  filename: string;
}

export interface ComponentContainer {
  id: string;
  name: string;
  icon: IconType;
  data: Component[];
}
