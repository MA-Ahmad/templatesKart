import { Component, ComponentContainer } from './types';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'features',
    name: 'With cards',
    filename: 'with-cards'
  },
  {
    id: 'features',
    name: 'Simple 2 columns',
    filename: 'simple-2-columns'
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
      <g filter="url(#filter0_d_32_462)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <path d="M50 21.5H104" stroke={color} stroke-width="3" />
      <rect
        x="17.05"
        y="39.05"
        width="33.9"
        height="30.9"
        rx="1.95"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path d="M25 59.5H44" stroke="#A8A9AB" />
      <path d="M23 57.5H46" stroke="#A8A9AB" />
      <line x1="26" y1="49.5" x2="43" y2="49.5" stroke="#A8A9AB" stroke-width="3" />
      <line x1="23" y1="55.5" x2="46" y2="55.5" stroke="#A8A9AB" />
      <path
        d="M46.1414 65.1414C46.2195 65.0633 46.2195 64.9367 46.1414 64.8586L44.8686 63.5858C44.7905 63.5077 44.6639 63.5077 44.5858 63.5858C44.5077 63.6639 44.5077 63.7905 44.5858 63.8686L45.7172 65L44.5858 66.1314C44.5077 66.2095 44.5077 66.3361 44.5858 66.4142C44.6639 66.4923 44.7905 66.4923 44.8686 66.4142L46.1414 65.1414ZM42 65.2H46V64.8H42V65.2Z"
        fill="#A8A9AB"
      />
      <path
        d="M91.95 39H61.95C60.873 39 60 39.873 60 40.95V67.95C60 69.027 60.873 69.9 61.95 69.9H91.95C93.027 69.9 93.9 69.027 93.9 67.95V40.95C93.9 39.873 93.027 39 91.95 39Z"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path d="M67.95 59.45H86.95" stroke="#A8A9AB" />
      <path d="M65.95 57.45H88.95" stroke="#A8A9AB" />
      <path d="M68.95 49.45H85.95" stroke="#A8A9AB" stroke-width="3" />
      <path d="M65.95 55.45H88.95" stroke="#A8A9AB" />
      <path
        d="M89.0914 65.0914C89.1695 65.0133 89.1695 64.8867 89.0914 64.8086L87.8186 63.5358C87.7405 63.4577 87.6139 63.4577 87.5358 63.5358C87.4577 63.6139 87.4577 63.7405 87.5358 63.8186L88.6672 64.95L87.5358 66.0814C87.4577 66.1595 87.4577 66.2861 87.5358 66.3642C87.6139 66.4423 87.7405 66.4423 87.8186 66.3642L89.0914 65.0914ZM84.95 65.15H88.95V64.75H84.95V65.15Z"
        fill="#A8A9AB"
      />
      <path
        d="M134.95 39H104.95C103.873 39 103 39.873 103 40.95V67.95C103 69.027 103.873 69.9 104.95 69.9H134.95C136.027 69.9 136.9 69.027 136.9 67.95V40.95C136.9 39.873 136.027 39 134.95 39Z"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <path d="M110.95 59.45H129.95" stroke="#A8A9AB" />
      <path d="M108.95 57.45H131.95" stroke="#A8A9AB" />
      <path d="M111.95 49.45H128.95" stroke="#A8A9AB" stroke-width="3" />
      <path d="M108.95 55.45H131.95" stroke="#A8A9AB" />
      <path
        d="M132.091 65.0914C132.17 65.0133 132.17 64.8867 132.091 64.8086L130.819 63.5358C130.741 63.4577 130.614 63.4577 130.536 63.5358C130.458 63.6139 130.458 63.7405 130.536 63.8186L131.667 64.95L130.536 66.0814C130.458 66.1595 130.458 66.2861 130.536 66.3642C130.614 66.4423 130.741 66.4423 130.819 66.3642L132.091 65.0914ZM127.95 65.15H131.95V64.75H127.95V65.15Z"
        fill="#A8A9AB"
      />
      <line x1="57" y1="26" x2="97" y2="26" stroke="#D9D9D9" stroke-width="2" />
      <rect x="29" y="36.5" width="10" height="5" fill={color} />
      <path d="M82 36.5H72V41.5H82V36.5Z" fill={color} />
      <path d="M125 36.5H115V41.5H125V36.5Z" fill={color} />
      <defs>
        <filter
          id="filter0_d_32_462"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_462" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_32_462"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const features: ComponentContainer = {
  id: 'features',
  name: 'Features',
  icon: MdOutlineFeaturedPlayList,
  svgIcon: <Icon />,
  data: components_list
};
