import { Component, ComponentContainer } from './types';
import { BsCardText } from 'react-icons/bs';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'cards',
    name: 'User Card',
    filename: 'user-card'
  },
  {
    id: 'cards',
    name: 'Join community',
    filename: 'join-community'
  },
  {
    id: 'cards',
    name: 'Product Cards',
    filename: 'product-img-card'
  },
  {
    id: 'cards',
    name: 'Portfolio Card',
    filename: 'portfolio-card'
  },
  {
    id: 'cards',
    name: 'Course card',
    filename: 'access-course'
  },
  {
    id: 'cards',
    name: 'Github Repo With Image',
    filename: 'github-repo-image'
  },
  {
    id: 'cards',
    name: 'Exclusive offer',
    filename: 'product-offer'
  },
  {
    id: 'cards',
    name: 'Career Card',
    filename: 'career-card'
  },
  {
    id: 'cards',
    name: 'Github Repo Cards',
    filename: 'github-repo'
  },
  {
    id: 'cards',
    name: 'Project Info Cards',
    filename: 'project-card'
  }
];

const Icon = () => {
  const color = useColorModeValue('var(--colors-accent-400)', 'var(--colors-accent-500)');

  return (
    <svg
      width="121"
      height="109"
      viewBox="0 0 121 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1)">
        <rect x="4" width="113" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
        <rect
          x="4.5"
          y="0.5"
          width="112"
          height="98"
          rx="4.5"
          stroke={useColorModeValue('#fff', '#171923')}
        />
      </g>
      <path d="M82.642 88.5307H111.996" stroke="#CDCCCF" stroke-width="4" />
      <line
        y1="-1.5"
        x2="77.0049"
        y2="-1.5"
        transform="matrix(0.999977 0.00672673 -0.00469182 0.999989 9.3446 73.0462)"
        stroke="#CDCCCF"
        stroke-width="3"
      />
      <path d="M9.3446 77.0856L86.3478 77.6036" stroke="#CDCCCF" stroke-width="3" />
      <path d="M8.87769 88.5198L23.1748 88.4983L37.677 88.4765" stroke="#CDCCCF" stroke-width="4" />
      <line x1="9.3446" y1="63.6405" x2="65.5009" y2="63.6405" stroke={color} stroke-width="4" />
      <g clip-path="url(#clip0_0_1)">
        <path d="M10.4215 8.30138L111.579 51.6986" stroke="#A8A9AB" />
        <path d="M111.366 8.48889L10.6335 51.5111" stroke="#A8A9AB" />
        <path
          d="M10.4215 8.30137V8H10V8.30137H10.4215ZM111.579 8.30137H112V8H111.579V8.30137ZM111.579 51.6986V52H112V51.6986H111.579ZM10.4215 51.6986H10V52H10.4215V51.6986ZM10.4215 8.60274H111.579V8H10.4215V8.60274ZM111.157 8.30137V51.6986H112V8.30137H111.157ZM111.579 51.3973H10.4215V52H111.579V51.3973ZM10.843 51.6986V8.30137H10V51.6986H10.843Z"
          fill="#A8A9AB"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="0"
          y="0"
          width="121"
          height="109"
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
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.283333 0 0 0 0 0.263264 0 0 0 0 0.263264 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <clipPath id="clip0_0_1">
          <rect width="102" height="44" fill="white" transform="translate(10 8)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const cards: ComponentContainer = {
  id: 'cards',
  name: 'Cards',
  icon: BsCardText,
  svgIcon: <Icon />,
  data: components_list
};
