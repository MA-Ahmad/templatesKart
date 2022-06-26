import { Component, ComponentContainer } from './types';
import { IoMdPricetags } from 'react-icons/io';

const components_list: Component[] = [
  {
    id: 'pricing',
    name: 'Single tier',
    filename: 'single-tier'
  },
  {
    id: 'pricing',
    name: 'Two tiers',
    filename: 'two-tiers'
  },
  {
    id: 'pricing',
    name: 'Three tiers with icons',
    filename: 'three-tiers-with-icons'
  }
];

export const pricing: ComponentContainer = {
  id: 'pricing',
  name: 'Pricing',
  icon: IoMdPricetags,
  data: components_list
};
