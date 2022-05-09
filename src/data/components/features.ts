import { Component, ComponentContainer } from './types';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const components_list: Component[] = [
  {
    id: 'features',
    name: 'Simple 2 columns',
    filename: 'simple-2-columns',
    isNewComponent: true
  }
];

export const features: ComponentContainer = {
  id: 'features',
  name: 'Features',
  hasAnyNewComponent: true,
  icon: MdOutlineFeaturedPlayList,
  data: components_list
};
