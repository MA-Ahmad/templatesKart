import { Component, ComponentContainer } from './types';
import { BiStats } from 'react-icons/bi';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'stats',
    name: 'Library Stats',
    filename: 'library-stats'
  },
  {
    id: 'stats',
    name: 'Blog Stats',
    filename: 'blog-stats'
  },
  {
    id: 'stats',
    name: 'Stats with icons',
    filename: 'with-icons'
  },
  {
    id: 'stats',
    name: 'Brand Stats',
    filename: 'brand-stats'
  },
  {
    id: 'stats',
    name: 'Split with image',
    filename: 'split-with-image'
  }
];

const Icon = () => {
  const color = useColorModeValue('var(--colors-accent-400)', 'var(--colors-accent-500)');
  const boxBg = useColorModeValue('#fff', '#D9D9D9');

  return (
    <svg
      width="158"
      height="107"
      viewBox="0 0 158 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_24_277)">
        <rect x="4" width="150" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <rect
        x="11.05"
        y="38.05"
        width="43.9"
        height="22.12"
        rx="2.95"
        fill={boxBg}
        stroke="black"
        stroke-width="0.1"
      />
      <path
        d="M60 38.3969H98C99.6292 38.3969 100.95 39.7177 100.95 41.3469V57.5714C100.95 59.2007 99.6292 60.5214 98 60.5214H60C58.3708 60.5214 57.05 59.2007 57.05 57.5714V41.3469C57.05 39.7177 58.3708 38.3969 60 38.3969Z"
        fill={boxBg}
        stroke="black"
        stroke-width="0.1"
      />
      <path
        d="M106 38.3969H144C145.629 38.3969 146.95 39.7177 146.95 41.3469V57.5714C146.95 59.2007 145.629 60.5214 144 60.5214H106C104.371 60.5214 103.05 59.2007 103.05 57.5714V41.3469C103.05 39.7177 104.371 38.3969 106 38.3969Z"
        fill={boxBg}
        stroke="black"
        stroke-width="0.1"
      />
      <path d="M40 44.4082H14V49.4592H40V44.4082Z" fill={color} />
      <path d="M86 44.4082H60V49.4592H86V44.4082Z" fill={color} />
      <path d="M132 44.4082H106V49.4592H132V44.4082Z" fill={color} />
      <path d="M14 54H35" stroke="#A8A9AB" stroke-width="3" />
      <path d="M106 54H127" stroke="#A8A9AB" stroke-width="3" />
      <path d="M60 54H81" stroke="#A8A9AB" stroke-width="3" />
      <defs>
        <filter
          id="filter0_d_24_277"
          x="0"
          y="0"
          width="158"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_277" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_24_277"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const stats: ComponentContainer = {
  id: 'stats',
  name: 'Stats',
  icon: BiStats,
  svgIcon: <Icon />,
  data: components_list
};
