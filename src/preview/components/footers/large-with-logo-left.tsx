import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
          <Link href="https://templateskart.com" isExternal>
            <Image w="100px" src="/assets/images/layouts/hero_image.png" alt="TemplatesKart" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
            Build fully functional accessible web applications faster than ever
          </Text>
        </Box>
        <HStack
          spacing={4}
          d={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Chat on Discord</CustomLink>
              <CustomLink>Follow on Twitter</CustomLink>
              <CustomLink>Follow on Github</CustomLink>
              <CustomLink>Github discussions</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>TemplatesKart</CustomLink>
              <CustomLink>Documentation</CustomLink>
              <CustomLink>Github organization</CustomLink>
              <CustomLink>npm organization</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
        <Text fontSize="md">
          Built by{' '}
          <Link
            href="https://github.com/MA-Ahmad"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
            Muhammad Ahmad
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
          <Button leftIcon={<FaGithub />} as={Link} href="#" rounded="md" colorScheme="gray">
            Github Discussions
          </Button>
          <Button
            leftIcon={<BsDiscord />}
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: 'purple.600' }}
          >
            Discord community
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;
