import { Component } from 'data/projects/types';

export const components: Component[] = [
  {
    name: 'Header',
    type: 'navbar',
    page_id: 'home',
    filename: 'header'
  },
  {
    name: 'Posts Feed',
    type: 'card',
    page_id: 'home',
    filename: 'posts-feed'
  },
  {
    name: 'Posts Skeleton',
    type: 'skeleton',
    page_id: 'home',
    filename: 'posts-skeleton'
  },
  {
    name: 'Tags',
    type: 'listing',
    page_id: 'home',
    filename: 'tags'
  },
  {
    name: 'Links',
    type: 'listing',
    page_id: 'home',
    filename: 'links'
  },
  {
    name: 'Listings',
    type: 'listing-card',
    page_id: 'home',
    filename: 'listing'
  },
  {
    name: 'Listing Skeleton',
    type: 'listing-skeleton',
    page_id: 'home',
    filename: 'listing-skeleton'
  }
];
