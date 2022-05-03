import * as React from 'react';
import {
  Container,
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Menu,
  Link,
  MenuItem,
  MenuDivider,
  MenuButton,
  IconButton,
  MenuList,
  HStack,
  Button,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdAdd } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

const Header = () => {
  const { onOpen } = useDisclosure();

  return (
    <Container maxW="7xl" p={10}>
      <Flex mb={'30px'} align="center">
        <HStack>
          <Link href="#">
            <Box p="2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl' }}
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  bgClip="text"
                  _focus={{ boxShadow: 'none', outline: 'none' }}
                  _hover={{
                    textDecoration: 'none',
                    bgGradient: 'linear(to-r, red.500, yellow.500)'
                  }}
                >
                  Notebook App
                </Heading>
              </motion.div>
            </Box>
          </Link>
        </HStack>
        <Spacer />
        <Box>
          <HStack>
            <HStack d={['none', 'none', 'block']}>
              <Button
                leftIcon={<MdAdd />}
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)' }}
                variant="solid"
                size="sm"
                rounded="md"
              >
                Add new note
              </Button>
              <Button
                leftIcon={<AiOutlineArrowRight />}
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)' }}
                variant="solid"
                size="sm"
                rounded="md"
              >
                Open source
              </Button>
            </HStack>
            <Box d={['block', 'block', 'none']}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<GiHamburgerMenu />}
                  transition="all 0.2s"
                  size="md"
                  color="white"
                  variant="outline"
                  bg={useColorModeValue('gray.400', 'gray.800')}
                  _hover={{ bg: 'auto' }}
                  _focus={{ boxShadow: 'outline' }}
                />
                <MenuList fontSize="sm" zIndex={5}>
                  <MenuItem icon={<MdAdd />} onClick={onOpen}>
                    {' '}
                    <Text textShadow="1px 1px #9c1786">Add new note</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<AiOutlineArrowRight />}>
                    {' '}
                    <Text textShadow="1px 1px #9c1786">Open source repositories</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <IconButton aria-label="Color Switcher" icon={<FiSun />} />
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
