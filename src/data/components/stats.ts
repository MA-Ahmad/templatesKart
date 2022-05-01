import { Component, ComponentContainer } from './types';
import { BiStats } from 'react-icons/bi';

const components_list: Component[] = [
  {
    id: 'stats',
    name: 'Library Stats',
    filename: 'library-stats',
    isNewComponent: true
  },
  {
    id: 'stats',
    name: 'Blog Stats',
    filename: 'blog-stats'
  },
  {
    id: 'stats',
    name: 'Stats with icons',
    filename: 'with-icons'
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
  icon: BiStats,
  data: components_list
};
