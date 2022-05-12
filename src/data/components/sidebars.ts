import { Component, ComponentContainer } from './types';
import { BsLayoutSidebarInset } from 'react-icons/bs';

const components_list: Component[] = [
  {
    id: 'sidebars',
    name: 'Sidebar with header',
    filename: 'sidebar-with-header',
    isNewComponent: true
  }
];

export const sidebars: ComponentContainer = {
  id: 'sidebars',
  name: 'Sidebars',
  hasAnyNewComponent: true,
  icon: BsLayoutSidebarInset,
  data: components_list
};
