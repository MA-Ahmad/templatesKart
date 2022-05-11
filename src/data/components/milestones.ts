import { Component, ComponentContainer } from './types';
import { GoMilestone } from 'react-icons/go';

const components_list: Component[] = [
  {
    id: 'milestones',
    name: 'With cards on both sides',
    filename: 'two-side-cards',
    isNewComponent: true
  },
  {
    id: 'milestones',
    name: 'With cards on one side',
    filename: 'one-side-card',
    isNewComponent: true
  },
  {
    id: 'milestones',
    name: 'With icons year-wise',
    filename: 'year-wise',
    isNewComponent: true
  }
];

export const milestones: ComponentContainer = {
  id: 'milestones',
  name: 'Milestones',
  hasAnyNewComponent: true,
  icon: GoMilestone,
  data: components_list
};
