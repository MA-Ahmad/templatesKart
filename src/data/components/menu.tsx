import { Component, ComponentContainer } from './types';
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'menu',
    name: 'Simple one',
    filename: 'simple-one'
  },
  {
    id: 'menu',
    name: 'With sub label',
    filename: 'with-sub-label'
  },
  {
    id: 'menu',
    name: 'With icon',
    filename: 'with-icon'
  },
  {
    id: 'menu',
    name: 'With shadow',
    filename: 'with-shadow'
  }
];

const Icon = () => {
  const color = useColorModeValue('var(--colors-accent-400)', 'var(--colors-accent-500)');

  return (
    <svg
      width="153"
      height="107"
      viewBox="0 0 153 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_29_327)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <rect x="50" y="30" width="30" height="6" fill={color} />
      <rect
        x="67.05"
        y="37.05"
        width="34.9"
        height="30.9"
        rx="2.95"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <line x1="67" y1="45.95" x2="102" y2="45.95" stroke="black" stroke-width="0.1" />
      <line x1="67" y1="53.95" x2="102" y2="53.95" stroke="black" stroke-width="0.1" />
      <line x1="67" y1="60.95" x2="102" y2="60.95" stroke="black" stroke-width="0.1" />
      <line x1="73" y1="41.5" x2="91" y2="41.5" stroke="#A8A9AB" stroke-width="2" />
      <line x1="73" y1="50" x2="91" y2="50" stroke="#A8A9AB" stroke-width="2" />
      <defs>
        <filter
          id="filter0_d_29_327"
          x="0"
          y="0"
          width="153"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_327" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_29_327"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const menu: ComponentContainer = {
  id: 'menu',
  name: 'Menu',
  icon: BsFillMenuButtonFill,
  svgIcon: <Icon />,
  data: components_list
};
