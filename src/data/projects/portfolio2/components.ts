import { Component } from 'data/projects/types';

export const components: Component[] = [
  {
    name: 'Header',
    type: 'navbar',
    page_id: 'home',
    filename: 'header'
  },
  {
    name: 'Intro Section',
    type: 'page-sections',
    page_id: 'home',
    filename: 'intro-section'
  },
  {
    name: 'Skills',
    type: 'cards',
    page_id: 'home',
    filename: 'skills'
  },
  {
    name: 'Career',
    type: 'cards',
    page_id: 'home',
    filename: 'career'
  },
  {
    name: 'Footer',
    type: 'footer',
    page_id: 'home',
    filename: 'footer'
  },
  {
    name: 'Articles',
    type: 'cards',
    page_id: 'articles',
    filename: 'featured-articles'
  },
  {
    name: 'Open source',
    type: 'cards',
    page_id: 'open-source',
    filename: 'repos-list'
  },
  {
    name: 'Projects',
    type: 'cards',
    page_id: 'projects',
    filename: 'projects-list'
  }
];
