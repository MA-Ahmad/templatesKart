import { Box, forwardRef } from '@chakra-ui/react';
// Here we have used framer-motion package for animations
import { motion, isValidMotionProp } from 'framer-motion';

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
