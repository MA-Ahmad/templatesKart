import { Component, ComponentContainer } from './types';
import { CgToolbarBottom } from 'react-icons/cg';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'footers',
    name: 'Large with logo left',
    filename: 'large-with-logo-left'
  },
  {
    id: 'footers',
    name: 'With logo left',
    filename: 'with-logo-left'
  },
  {
    id: 'footers',
    name: 'With subscribe field',
    filename: 'subscribe-field'
  },
  {
    id: 'footers',
    name: 'Fewer links',
    filename: 'fewer-links'
  },
  {
    id: 'footers',
    name: 'Big footer',
    filename: 'detail-links'
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
      <g filter="url(#filter0_d_24_278)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <line
        x1="4"
        y1="85.95"
        x2="149"
        y2="85.95"
        stroke={useColorModeValue('#171923', '#CBD5E0')}
        stroke-width="0.1"
      />
      <rect x="12" y="92" width="32" height="2" fill={color} />
      <path d="M138.728 92H108V94H138.728V92Z" fill={color} />
      <path d="M135.967 70H106V72H135.967V70Z" fill="#D9D9D9" />
      <path d="M133.067 73.5H106V75.5H133.067V73.5Z" fill="#D9D9D9" />
      <path d="M138.867 77H106V79H138.867V77Z" fill="#D9D9D9" />
      <path d="M90 70H59V72H90V70Z" fill="#D9D9D9" />
      <path d="M87 73.5H59V75.5H87V73.5Z" fill="#D9D9D9" />
      <path d="M93 77H59V79H93V77Z" fill="#D9D9D9" />
      <path d="M43 70H12V72H43V70Z" fill="#D9D9D9" />
      <path d="M40 73.5H12V75.5H40V73.5Z" fill="#D9D9D9" />
      <path d="M46 77H12V79H46V77Z" fill="#D9D9D9" />
      <defs>
        <filter
          id="filter0_d_24_278"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_278" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_24_278"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export const footers: ComponentContainer = {
  id: 'footers',
  name: 'Footers',
  icon: CgToolbarBottom,
  svgIcon: <Icon />,
  data: components_list
};
