import { Component, ComponentContainer } from './types';
import { BsCardHeading } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'heroes',
    name: 'Split with image',
    filename: 'image-right-side',
    isNewComponent: true
  },
  {
    id: 'heroes',
    name: 'Left align content',
    filename: 'left-align'
  },
  {
    id: 'heroes',
    name: 'With Background image',
    filename: 'bg-image',
    isNewComponent: true
  },
  {
    id: 'heroes',
    name: 'With gradient cover',
    filename: 'cover-gradient',
    isNewComponent: true
  },
  {
    id: 'heroes',
    name: 'Centered with logos',
    filename: 'centered-with-logos'
  },
  {
    id: 'heroes',
    name: 'Simply Centered',
    filename: 'simply-centered',
    isNewComponent: true
  },
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
    name: 'With image cover',
    filename: 'with-bg-image'
  }
];

export const heroes: ComponentContainer = {
  id: 'heroes',
  name: 'Heroes',
  hasAnyNewComponent: true,
  icon: BsCardHeading,
  data: components_list
};
