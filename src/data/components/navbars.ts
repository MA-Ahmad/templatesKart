import { Component, ComponentContainer } from './types';
import { CgBox } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'navbars',
    name: 'Centered links',
    filename: 'centered-links'
  },
  {
    id: 'navbars',
    name: 'Simple one',
    filename: 'simple-one'
  },
  {
    id: 'navbars',
    name: 'With multiple links',
    filename: 'multiple-links'
  },
  {
    id: 'navbars',
    name: 'With search field',
    filename: 'search-field'
  },
  {
    id: 'navbars',
    name: 'With gradient',
    filename: 'with-gradient'
  }
];

export const navbars: ComponentContainer = {
  id: 'navbars',
  name: 'Navbars',
  icon: CgBox,
  data: components_list
};
