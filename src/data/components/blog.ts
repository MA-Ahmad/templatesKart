import { Component, ComponentContainer } from './types';
import { FaBlogger } from 'react-icons/fa';

const components_list: Component[] = [
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
    name: 'Blog cards',
    filename: 'blog-card'
  }
];

export const blog: ComponentContainer = {
  id: 'blog',
  name: 'Blog',
  icon: FaBlogger,
  data: components_list
};
