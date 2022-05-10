import { Component, ComponentContainer } from './types';
import { IoMdPricetags } from 'react-icons/io';

const components_list: Component[] = [
  {
    id: 'pricing',
    name: 'Single tier',
    filename: 'single-tier',
    isNewComponent: true
  },
  {
    id: 'pricing',
    name: 'Two tiers',
    filename: 'two-tiers',
    isNewComponent: true
  }
];

export const pricing: ComponentContainer = {
  id: 'pricing',
  name: 'Pricing',
  hasAnyNewComponent: true,
  icon: IoMdPricetags,
  data: components_list
};
