import { Component, ComponentContainer } from './types';
import { SiElasticstack } from 'react-icons/si';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'pagination',
    name: 'Default pagination',
    filename: 'default-pagination'
  },
  {
    id: 'pagination',
    name: 'Table data pagination',
    filename: 'table-data'
  },
  {
    id: 'pagination',
    name: 'With button group',
    filename: 'button-group'
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
      <g filter="url(#filter0_d_28_306)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <line x1="14" y1="46.5" x2="48" y2="46.5" stroke={color} stroke-width="3" />
      <rect
        x="73.05"
        y="40.05"
        width="62.9"
        height="12.9"
        rx="1.95"
        fill={useColorModeValue('#fff', '#D9D9D9')}
        stroke="black"
        stroke-width="0.1"
      />
      <line x1="87.05" y1="40" x2="87.05" y2="53" stroke="black" stroke-width="0.1" />
      <path d="M103.5 40V53" stroke="black" stroke-width="0.1" />
      <path d="M120.5 40V53" stroke="black" stroke-width="0.1" />
      <path
        d="M130.354 46.8536C130.549 46.6583 130.549 46.3417 130.354 46.1464L127.172 42.9645C126.976 42.7692 126.66 42.7692 126.464 42.9645C126.269 43.1597 126.269 43.4763 126.464 43.6716L129.293 46.5L126.464 49.3284C126.269 49.5237 126.269 49.8403 126.464 50.0355C126.66 50.2308 126.976 50.2308 127.172 50.0355L130.354 46.8536ZM129 47H130V46H129V47Z"
        fill="#A8A9AB"
      />
      <path
        d="M77.6464 46.8536C77.4512 46.6583 77.4512 46.3417 77.6464 46.1464L80.8284 42.9645C81.0237 42.7692 81.3403 42.7692 81.5355 42.9645C81.7308 43.1597 81.7308 43.4763 81.5355 43.6716L78.7071 46.5L81.5355 49.3284C81.7308 49.5237 81.7308 49.8403 81.5355 50.0355C81.3403 50.2308 81.0237 50.2308 80.8284 50.0355L77.6464 46.8536ZM79 47H78V46H79V47Z"
        fill="#A8A9AB"
      />
      <line x1="93" y1="46.5" x2="98" y2="46.5" stroke={color} />
      <path d="M109 46.5H114" stroke={color} />
      <defs>
        <filter
          id="filter0_d_28_306"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_306" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_28_306"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const pagination: ComponentContainer = {
  id: 'pagination',
  name: 'Pagination',
  icon: SiElasticstack,
  svgIcon: <Icon />,
  data: components_list
};
