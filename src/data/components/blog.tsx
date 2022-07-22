import { Component, ComponentContainer } from './types';
import { FaBlogger } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'blog',
    name: 'Newsletters',
    filename: 'timeline-newsletter'
  },
  {
    id: 'blog',
    name: 'With border',
    filename: 'with-border'
  },
  {
    id: 'blog',
    name: 'Transparent bg',
    filename: 'transparent-background'
  },
  {
    id: 'blog',
    name: 'With tag',
    filename: 'blog-card-with-tag'
  },
  {
    id: 'blog',
    name: 'Article Info',
    filename: 'article-info'
  },
  {
    id: 'blog',
    name: 'Posts feed',
    filename: 'posts-feed'
  },
  {
    id: 'blog',
    name: 'Posts feed with transparent bg',
    filename: 'transparent-bg-posts-feed'
  },
  {
    id: 'blog',
    name: 'Blog card with image',
    filename: 'blog-card'
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
      <g filter="url(#filter0_d_20_136)">
        <rect x="4" width="147" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <ellipse cx="32.5" cy="37.5" rx="7.5" ry="6.5" fill={color} />
      <path d="M44 34H74" stroke="#A8A9AB" stroke-width="2" />
      <path d="M44 38H67" stroke="#D9D9D9" stroke-width="2" />
      <path d="M25 26H98" stroke="#D9D9D9" stroke-width="3" />
      <path d="M25 21H110" stroke="#D9D9D9" stroke-width="3" />
      <path d="M25 16H123" stroke="#D9D9D9" stroke-width="3" />
      <path d="M25 9H84.1119" stroke={color} stroke-width="3" />
      <path
        d="M32.5 91C36.6421 91 40 88.0899 40 84.5C40 80.9101 36.6421 78 32.5 78C28.3579 78 25 80.9101 25 84.5C25 88.0899 28.3579 91 32.5 91Z"
        fill={color}
      />
      <path d="M44 81H74" stroke="#A8A9AB" stroke-width="2" />
      <path d="M44 85H67" stroke="#D9D9D9" stroke-width="2" />
      <path d="M25 73H98" stroke="#D9D9D9" stroke-width="3" />
      <path d="M25 68H110" stroke="#D9D9D9" stroke-width="3" />
      <path d="M25 63H123" stroke="#D9D9D9" stroke-width="3" />
      <path d="M25 56H84.1119" stroke={color} stroke-width="3" />
      <line x1="40" y1="48.95" x2="92" y2="48.95" stroke="black" stroke-width="0.1" />
      <defs>
        <filter
          id="filter0_d_20_136"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_136" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_20_136"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export const blog: ComponentContainer = {
  id: 'blog',
  name: 'Blog',
  icon: FaBlogger,
  svgIcon: <Icon />,
  data: components_list
};
