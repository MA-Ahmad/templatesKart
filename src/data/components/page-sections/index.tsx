import { Component, ComponentContainer } from '../types';
import { CgFormatSeparator } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'page-sections',
    name: 'Info Section',
    filename: 'info-section'
  }
];

export const pageSections: ComponentContainer = {
  id: 'page-sections',
  name: 'Page Sections',
  icon: CgFormatSeparator,
  data: components_list
};
