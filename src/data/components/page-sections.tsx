import { Component, ComponentContainer } from './types';
import { CgFormatSeparator } from 'react-icons/cg';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'page-sections',
    name: 'CTA with copy to clipboard',
    filename: 'small-detail'
  },
  {
    id: 'page-sections',
    name: 'Info Section',
    filename: 'info-section'
  },
  {
    id: 'page-sections',
    name: 'Features section',
    filename: 'features'
  },
  {
    id: 'page-sections',
    name: 'CTA banner',
    filename: 'cta-banner'
  },
  {
    id: 'page-sections',
    name: 'Mission section',
    filename: 'mission-section'
  },
  {
    id: 'page-sections',
    name: 'Overview section',
    filename: 'overview-section'
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
      <g filter="url(#filter0_d_27_280)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
        <path d="M36 27H10V30H36V27Z" fill={color} />
        <line x1="10" y1="33" x2="65" y2="33" stroke="#D9D9D9" stroke-width="2" />
        <path d="M10 43H73" stroke="#D9D9D9" stroke-width="2" />
        <path d="M10 47H65" stroke="#D9D9D9" stroke-width="2" />
        <path d="M36 67H10V70H36V67Z" fill={color} />
        <path d="M70 67H44V70H70V67Z" fill={color} />
        <path d="M10 51H59" stroke="#D9D9D9" stroke-width="2" />
        <rect x="81" y="39" width="29" height="14" rx="3" fill="#ECE9E9" />
        <path
          d="M141 39H118C116.343 39 115 40.3431 115 42V50C115 51.6569 116.343 53 118 53H141C142.657 53 144 51.6569 144 50V42C144 40.3431 142.657 39 141 39Z"
          fill="#ECE9E9"
        />
        <line x1="86" y1="43.25" x2="100" y2="43.25" stroke={color} stroke-width="1.5" />
        <path d="M120 43.5H134" stroke={color} stroke-width="1.5" />
        <line x1="86" y1="48" x2="103" y2="48" stroke="#A8A9AB" stroke-width="2" />
        <path d="M120 48H137" stroke="#A8A9AB" stroke-width="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_27_280"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_280" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_27_280"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const pageSections: ComponentContainer = {
  id: 'page-sections',
  name: 'Page Sections',
  icon: CgFormatSeparator,
  svgIcon: <Icon />,
  data: components_list
};
