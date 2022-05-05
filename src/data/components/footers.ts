import { Component, ComponentContainer } from './types';
import { CgToolbarBottom } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'footers',
    name: 'Large with logo left',
    filename: 'large-with-logo-left',
    isNewComponent: true
  },
  {
    id: 'footers',
    name: 'With logo left',
    filename: 'with-logo-left',
    isNewComponent: true
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
  hasAnyNewComponent: true,
  icon: CgToolbarBottom,
  data: components_list
};
