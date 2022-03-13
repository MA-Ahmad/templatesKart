export interface Component {
  name: string;
  filename: string;
  id: string;
}

export interface ComponentContainer {
  name: string;
  id: string;
  data: Component[];
}
