import { Component, ComponentContainer } from './types';
import { FaBlogger } from 'react-icons/fa';

const components_list: Component[] = [
  {
    id: 'blog',
    name: 'Transparent bg',
    filename: 'transparent-background',
    isNewComponent: true
  },
  {
    id: 'blog',
    name: 'With tag',
    filename: 'blog-card-with-tag',
    isNewComponent: true
  },
  {
    id: 'blog',
    name: 'Article Info',
    filename: 'article-info'
  },
  {
    id: 'blog',
    name: 'Posts Feed',
    filename: 'posts-feed'
  },
  {
    id: 'blog',
    name: 'Blog card with image',
    filename: 'blog-card'
  }
];

export const blog: ComponentContainer = {
  id: 'blog',
  name: 'Blog',
  hasAnyNewComponent: true,
  icon: FaBlogger,
  data: components_list
};
