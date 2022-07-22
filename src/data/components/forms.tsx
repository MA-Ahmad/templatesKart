import { Component, ComponentContainer } from './types';
import { AiOutlineForm } from 'react-icons/ai';
import { useColorModeValue } from '@chakra-ui/color-mode';

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
    filename: 'magic-link'
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

const Icon = () => {
  const color = useColorModeValue('var(--colors-accent-400)', 'var(--colors-accent-500)');

  return (
    <svg
      width="151"
      height="107"
      viewBox="0 0 151 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_21_181)">
        <rect x="4" width="143" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <path d="M26 23H124" stroke="#D9D9D9" stroke-width="3" />
      <path d="M49 15H101" stroke={color} stroke-width="3" />
      <path d="M39 29H111" stroke="#D9D9D9" stroke-width="3" />
      <rect x="26" y="41" width="44" height="6" fill="#D9D9D9" />
      <path d="M124 41H80V47H124V41Z" fill="#D9D9D9" />
      <rect x="26" y="49" width="98" height="25" fill="#D9D9D9" />
      <path d="M93 80H57V85H93V80Z" fill={color} />
      <defs>
        <filter
          id="filter0_d_21_181"
          x="0"
          y="0"
          width="151"
          height="107"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_181" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_21_181"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const forms: ComponentContainer = {
  id: 'forms',
  name: 'Forms',
  icon: AiOutlineForm,
  svgIcon: <Icon />,
  data: components_list
};
