import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  HStack,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { MdTimeline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { IconType } from 'react-icons';

const dropdownLinks = [
  {
    name: 'Projects',
    path: '#',
    icon: MdTimeline
  },
  {
    name: 'Tech Stack',
    path: '#',
    icon: AiTwotoneThunderbolt
  },
  {
    name: 'Open Source',
    path: '#',
    icon: BsBook
  }
];

const MenuContainer = () => {
  return (
    <Flex
      w="full"
      h="230px"
      justifyContent="center"
      alignItems="flex-start"
      p={{ base: 5, sm: 10 }}
    >
      <DropDownMenu />
    </Flex>
  );
};

// Ideally, only the DropDownMenu component should be used. The MenuContainer component is used to style the preview.
const DropDownMenu = () => {
  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <Menu autoSelect={false} isLazy>
      {({ isOpen, onClose }) => (
        <>
          <MenuButton
            as={Button}
            variant="ghost"
            size="sm"
            px={3}
            py={1}
            lineHeight="inherit"
            fontSize="1em"
            fontWeight="normal"
            rounded="md"
            height="auto"
            _hover={{ color: 'blue.400', bg: menuProps.bg }}
          >
            <Flex alignItems="center">
              <Text>Links</Text>
              <Icon
                as={BiChevronDown}
                h={5}
                w={5}
                ml={1}
                transition="all .25s ease-in-out"
                transform={isOpen ? 'rotate(180deg)' : ''}
              />
            </Flex>
          </MenuButton>
          <MenuList
            zIndex={5}
            bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
            border="none"
            boxShadow={useColorModeValue(
              '2px 4px 6px 2px rgba(160, 174, 192, 0.6)',
              '2px 4px 6px 2px rgba(9, 17, 28, 0.6)'
            )}
          >
            {dropdownLinks.map((link, index) => (
              <MenuLink
                key={index}
                name={link.name}
                path={link.path}
                icon={link.icon}
                onClose={onClose}
              />
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

interface MenuLinkProps {
  name: string;
  path: string;
  icon: IconType;
  onClose: () => void;
}

const MenuLink = ({ name, path, icon, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <HStack>
          <Icon as={icon} size={18} color="blue.400" />
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};

export default MenuContainer;
