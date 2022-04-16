import { Component, ComponentContainer } from './types';
import { BsChatSquareQuote } from 'react-icons/bs';

const components_list: Component[] = [
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
  icon: BsChatSquareQuote,
  data: components_list
};
