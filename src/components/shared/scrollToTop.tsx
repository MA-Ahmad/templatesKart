import { Flex, Box, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useLinkColor } from 'components/theme';
import { useLocalSetting } from '../theme/hooks/useLocalSetting';

const valuePageYOffset = 300;

const ScrollToTop = () => {
  const [isRightDirection, setIsRightDirection] = useLocalSetting('isRightDirection', true);
  const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });
  const getVisible = () =>
    document.body.scrollTop > valuePageYOffset ||
    document.documentElement.scrollTop > valuePageYOffset;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(() => getVisible());
    window.onscroll = () => setIsVisible(() => getVisible());
  }, []);

  return (
    <Tooltip label="Scroll to top" placement="left" aria-label="Scroll to top">
      <Box
        pos="fixed"
        transition="all 0.1s ease-in-out"
        bottom={isRightDirection ? '20' : '5'}
        right="5"
        visibility={isVisible ? 'visible' : 'hidden'}
        zIndex={5}
      >
        <Flex
          rounded="full"
          bg={'var(--colors-accent-200)'}
          p="0.1rem"
          boxShadow={useColorModeValue(
            '2px 6px 8px 2px var(--colors-accent-100)',
            '2px 6px 8px rgba(9, 17, 28, 0.9)'
          )}
          cursor="pointer"
          onClick={scrollToTop}
        >
          <Flex
            rounded="full"
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={3}
            alignItems="center"
            _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
          >
            <Icon as={FiArrowUp} color={useColorModeValue('gray.900', 'white')} w={5} h={5} />
          </Flex>
        </Flex>
      </Box>
    </Tooltip>
  );
};

export default ScrollToTop;
