import { Component, ComponentContainer } from './types';
import { GoMilestone } from 'react-icons/go';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'timeline',
    name: 'Milestones',
    filename: 'milestones'
  },
  {
    id: 'timeline',
    name: 'Articles',
    filename: 'articles'
  },
  {
    id: 'timeline',
    name: 'With icons',
    filename: 'with-icons'
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
      <g filter="url(#filter0_d_31_379)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <line x1="44" y1="15.5" x2="98" y2="15.5" stroke={color} stroke-width="3" />
      <line x1="44" y1="21" x2="106" y2="21" stroke="#D9D9D9" stroke-width="2" />
      <circle cx="49" cy="35" r="5" fill={color} />
      <line x1="49" y1="40" x2="49" y2="50" stroke="#D9D9D9" />
      <line x1="58" y1="33" x2="91" y2="33" stroke="#A8A9AB" stroke-width="2" />
      <line x1="58" y1="36.5" x2="99" y2="36.5" stroke="#D9D9D9" />
      <path
        d="M49 60C51.7614 60 54 57.7614 54 55C54 52.2386 51.7614 50 49 50C46.2386 50 44 52.2386 44 55C44 57.7614 46.2386 60 49 60Z"
        fill={color}
      />
      <path d="M49 60V70" stroke="#D9D9D9" />
      <path d="M58 53H91" stroke="#A8A9AB" stroke-width="2" />
      <path d="M58 56.5H99" stroke="#D9D9D9" />
      <path
        d="M49 80C51.7614 80 54 77.7614 54 75C54 72.2386 51.7614 70 49 70C46.2386 70 44 72.2386 44 75C44 77.7614 46.2386 80 49 80Z"
        fill={color}
      />
      <path d="M58 73H91" stroke="#A8A9AB" stroke-width="2" />
      <path d="M58 76.5H99" stroke="#D9D9D9" />
      <defs>
        <filter
          id="filter0_d_31_379"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_379" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_379"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const timeline: ComponentContainer = {
  id: 'timeline',
  name: 'timeline',
  icon: GoMilestone,
  svgIcon: <Icon />,
  data: components_list
};
