import { useColorMode, useColorModeValue, IconButtonProps, Flex, Text } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from '../shared/animations/motion';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue('dark', 'light');

  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Flex
        onClick={handleClick}
        justifyContent="space-between"
        alignItems="center"
        p={5}
        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
        cursor="pointer"
      >
        <Text fontWeight="medium">Mode</Text>
        <MotionBox
          key={mode === 'dark' ? 'dark-icon' : 'light-icon'}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          cursor="pointer"
          fontSize="3xl"
          width="2rem"
          lineHeight={1}
        >
          {mode === 'dark' ? '🌤' : '🌙'}
        </MotionBox>
      </Flex>
    </AnimatePresence>
  );
};

export default ColorModeSwitcher;
