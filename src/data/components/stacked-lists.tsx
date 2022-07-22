import { Component, ComponentContainer } from './types';
import { MdFormatListBulleted } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'stacked-lists',
    name: 'Aritcles list',
    filename: 'articles-list'
  },
  {
    id: 'stacked-lists',
    name: 'Notifications list',
    filename: 'notifications-list'
  },
  {
    id: 'stacked-lists',
    name: 'Media Traffic with table ',
    filename: 'media-traffic'
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
      <g filter="url(#filter0_d_31_432)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <rect
        x="20.05"
        y="20.05"
        width="113.9"
        height="16.9"
        rx="1.95"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <circle cx="29" cy="29" r="5" fill={color} />
      <line x1="40" y1="28" x2="79" y2="28" stroke="#A8A9AB" stroke-width="2" />
      <line x1="40" y1="31.5" x2="66" y2="31.5" stroke="#A8A9AB" />
      <circle cx="129" cy="29" r="1" fill={color} />
      <path
        d="M131.95 43H21.95C20.873 43 20 43.873 20 44.95V57.95C20 59.027 20.873 59.9 21.95 59.9H131.95C133.027 59.9 133.9 59.027 133.9 57.95V44.95C133.9 43.873 133.027 43 131.95 43Z"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path
        d="M28.95 56.95C31.7114 56.95 33.95 54.7114 33.95 51.95C33.95 49.1886 31.7114 46.95 28.95 46.95C26.1886 46.95 23.95 49.1886 23.95 51.95C23.95 54.7114 26.1886 56.95 28.95 56.95Z"
        fill={color}
      />
      <path d="M39.95 50.95H78.95" stroke="#A8A9AB" stroke-width="2" />
      <path d="M39.95 54.45H65.95" stroke="#A8A9AB" />
      <path
        d="M128.95 52.95C129.502 52.95 129.95 52.5023 129.95 51.95C129.95 51.3977 129.502 50.95 128.95 50.95C128.398 50.95 127.95 51.3977 127.95 51.95C127.95 52.5023 128.398 52.95 128.95 52.95Z"
        fill={color}
      />
      <path
        d="M132 66.05H22C20.923 66.05 20.05 66.923 20.05 68V81C20.05 82.077 20.923 82.95 22 82.95H132C133.077 82.95 133.95 82.077 133.95 81V68C133.95 66.923 133.077 66.05 132 66.05Z"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path
        d="M29 80C31.7614 80 34 77.7614 34 75C34 72.2386 31.7614 70 29 70C26.2386 70 24 72.2386 24 75C24 77.7614 26.2386 80 29 80Z"
        fill={color}
      />
      <path d="M40 74H79" stroke="#A8A9AB" stroke-width="2" />
      <path d="M40 77.5H66" stroke="#A8A9AB" />
      <path
        d="M129 76C129.552 76 130 75.5523 130 75C130 74.4477 129.552 74 129 74C128.448 74 128 74.4477 128 75C128 75.5523 128.448 76 129 76Z"
        fill={color}
      />
      <path d="M20 11.5H74" stroke={color} stroke-width="3" />
      <defs>
        <filter
          id="filter0_d_31_432"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_432" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_432"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const stackedLists: ComponentContainer = {
  id: 'stacked-lists',
  name: 'Stacked Lists',
  icon: MdFormatListBulleted,
  svgIcon: <Icon />,
  data: components_list
};
