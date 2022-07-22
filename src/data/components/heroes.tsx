import { Component, ComponentContainer } from './types';
import { BsCardHeading } from 'react-icons/bs';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'heroes',
    name: 'Split with image',
    filename: 'image-right-side'
  },
  {
    id: 'heroes',
    name: 'Left align content',
    filename: 'left-align'
  },
  {
    id: 'heroes',
    name: 'With Background image',
    filename: 'bg-image'
  },
  {
    id: 'heroes',
    name: 'With gradient cover',
    filename: 'cover-gradient'
  },
  {
    id: 'heroes',
    name: 'Centered with logos',
    filename: 'centered-with-logos'
  },
  {
    id: 'heroes',
    name: 'Simply Centered',
    filename: 'simply-centered'
  },
  {
    id: 'heroes',
    name: 'Product Intro',
    filename: 'product-intro'
  },
  {
    id: 'heroes',
    name: 'Show Info',
    filename: 'intro-section'
  },
  {
    id: 'heroes',
    name: 'With image cover',
    filename: 'with-bg-image'
  }
];

const Icon = () => {
  const color = useColorModeValue('var(--colors-accent-400)', 'var(--colors-accent-500)');

  return (
    <svg
      width="155"
      height="107"
      viewBox="0 0 155 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_13_37)">
        <g clip-path="url(#clip0_13_37)">
          <g filter="url(#filter1_d_13_37)">
            <path d="M151 0H4V99H151V0Z" fill={useColorModeValue('#fff', '#171923')} />
          </g>
          <path d="M117 14H131.397H146" stroke={color} stroke-width="4" />
          <path d="M86 14H100.397H115" stroke={color} stroke-width="4" />
          <path
            d="M74.2975 28.2808V28H74V28.2808H74.2975ZM145.703 28.2808H146V28H145.703V28.2808ZM145.703 68.7192V69H146V68.7192H145.703ZM74.2975 68.7192H74V69H74.2975V68.7192ZM74.2975 28.5616H145.703V28H74.2975V28.5616ZM145.405 28.2808V68.7192H146V28.2808H145.405ZM145.703 68.4384H74.2975V69H145.703V68.4384ZM74.595 68.7192V28.2808H74V68.7192H74.595Z"
            fill="#A8A9AB"
          />
          <path d="M145.552 28.4556L74.4472 68.5444" stroke="#A8A9AB" />
          <g clip-path="url(#clip1_13_37)">
            <path d="M74.2975 28.2808L145.703 68.7192" stroke="#A8A9AB" />
          </g>
          <path d="M10.3446 30.6405H66.5009" stroke="#A8A9AB" stroke-width="4" />
          <path
            d="M9.52133 81.5198L34.303 81.4983L59.4401 81.4765"
            stroke="#CDCCCF"
            stroke-width="4"
          />
          <path d="M65.0913 81.5307H114.994" stroke="#CDCCCF" stroke-width="4" />
          <path d="M55 14H69.3967H84" stroke={color} stroke-width="4" />
          <rect x="10" y="61" width="37" height="8" fill="#D9D9D9" />
          <ellipse cx="15" cy="14.5" rx="5" ry="4.5" fill={color} />
          <line x1="15" y1="65" x2="43" y2="65" stroke={color} stroke-width="2" />
          <path d="M10.3627 38.6405H69.4746" stroke="#CDCCCF" stroke-width="3" />
          <path d="M10.3627 43.6405H69.4746" stroke="#CDCCCF" stroke-width="3" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_13_37"
          x="0"
          y="0"
          width="155"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_37" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_37" result="shape" />
        </filter>
        <filter
          id="filter1_d_13_37"
          x="0"
          y="0"
          width="155"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_37" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_37" result="shape" />
        </filter>
        <clipPath id="clip0_13_37">
          <rect x="4" width="147" height="99" rx="5" fill="white" />
        </clipPath>
        <clipPath id="clip1_13_37">
          <rect width="72" height="41" fill="white" transform="translate(74 28)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const heroes: ComponentContainer = {
  id: 'heroes',
  name: 'Heroes',
  icon: BsCardHeading,
  svgIcon: <Icon />,
  data: components_list
};
