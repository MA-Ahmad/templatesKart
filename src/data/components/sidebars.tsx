import { Component, ComponentContainer } from './types';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'sidebars',
    name: 'Sidebar with header',
    filename: 'sidebar-with-header'
  },
  {
    id: 'sidebars',
    name: 'Simple sidebar',
    filename: 'simple-sidebar'
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
      <g filter="url(#filter0_d_32_525)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <circle cx="19" cy="15" r="5" fill={color} />
      <line x1="14" y1="25" x2="38" y2="25" stroke={color} stroke-width="2" />
      <line x1="14" y1="32" x2="33" y2="32" stroke="#D9D9D9" stroke-width="2" />
      <line x1="14" y1="86.5" x2="24" y2="86.5" stroke={color} stroke-width="3" />
      <line x1="14" y1="39" x2="35" y2="39" stroke="#D9D9D9" stroke-width="2" />
      <line
        x1="44.05"
        x2="44.05"
        y2="99"
        stroke={useColorModeValue('#171923', '#CBD5E0')}
        stroke-width="0.1"
      />
      <line x1="14" y1="45" x2="33" y2="45" stroke="#D9D9D9" stroke-width="2" />
      <defs>
        <filter
          id="filter0_d_32_525"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_525" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_32_525"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export const sidebars: ComponentContainer = {
  id: 'sidebars',
  name: 'Sidebars',
  icon: BsLayoutSidebarInset,
  svgIcon: <Icon />,
  data: components_list
};
