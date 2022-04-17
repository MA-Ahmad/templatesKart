import { Component, ComponentContainer } from './types';
import { MdFormatListBulleted } from 'react-icons/md';

const components_list: Component[] = [
  {
    id: 'stacked-lists',
    name: 'Aritcles list',
    filename: 'articles-list'
  }
];

export const stackedLists: ComponentContainer = {
  id: 'stacked-lists',
  name: 'Stacked Lists',
  icon: MdFormatListBulleted,
  data: components_list
};
