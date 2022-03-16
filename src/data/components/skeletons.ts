import { Component, ComponentContainer } from './types';
import { RiCheckboxBlankLine } from 'react-icons/ri';

const components_list: Component[] = [
  {
    id: 'skeletons',
    name: 'Posts feed skeleton',
    filename: 'posts-skeleton'
  },
  {
    id: 'skeletons',
    name: 'List Skeleton',
    filename: 'list-skeleton'
  }
];

export const skeletons: ComponentContainer = {
  id: 'skeletons',
  name: 'Skeletons',
  icon: RiCheckboxBlankLine,
  data: components_list
};
