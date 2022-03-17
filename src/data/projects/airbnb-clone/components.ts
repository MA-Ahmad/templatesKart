import { Component } from 'data/projects/types';

export const components: Component[] = [
  {
    name: 'Header',
    type: 'hero-header',
    page_id: 'home',
    filename: 'header'
  },
  {
    name: 'Booking section',
    type: 'filters',
    page_id: 'home',
    filename: 'booking-section'
  },
  {
    name: 'Reviews',
    type: 'cards',
    page_id: 'home',
    filename: 'reviews'
  },
  {
    name: 'Features',
    type: 'feature',
    page_id: 'home',
    filename: 'features-section'
  },
  {
    name: 'Places',
    type: 'cards',
    page_id: 'home',
    filename: 'places'
  },
  {
    name: 'Footer',
    type: 'big-footer',
    page_id: 'home',
    filename: 'footer'
  }
];
