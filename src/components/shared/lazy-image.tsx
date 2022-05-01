import * as React from 'react';
import { Image } from '@chakra-ui/react';

type LazyImageProps = {
  src: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="cover"
      alt="cover image"
      width={width}
      height={height}
      size={size}
      layout={layout}
      rounded={rounded}
    />
  );
};

export default LazyImage;
