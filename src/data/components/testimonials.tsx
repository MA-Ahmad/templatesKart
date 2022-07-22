import { Component, ComponentContainer } from './types';
import { BsChatSquareQuote } from 'react-icons/bs';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'testimonials',
    name: 'Card with border',
    filename: 'card-with-border'
  },
  {
    id: 'testimonials',
    name: 'Image on left side',
    filename: 'large-image'
  },
  {
    id: 'testimonials',
    name: 'With dotted box',
    filename: 'with-dotted-box'
  },
  {
    id: 'testimonials',
    name: 'Card with avatar',
    filename: 'avatar-card-horizontally'
  },
  {
    id: 'testimonials',
    name: 'with top border',
    filename: 'avatar-card2'
  },
  {
    id: 'testimonials',
    name: 'With Avatar display horizontally',
    filename: 'avatar-horizontally'
  },
  {
    id: 'testimonials',
    name: 'With Avatar display vertically',
    filename: 'with-avatar'
  },
  {
    id: 'testimonials',
    name: 'With Arrow head cards',
    filename: 'arrow-head-cards'
  },
  {
    id: 'testimonials',
    name: 'With Rotating cards',
    filename: 'rotating-cards'
  }
];

const Icon = () => {
  const color = useColorModeValue('var(--colors-accent-400)', 'var(--colors-accent-500)');

  return (
    <svg
      width="160"
      height="107"
      viewBox="0 0 160 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_19_97)">
        <rect x="4" width="152" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <path
        d="M48.7267 27.4242C50.1409 26.0162 49.9985 24.2081 49.994 24.1875V18.6875C49.994 18.5052 49.9151 18.3303 49.7745 18.2014C49.634 18.0724 49.4434 18 49.2446 18H44.748C43.9213 18 43.2491 18.6167 43.2491 19.375V24.1875C43.2491 24.3698 43.328 24.5447 43.4686 24.6736C43.6091 24.8026 43.7998 24.875 43.9985 24.875H46.3053C46.2895 25.2149 46.1788 25.5454 45.9838 25.8348C45.6031 26.3854 44.8859 26.7615 43.8509 26.9513L43.2491 27.0612V29H43.9985C46.0842 29 47.6753 28.4699 48.7267 27.4242ZM40.4777 27.4242C41.8926 26.0162 41.7495 24.2081 41.745 24.1875V18.6875C41.745 18.5052 41.666 18.3303 41.5255 18.2014C41.3849 18.0724 41.1943 18 40.9955 18H36.4989C35.6722 18 35 18.6167 35 19.375V24.1875C35 24.3698 35.079 24.5447 35.2195 24.6736C35.3601 24.8026 35.5507 24.875 35.7494 24.875H38.0562C38.0404 25.2149 37.9297 25.5454 37.7347 25.8348C37.354 26.3854 36.6368 26.7615 35.6018 26.9513L35 27.0612V29H35.7494C37.8351 29 39.4262 28.4699 40.4777 27.4242Z"
        fill={color}
      />
      <path d="M13.3627 41.6405H72.4746" stroke="#A8A9AB" stroke-width="3" />
      <path d="M13.3627 46.6405H72.4746" stroke="#A8A9AB" stroke-width="3" />
      <path d="M25.2176 56.6405H60.6848" stroke="#A8A9AB" stroke-width="3" />
      <path d="M13.3627 51.6405H72.4746" stroke="#A8A9AB" stroke-width="3" />
      <path
        d="M43 84C48.5228 84 53 80.1944 53 75.5C53 70.8056 48.5228 67 43 67C37.4772 67 33 70.8056 33 75.5C33 80.1944 37.4772 84 43 84Z"
        fill={color}
      />
      <path
        d="M122.727 27.4242C124.141 26.0162 123.998 24.2081 123.994 24.1875V18.6875C123.994 18.5052 123.915 18.3303 123.775 18.2014C123.634 18.0724 123.443 18 123.245 18H118.748C117.921 18 117.249 18.6167 117.249 19.375V24.1875C117.249 24.3698 117.328 24.5447 117.469 24.6736C117.609 24.8026 117.8 24.875 117.999 24.875H120.305C120.29 25.2149 120.179 25.5454 119.984 25.8348C119.603 26.3854 118.886 26.7615 117.851 26.9513L117.249 27.0612V29H117.999C120.084 29 121.675 28.4699 122.727 27.4242ZM114.478 27.4242C115.893 26.0162 115.75 24.2081 115.745 24.1875V18.6875C115.745 18.5052 115.666 18.3303 115.525 18.2014C115.385 18.0724 115.194 18 114.996 18H110.499C109.672 18 109 18.6167 109 19.375V24.1875C109 24.3698 109.079 24.5447 109.219 24.6736C109.36 24.8026 109.551 24.875 109.749 24.875H112.056C112.04 25.2149 111.93 25.5454 111.735 25.8348C111.354 26.3854 110.637 26.7615 109.602 26.9513L109 27.0612V29H109.749C111.835 29 113.426 28.4699 114.478 27.4242Z"
        fill={color}
      />
      <path d="M87.3627 41.6405H146.475" stroke="#A8A9AB" stroke-width="3" />
      <path d="M87.3627 46.6405H146.475" stroke="#A8A9AB" stroke-width="3" />
      <path d="M99.2176 56.6405H134.685" stroke="#A8A9AB" stroke-width="3" />
      <path d="M87.3627 51.6405H146.475" stroke="#A8A9AB" stroke-width="3" />
      <path
        d="M117 84C122.523 84 127 80.1944 127 75.5C127 70.8056 122.523 67 117 67C111.477 67 107 70.8056 107 75.5C107 80.1944 111.477 84 117 84Z"
        fill={color}
      />
      <line x1="80.05" y1="29" x2="80.05" y2="67" stroke="black" stroke-width="0.1" />
      <defs>
        <filter
          id="filter0_d_19_97"
          x="0"
          y="0"
          width="160"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_97" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_97" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export const testimonials: ComponentContainer = {
  id: 'testimonials',
  name: 'Testimonials',
  icon: BsChatSquareQuote,
  svgIcon: <Icon />,
  data: components_list
};
