import { Component, ComponentContainer } from '../types';

const components_list: Component[] = [
  {
    name: 'Portfolio Card',
    id: 'cards',
    filename: 'portfolio-card'
  }
];

export const cards: ComponentContainer = {
  name: 'Card Components',
  id: 'cards',
  data: components_list
};
