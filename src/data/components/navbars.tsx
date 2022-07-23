import { Component, ComponentContainer } from './types';
import { CgBox } from 'react-icons/cg';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'navbars',
    name: 'Centered links',
    filename: 'centered-links'
  },
  {
    id: 'navbars',
    name: 'Simple one',
    filename: 'simple-one'
  },
  {
    id: 'navbars',
    name: 'With multiple links',
    filename: 'multiple-links'
  },
  {
    id: 'navbars',
    name: 'With search field',
    filename: 'search-field'
  },
  {
    id: 'navbars',
    name: 'With gradient',
    filename: 'with-gradient'
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
      <g filter="url(#filter0_d_22_211)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <path d="M90 13.1327L104 13.1327" stroke="#A8A9AB" stroke-width="3" />
      <path d="M144 10.102H118V15.1531H144V10.102Z" fill={color} />
      <path d="M72 13.1327H86" stroke="#A8A9AB" stroke-width="3" />
      <path d="M54 13.1327H68" stroke="#A8A9AB" stroke-width="3" />
      <line
        x1="4"
        y1="21.9"
        x2="149"
        y2="21.9"
        stroke={useColorModeValue('#171923', '#CBD5E0')}
        stroke-width="0.2"
      />
      <circle cx="14.5" cy="11.5" r="5.5" fill={color} />
      <defs>
        <filter
          id="filter0_d_22_211"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_211" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_22_211"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const navbars: ComponentContainer = {
  id: 'navbars',
  name: 'Navbars',
  icon: CgBox,
  svgIcon: <Icon />,
  data: components_list
};
