import { Component, ComponentContainer } from './types';
import { BsCardText } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'cards',
    name: 'User Card',
    filename: 'user-card',
    isNewComponent: true
  },
  {
    id: 'cards',
    name: 'Product Cards',
    filename: 'product-img-card',
    isNewComponent: true
  },
  {
    id: 'cards',
    name: 'Portfolio Card',
    filename: 'portfolio-card'
  },
  {
    id: 'cards',
    name: 'Course card',
    filename: 'access-course',
    isNewComponent: true
  },
  {
    id: 'cards',
    name: 'Github Repo With Image',
    filename: 'github-repo-image'
  },
  {
    id: 'cards',
    name: 'Exclusive offer',
    filename: 'product-offer'
  },
  {
    id: 'cards',
    name: 'Career Card',
    filename: 'career-card'
  },
  {
    id: 'cards',
    name: 'Github Repo Cards',
    filename: 'github-repo'
  },
  {
    id: 'cards',
    name: 'Project Info Cards',
    filename: 'project-card'
  }
];

export const cards: ComponentContainer = {
  id: 'cards',
  name: 'Cards',
  hasAnyNewComponent: true,
  icon: BsCardText,
  data: components_list
};
