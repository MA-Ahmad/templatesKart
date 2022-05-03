import { Component, ComponentContainer } from './types';
import { BsChatSquareQuote } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'testimonials',
    name: 'Image on left side',
    filename: 'large-image',
    isNewComponent: true
  },
  {
    id: 'testimonials',
    name: 'With dotted box',
    filename: 'with-dotted-box',
    isNewComponent: true
  },
  {
    id: 'testimonials',
    name: 'Card with avatar',
    filename: 'avatar-card-horizontally'
  },
  {
    id: 'testimonials',
    name: 'Card with avatar2',
    filename: 'avatar-card2'
  },
  {
    id: 'testimonials',
    name: 'With Avatar display horizontally',
    filename: 'avatar-horizontally'
  },
  {
    id: 'testimonials',
    name: 'With Avatar display vertically',
    filename: 'with-avatar'
  },
  {
    id: 'testimonials',
    name: 'With Arrow head cards',
    filename: 'arrow-head-cards'
  },
  {
    id: 'testimonials',
    name: 'With Rotating cards',
    filename: 'rotating-cards'
  }
];

export const testimonials: ComponentContainer = {
  id: 'testimonials',
  name: 'Testimonials',
  hasAnyNewComponent: true,
  icon: BsChatSquareQuote,
  data: components_list
};
