import { Component } from 'data/projects/types';

export const components: Component[] = [
  {
    name: 'Header',
    type: 'navbar',
    page_id: 'home',
    filename: 'header'
  },
  {
    name: 'Hero Section',
    type: 'hero-section',
    page_id: 'home',
    filename: 'hero-section'
  },
  {
    name: 'Note Card',
    type: 'card',
    page_id: 'home',
    filename: 'note-card'
  },
  {
    name: 'Note Form',
    type: 'form',
    page_id: 'home',
    filename: 'note-form'
  },
  {
    name: 'Footer',
    type: 'navbar',
    page_id: 'home',
    filename: 'footer'
  },
  {
    name: 'projects list',
    type: 'card',
    page_id: 'projects',
    filename: 'project-cards'
  }
  // {
  //   name: 'Slider',
  //   type: 'slider',
  //   page_id: 'projects',
  //   filename: 'images-slider'
  // }
];
