import { Component, ComponentContainer } from './types';
import { MdOutlineRateReview } from 'react-icons/md';

const components_list: Component[] = [
  {
    id: 'reviews',
    name: 'Review with images',
    filename: 'images-review'
  }
];

export const reviews: ComponentContainer = {
  id: 'reviews',
  name: 'Reviews',
  icon: MdOutlineRateReview,
  data: components_list
};
