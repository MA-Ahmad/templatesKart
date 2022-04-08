import { Component, ComponentContainer } from './types';
import { AiOutlineForm } from 'react-icons/ai';

const components_list: Component[] = [
  {
    id: 'forms',
    name: 'Simple Sign in',
    filename: 'simple-sign-in'
  }
];

export const forms: ComponentContainer = {
  id: 'forms',
  name: 'Forms',
  icon: AiOutlineForm,
  data: components_list
};
