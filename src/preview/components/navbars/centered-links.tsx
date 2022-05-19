import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { RiFlashlightFill } from 'react-icons/ri';

const navLinks = [
  { name: 'About', path: '#' },
  { name: 'Features', path: '#' },
  { name: 'Pricing', path: '#' }
];

const dropdownLinks = [
  {
    name: 'Blog',
    path: '#'
  },
  {
    name: 'Documentation',
    path: '#'
  },
  {
    name: 'Github Repo',
    path: '#'
  }
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={useColorModeValue('white', 'gray.800')}>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
        <Icon as={RiFlashlightFill} h={8} w={8} />

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={6} d={{ base: 'none', md: 'flex' }} alignItems="center">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

            {/* Dropdown Menu */}
            <Menu autoSelect={false} isLazy>
              {({ isOpen, onClose }) => (
                <>
                  <MenuButton _hover={{ color: 'blue.400' }}>
                    <Flex alignItems="center">
                      <Text>Community</Text>
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
                      <MenuLink key={index} name={link.name} path={link.path} onClose={onClose} />
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </HStack>

        <Button colorScheme="blue" size="md" rounded="md" d={{ base: 'none', md: 'block' }}>
          Sign in
        </Button>
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          d={{ base: 'inherit', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} d={{ base: 'inherit', md: 'none' }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Text fontWeight="semibold" color="gray.500">
              Community
            </Text>
            <Stack pl={2} spacing={1} mt={'0 !important'}>
              {dropdownLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('blue.500', 'blue.200')
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};
