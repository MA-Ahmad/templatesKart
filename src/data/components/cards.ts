import { Component, ComponentContainer } from './types';
import { BsCardText } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'cards',
    name: 'Portfolio Card',
    filename: 'portfolio-card'
  },
  {
    id: 'cards',
    name: 'Github Repo Cards',
    filename: 'github-repo'
  },
  {
    id: 'cards',
    name: 'Github Repo With Image',
    filename: 'github-repo-image'
  },
  {
    id: 'cards',
    name: 'Career Card',
    filename: 'career-card'
  }
];

export const cards: ComponentContainer = {
  id: 'cards',
  name: 'Cards',
  icon: BsCardText,
  data: components_list
};
