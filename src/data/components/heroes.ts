import { Component, ComponentContainer } from './types';
import { BsCardHeading } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'heroes',
    name: 'Product Intro',
    filename: 'product-intro'
  },
  {
    id: 'heroes',
    name: 'Show Info',
    filename: 'intro-section'
  },
  {
    id: 'heroes',
    name: 'With background Image',
    filename: 'with-bg-image'
  }
];

export const heroes: ComponentContainer = {
  id: 'heroes',
  name: 'Heroes',
  icon: BsCardHeading,
  data: components_list
};
