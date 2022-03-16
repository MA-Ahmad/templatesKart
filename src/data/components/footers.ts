import { Component, ComponentContainer } from './types';
import { CgToolbarBottom } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'footers',
    name: 'With subscribe field',
    filename: 'subscribe-field'
  },
  {
    id: 'footers',
    name: 'With links',
    filename: 'detail-links'
  }
];

export const footers: ComponentContainer = {
  id: 'footers',
  name: 'Footers',
  icon: CgToolbarBottom,
  data: components_list
};
