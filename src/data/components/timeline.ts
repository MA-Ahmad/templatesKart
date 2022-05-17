import { Component, ComponentContainer } from './types';
import { GoMilestone } from 'react-icons/go';

const components_list: Component[] = [
  {
    id: 'timeline',
    name: 'Milestones',
    filename: 'milestones',
    isNewComponent: true
  },
  {
    id: 'timeline',
    name: 'Articles',
    filename: 'articles',
    isNewComponent: true
  },
  {
    id: 'timeline',
    name: 'With icons',
    filename: 'with-icons',
    isNewComponent: true
  }
];

export const timeline: ComponentContainer = {
  id: 'timeline',
  name: 'timeline',
  hasAnyNewComponent: true,
  icon: GoMilestone,
  data: components_list
};
