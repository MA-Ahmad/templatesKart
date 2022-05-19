import { Component, ComponentContainer } from './types';
import { BsFillMenuButtonFill } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'menu',
    name: 'Simple one',
    filename: 'simple-one'
  },
  {
    id: 'menu',
    name: 'With sub label',
    filename: 'with-sub-label'
  },
  {
    id: 'menu',
    name: 'With icon',
    filename: 'with-icon'
  }
];

export const menu: ComponentContainer = {
  id: 'menu',
  name: 'Menu',
  hasAnyNewComponent: true,
  icon: BsFillMenuButtonFill,
  data: components_list
};
