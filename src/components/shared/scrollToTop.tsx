import { IconButton, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useLinkColor } from 'components/theme';

const ScrollToTop = () => {
  const linkColor = useLinkColor();
  const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });
  const getVisible = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(() => getVisible());
    window.onscroll = () => setIsVisible(() => getVisible());
  }, []);
  return (
    <Box pos="fixed" bottom="30" right="4" visibility={isVisible ? 'visible' : 'hidden'}>
      <IconButton
        aria-label="Back to top"
        title="Back to top"
        icon={<FiArrowUp />}
        rounded="full"
        bg={linkColor}
        color="white"
        colorScheme="brand"
        onClick={scrollToTop}
      />
    </Box>
  );
};

export default ScrollToTop;
