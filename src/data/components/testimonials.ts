import { Component, ComponentContainer } from './types';
import { BsChatSquareQuote } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'testimonials',
    name: 'Simple with Avatar',
    filename: 'with-avatar'
  },
  {
    id: 'testimonials',
    name: 'With Arrow head cards',
    filename: 'arrow-head-cards'
  }
];

export const testimonials: ComponentContainer = {
  id: 'testimonials',
  name: 'Testimonials',
  icon: BsChatSquareQuote,
  data: components_list
};
