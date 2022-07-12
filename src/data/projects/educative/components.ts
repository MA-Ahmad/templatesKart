import { Component } from 'data/projects/types';

export const components: Component[] = [
  {
    name: 'Header',
    type: 'header',
    page_id: 'home',
    filename: 'header'
  },
  {
    name: 'Course card',
    type: 'card',
    page_id: 'home',
    filename: 'course-card'
  },
  {
    name: 'Course detail',
    type: 'hero',
    page_id: 'course',
    filename: 'course-detail'
  },
  {
    name: 'Trainer profile',
    type: 'card',
    page_id: 'course',
    filename: 'trainer-profile'
  }
];
