import { Box, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { ReactNode } from 'react';

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
