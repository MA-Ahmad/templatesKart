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
    name: 'Magic link',
    filename: 'magic-link',
    isNewComponent: true
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
  },
  {
    id: 'forms',
    name: 'Booking A Place',
    filename: 'booking-form'
  }
];

export const forms: ComponentContainer = {
  id: 'forms',
  name: 'Forms',
  hasAnyNewComponent: true,
  icon: AiOutlineForm,
  data: components_list
};
