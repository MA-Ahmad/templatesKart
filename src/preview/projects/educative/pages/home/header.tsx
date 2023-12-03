import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Icon,
  Input,
  Button,
  Collapse,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.800')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10
        }}
        bg={useColorModeValue('gray.200', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        align={'center'}
        justifyContent={'space-between'}
      >
        {/* Hamburger Icon */}
        <Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={AiOutlineClose} w={3} h={3} />
              ) : (
                <Icon as={GiHamburgerMenu} w={5} h={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        {/* Logo */}
        <Flex flex={{ base: 1, md: 'inherit' }} justifyContent={{ base: 'center', md: 'start' }}>
          <Text
            as={Link}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text>
        </Flex>

        {/* Search Input field */}
        <Input
          placeholder="Search ..."
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300'
          }}
          display={{ base: 'none', md: 'block' }}
          w={'30%'}
        />

        {/* Buttons */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack
            flex={{ base: 1, md: 0 }}
            justifyContent={'flex-end'}
            alignItems="center"
            direction={'row'}
            spacing={3}
          >
            <SignupSection />
          </Stack>
        </Stack>
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const SignupSection = () => {
  return (
    <>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        rounded="md"
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        colorScheme="teal"
        variant="outline"
      >
        Sign In
      </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        rounded="md"
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        colorScheme="teal"
      >
        Sign Up
      </Button>
    </>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      <Button
        fontSize={'sm'}
        rounded="md"
        fontWeight={600}
        href={'#'}
        w="100%"
        colorScheme="teal"
        variant="outline"
      >
        Sign In
      </Button>
      <Button fontSize={'sm'} rounded="md" fontWeight={600} href={'#'} colorScheme="teal" w="100%">
        Sign Up
      </Button>
    </Stack>
  );
};
