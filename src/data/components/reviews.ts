import { Component, ComponentContainer } from './types';
import { MdOutlineRateReview } from 'react-icons/md';

const components_list: Component[] = [
  {
    id: 'reviews',
    name: 'Review with images',
    filename: 'images-review'
  },
  {
    id: 'reviews',
    name: 'Simple Reviews',
    filename: 'simple-review'
  },
  {
    id: 'reviews',
    name: 'With rating chart',
    filename: 'summary-chart'
  }
];

export const reviews: ComponentContainer = {
  id: 'reviews',
  name: 'Reviews',
  icon: MdOutlineRateReview,
  data: components_list
};
