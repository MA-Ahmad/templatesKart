import { Component, ComponentContainer } from './types';
import { GoMilestone } from 'react-icons/go';

const components_list: Component[] = [
  {
    id: 'timeline',
    name: 'Milestones',
    filename: 'milestones'
  },
  {
    id: 'timeline',
    name: 'Articles',
    filename: 'articles'
  },
  {
    id: 'timeline',
    name: 'With icons',
    filename: 'with-icons'
  }
];

export const timeline: ComponentContainer = {
  id: 'timeline',
  name: 'timeline',
  icon: GoMilestone,
  data: components_list
};
