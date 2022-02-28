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

const variants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface CardTransitionProps {
  children: ReactNode;
}

export const CardTransition = ({ children }: CardTransitionProps) => {
  return <MotionBox variants={variants}>{children}</MotionBox>;
};
