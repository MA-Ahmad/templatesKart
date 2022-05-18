import { Component, ComponentContainer } from './types';
import { SiElasticstack } from 'react-icons/si';

const components_list: Component[] = [
  {
    id: 'pagination',
    name: 'Default pagination',
    filename: 'default-pagination'
  },
  {
    id: 'pagination',
    name: 'Table data pagination',
    filename: 'table-data'
  },
  {
    id: 'pagination',
    name: 'With button group',
    filename: 'button-group'
  }
];

export const pagination: ComponentContainer = {
  id: 'pagination',
  name: 'Pagination',
  hasAnyNewComponent: true,
  icon: SiElasticstack,
  data: components_list
};
