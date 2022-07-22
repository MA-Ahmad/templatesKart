import { Component, ComponentContainer } from './types';
import { MdOutlineRateReview } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';

const components_list: Component[] = [
  {
    id: 'reviews',
    name: 'Review with images',
    filename: 'images-review'
  },
  {
    id: 'reviews',
    name: 'Simple Reviews',
    filename: 'simple-review'
  },
  {
    id: 'reviews',
    name: 'With rating chart',
    filename: 'summary-chart'
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
      <g filter="url(#filter0_d_31_415)">
        <rect x="4" width="145" height="99" rx="5" fill={useColorModeValue('#fff', '#171923')} />
      </g>
      <line x1="48" y1="17.5" x2="102" y2="17.5" stroke={color} stroke-width="3" />
      <ellipse cx="53.5814" cy="33" rx="5.5814" ry="5" fill={color} />
      <line x1="64.7442" y1="32" x2="92.6512" y2="32" stroke="#A8A9AB" stroke-width="2" />
      <path d="M64.7442 35.5H77.5814" stroke="#D9D9D9" />
      <path
        d="M51.3488 39L52.1007 40.7275H54.5338L52.5654 41.7951L53.3172 43.5225L51.3488 42.4549L49.3804 43.5225L50.1323 41.7951L48.1639 40.7275H50.597L51.3488 39Z"
        fill="#EFCD18"
      />
      <path
        d="M58.0465 39L58.7984 40.7275H61.2315L59.2631 41.7951L60.0149 43.5225L58.0465 42.4549L56.0781 43.5225L56.83 41.7951L54.8616 40.7275H57.2947L58.0465 39Z"
        fill="#EFCD18"
      />
      <path
        d="M64.7442 39L65.4961 40.7275H67.9291L65.9607 41.7951L66.7126 43.5225L64.7442 42.4549L62.7758 43.5225L63.5277 41.7951L61.5593 40.7275H63.9923L64.7442 39Z"
        fill="#EFCD18"
      />
      <path
        d="M71.4419 39L72.1937 40.7275H74.6268L72.6584 41.7951L73.4103 43.5225L71.4419 42.4549L69.4735 43.5225L70.2253 41.7951L68.2569 40.7275H70.69L71.4419 39Z"
        fill="#EFCD18"
      />
      <path
        d="M78.1396 39L78.8914 40.7275H81.3245L79.3561 41.7951L80.108 43.5225L78.1396 42.4549L76.1712 43.5225L76.923 41.7951L74.9546 40.7275H77.3877L78.1396 39Z"
        fill="#D9D9D9"
      />
      <line x1="48" y1="46.5" x2="96" y2="46.5" stroke="#D9D9D9" />
      <line x1="48" y1="48.5" x2="92.6512" y2="48.5" stroke="#D9D9D9" />
      <path
        d="M53.814 66C57.0249 66 59.6279 63.7614 59.6279 61C59.6279 58.2386 57.0249 56 53.814 56C50.603 56 48 58.2386 48 61C48 63.7614 50.603 66 53.814 66Z"
        fill={color}
      />
      <path d="M65.4419 60H94.5116" stroke="#A8A9AB" stroke-width="2" />
      <path d="M65.4419 63.5H78.814" stroke="#D9D9D9" />
      <path
        d="M51.4884 67L52.2716 68.7275H54.806L52.7556 69.7951L53.5388 71.5225L51.4884 70.4549L49.438 71.5225L50.2212 69.7951L48.1707 68.7275H50.7052L51.4884 67Z"
        fill="#EFCD18"
      />
      <path
        d="M58.4651 67L59.2483 68.7275H61.7828L59.7323 69.7951L60.5156 71.5225L58.4651 70.4549L56.4147 71.5225L57.1979 69.7951L55.1475 68.7275H57.6819L58.4651 67Z"
        fill="#EFCD18"
      />
      <path
        d="M65.4419 67L66.225 68.7275H68.7595L66.7091 69.7951L67.4923 71.5225L65.4419 70.4549L63.3914 71.5225L64.1747 69.7951L62.1242 68.7275H64.6587L65.4419 67Z"
        fill="#EFCD18"
      />
      <path
        d="M72.4186 67L73.2018 68.7275H75.7363L73.6858 69.7951L74.4691 71.5225L72.4186 70.4549L70.3681 71.5225L71.1514 69.7951L69.1009 68.7275H71.6355L72.4186 67Z"
        fill="#D9D9D9"
      />
      <path
        d="M79.3953 67L80.1785 68.7275H82.713L80.6626 69.7951L81.4458 71.5225L79.3953 70.4549L77.3449 71.5225L78.1281 69.7951L76.0777 68.7275H78.6122L79.3953 67Z"
        fill="#D9D9D9"
      />
      <path d="M48 74.5H98" stroke="#D9D9D9" />
      <path d="M48 76.5H94.5116" stroke="#D9D9D9" />
      <defs>
        <filter
          id="filter0_d_31_415"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_415" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_415"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const reviews: ComponentContainer = {
  id: 'reviews',
  name: 'Reviews',
  icon: MdOutlineRateReview,
  svgIcon: <Icon />,
  data: components_list
};
