import { Component, ComponentContainer } from './types';
import { RiCheckboxBlankLine } from 'react-icons/ri';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'pulse',
    name: 'Posts Feed',
    filename: 'posts-pulse'
  },
  {
    id: 'pulse',
    name: 'Simple List',
    filename: 'list-pulse'
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
      <g filter="url(#filter0_d_32_506)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <rect x="47" y="5" width="60" height="25" fill="#D9D9D9" />
      <circle cx="50" cy="36" r="3" fill={color} />
      <line x1="55" y1="36" x2="69" y2="36" stroke={color} stroke-width="2" />
      <line x1="47" y1="41.5" x2="96" y2="41.5" stroke="#D9D9D9" />
      <path d="M47 44.5H101" stroke="#D9D9D9" />
      <path d="M47 47.5H92" stroke="#D9D9D9" />
      <path d="M107 52H47V77H107V52Z" fill="#D9D9D9" />
      <path
        d="M50 86C51.6569 86 53 84.6569 53 83C53 81.3431 51.6569 80 50 80C48.3431 80 47 81.3431 47 83C47 84.6569 48.3431 86 50 86Z"
        fill={color}
      />
      <path d="M55 83H69" stroke={color} stroke-width="2" />
      <path d="M47 88.5H96" stroke="#D9D9D9" />
      <path d="M47 91.5H101" stroke="#D9D9D9" />
      <path d="M47 94.5H92" stroke="#D9D9D9" />
      <defs>
        <filter
          id="filter0_d_32_506"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_506" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_32_506"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const pulse: ComponentContainer = {
  id: 'pulse',
  name: 'Pulse Loading',
  icon: RiCheckboxBlankLine,
  svgIcon: <Icon />,
  data: components_list
};
