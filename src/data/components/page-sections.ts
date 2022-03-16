import { Component, ComponentContainer } from './types';
import { CgFormatSeparator } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'page-sections',
    name: 'Info Section',
    filename: 'info-section'
  },
  {
    id: 'page-sections',
    name: 'Timeline',
    filename: 'timeline'
  }
];

export const pageSections: ComponentContainer = {
  id: 'page-sections',
  name: 'Page Sections',
  icon: CgFormatSeparator,
  data: components_list
};
