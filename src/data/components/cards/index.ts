import { Component, ComponentContainer } from '../types';
import { BsCardText } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'cards',
    name: 'Portfolio Card',
    filename: 'portfolio-card'
  },
  {
    id: 'cards',
    name: 'Article Info',
    filename: 'article-info'
  }
];

export const cards: ComponentContainer = {
  id: 'cards',
  name: 'Cards',
  icon: BsCardText,
  data: components_list
};
