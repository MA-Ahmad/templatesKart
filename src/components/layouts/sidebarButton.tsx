import * as React from 'react';
import { Stack, Icon } from '@chakra-ui/react';
import { useLinkColor } from 'components/theme';
import { FaChevronLeft } from 'react-icons/fa';

const SidebarButton = ({ onToggle, isOpen }: { onToggle: () => void; isOpen: boolean }) => {
  const linkColor = useLinkColor();

  return (
    <Stack
      left="0"
      p={3}
      pos="fixed"
      boxShadow="lg"
      alignItems="center"
      bg={linkColor}
      color="white"
      cursor="pointer"
      onClick={onToggle}
      borderTopRightRadius="md"
      borderBottomRightRadius="md"
      opacity="0.5"
      display={{ base: 'none', lg: 'flex' }}
      _hover={{ opacity: 1 }}
    >
      <Icon
        as={FaChevronLeft}
        h={4}
        w={4}
        transition="all .25s ease-in-out"
        transform={isOpen ? 'rotate(180deg)' : ''}
      />
    </Stack>
  );
};

export default SidebarButton;
