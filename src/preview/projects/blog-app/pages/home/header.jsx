import React from 'react';
import { Box, Heading, Flex, Button, Link, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box as="nav" bg="teal.500">
      <Flex
        as="nav"
        align="center"
        justifyContent="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        color="white"
        maxWidth="1200px"
        mx="auto"
        my="auto"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'} color="gray.600">
            Blog
          </Heading>
        </Flex>

        <Box
          display={['block', 'none', 'none', 'none']}
          onClick={handleToggle}
          cursor="pointer"
          p={3}
          bg={useColorModeValue('gray.300', 'gray.600')}
          rounded="md"
        >
          <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={[show ? 'block' : 'none', 'flex', 'flex', 'flex']}
          width={['full', 'auto', 'auto', 'auto']}
          alignItems="center"
          flexGrow={1}
        >
          <Box>
            <Heading fontSize="20px">
              <Link to="#">New</Link>
            </Heading>
          </Box>
          <Box ml={[0, 3, 3, 3]}>
            <Heading fontSize="20px">
              <Link to="#">List</Link>
            </Heading>
          </Box>
        </Box>

        <Box display={['none', 'block', 'block', 'block']} mt={[4, 0, 0, 0]}>
          <Link
            href="https://github.com/MA-Ahmad/reactBlog"
            isExternal
            style={{ textDecoration: 'none' }}
          >
            <Button leftIcon={FaGithub} bg="transparent" border="1px" rounded="md">
              View Source
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
