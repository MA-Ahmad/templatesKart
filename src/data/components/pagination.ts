import { Component, ComponentContainer } from './types';
import { SiElasticstack } from 'react-icons/si';

const components_list: Component[] = [
  {
    id: 'pagination',
    name: 'Default pagination',
    filename: 'default-pagination'
  }
];

export const pagination: ComponentContainer = {
  id: 'pagination',
  name: 'Pagination',
  hasAnyNewComponent: true,
  icon: SiElasticstack,
  data: components_list
};
