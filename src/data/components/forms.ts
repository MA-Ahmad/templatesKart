import { Component, ComponentContainer } from './types';
import { AiOutlineForm } from 'react-icons/ai';

const components_list: Component[] = [
  {
    id: 'forms',
    name: 'Simple Sign in',
    filename: 'simple-sign-in'
  },
  {
    id: 'forms',
    name: 'Sign in with no labels',
    filename: 'no-labels'
  },
  {
    id: 'forms',
    name: 'Split with image',
    filename: 'split-with-image'
  },
  {
    id: 'forms',
    name: 'Contact Us',
    filename: 'contact'
  }
];

export const forms: ComponentContainer = {
  id: 'forms',
  name: 'Forms',
  icon: AiOutlineForm,
  data: components_list
};
