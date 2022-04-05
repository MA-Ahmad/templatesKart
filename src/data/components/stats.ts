import { Component, ComponentContainer } from './types';
import { BsCardText } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'stats',
    name: 'Blog Stats',
    filename: 'blog-stats'
  },
  {
    id: 'stats',
    name: 'Brand Stats',
    filename: 'brand-stats'
  },
  {
    id: 'stats',
    name: 'Split with image',
    filename: 'split-with-image'
  }
];

export const stats: ComponentContainer = {
  id: 'stats',
  name: 'Stats',
  icon: BsCardText,
  data: components_list
};
