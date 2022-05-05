import { Component, ComponentContainer } from './types';
import { CgFormatSeparator } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'page-sections',
    name: 'Small detail',
    filename: 'small-detail',
    isNewComponent: true
  },
  {
    id: 'page-sections',
    name: 'Info Section',
    filename: 'info-section'
  },
  {
    id: 'page-sections',
    name: 'Timeline',
    filename: 'timeline'
  },
  {
    id: 'page-sections',
    name: 'Show Features',
    filename: 'features'
  }
];

export const pageSections: ComponentContainer = {
  id: 'page-sections',
  name: 'Page Sections',
  hasAnyNewComponent: true,
  icon: CgFormatSeparator,
  data: components_list
};
