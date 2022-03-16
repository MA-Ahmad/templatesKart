import { Component, ComponentContainer } from './types';
import { CgBox } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'navbars',
    name: 'With search field',
    filename: 'search-field'
  },
  {
    id: 'navbars',
    name: 'Simple one',
    filename: 'simple-one'
  }
];

export const navbars: ComponentContainer = {
  id: 'navbars',
  name: 'Navbars',
  icon: CgBox,
  data: components_list
};
