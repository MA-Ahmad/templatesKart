import { Component, ComponentContainer } from './types';
import { CgToolbarBottom } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'footers',
    name: 'With logo left',
    filename: 'with-logo-left'
  },
  {
    id: 'footers',
    name: 'With subscribe field',
    filename: 'subscribe-field'
  },
  {
    id: 'footers',
    name: 'Fewer links',
    filename: 'fewer-links'
  },
  {
    id: 'footers',
    name: 'Big footer',
    filename: 'detail-links'
  }
];

export const footers: ComponentContainer = {
  id: 'footers',
  name: 'Footers',
  icon: CgToolbarBottom,
  data: components_list
};
