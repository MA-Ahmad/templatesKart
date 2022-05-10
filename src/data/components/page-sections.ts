import { Component, ComponentContainer } from './types';
import { CgFormatSeparator } from 'react-icons/cg';

const components_list: Component[] = [
  {
    id: 'page-sections',
    name: 'CTA with copy to clipboard',
    filename: 'small-detail'
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
    name: 'Features section',
    filename: 'features'
  },
  {
    id: 'page-sections',
    name: 'CTA banner',
    filename: 'cta-banner',
    isNewComponent: true
  },
  {
    id: 'page-sections',
    name: 'Mission section',
    filename: 'mission-section',
    isNewComponent: true
  },
  {
    id: 'page-sections',
    name: 'Overview section',
    filename: 'overview-section',
    isNewComponent: true
  }
];

export const pageSections: ComponentContainer = {
  id: 'page-sections',
  name: 'Page Sections',
  hasAnyNewComponent: true,
  icon: CgFormatSeparator,
  data: components_list
};
