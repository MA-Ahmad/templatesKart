import { Component, ComponentContainer } from './types';
import { IoMdPricetags } from 'react-icons/io';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'pricing',
    name: 'Single tier',
    filename: 'single-tier'
  },
  {
    id: 'pricing',
    name: 'Two tiers',
    filename: 'two-tiers'
  },
  {
    id: 'pricing',
    name: 'Three tiers with icons',
    filename: 'three-tiers-with-icons'
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
      <g filter="url(#filter0_d_30_337)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <line x1="50" y1="15.5" x2="99" y2="15.5" stroke={color} stroke-width="3" />
      <line x1="34" y1="22" x2="114" y2="22" stroke="#D9D9D9" stroke-width="2" />
      <rect
        x="24.05"
        y="30.05"
        width="39.9"
        height="46.9"
        rx="1.95"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path d="M31 71H47" stroke="#A8A9AB" stroke-width="2" />
      <path d="M31 67H47" stroke="#A8A9AB" stroke-width="2" />
      <path d="M31 63H47" stroke="#A8A9AB" stroke-width="2" />
      <path d="M29 70H27V72H29V70Z" fill={color} />
      <path d="M29 66H27V68H29V66Z" fill={color} />
      <path d="M29 62H27V64H29V62Z" fill={color} />
      <line x1="27" y1="36.5" x2="48" y2="36.5" stroke={color} />
      <line x1="27" y1="39.5" x2="44" y2="39.5" stroke={color} />
      <rect x="28" y="44" width="32" height="6" fill="#A8A9AB" />
      <line x1="37" y1="47" x2="51" y2="47" stroke={color} stroke-width="2" />
      <line x1="27" y1="54.5" x2="41" y2="54.5" stroke={color} />
      <rect x="27" y="58" width="2" height="2" fill={color} />
      <line x1="31" y1="59" x2="47" y2="59" stroke="#A8A9AB" stroke-width="2" />
      <path
        d="M122 30.05H86C84.923 30.05 84.05 30.923 84.05 32V75C84.05 76.077 84.923 76.95 86 76.95H122C123.077 76.95 123.95 76.077 123.95 75V32C123.95 30.923 123.077 30.05 122 30.05Z"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path d="M91 71H107" stroke="#A8A9AB" stroke-width="2" />
      <path d="M91 67H107" stroke="#A8A9AB" stroke-width="2" />
      <path d="M91 63H107" stroke="#A8A9AB" stroke-width="2" />
      <path d="M89 70H87V72H89V70Z" fill={color} />
      <path d="M89 66H87V68H89V66Z" fill={color} />
      <path d="M89 62H87V64H89V62Z" fill={color} />
      <path d="M87 36.5H108" stroke={color} />
      <path d="M87 39.5H104" stroke={color} />
      <path d="M120 44H88V50H120V44Z" fill="#A8A9AB" />
      <path d="M97 47H111" stroke={color} stroke-width="2" />
      <path d="M87 54.5H101" stroke={color} />
      <path d="M89 58H87V60H89V58Z" fill={color} />
      <path d="M91 59H107" stroke="#A8A9AB" stroke-width="2" />
      <defs>
        <filter
          id="filter0_d_30_337"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30_337" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_30_337"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const pricing: ComponentContainer = {
  id: 'pricing',
  name: 'Pricing',
  icon: IoMdPricetags,
  svgIcon: <Icon />,
  data: components_list
};
