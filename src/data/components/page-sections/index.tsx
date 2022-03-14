import { Component, ComponentContainer } from '../types';

const components_list: Component[] = [
  {
    name: 'Info Section',
    id: 'page-sections',
    filename: 'info-section'
  }
];

export const pageSections: ComponentContainer = {
  name: 'Page Sections',
  id: 'page-sections',
  data: components_list
};
