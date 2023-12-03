import * as React from 'react';
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Stack
      p={{ base: 5, md: 10 }}
      direction={{ base: 'column', md: 'row' }}
      bgImage={{
        base: 'none',
        md: 'url(https://mantine.dev/static/banner-3aed73d88ba2f8fca5f19f43eb8df554.webp)'
      }}
      backgroundSize="480px"
      backgroundPosition="center right"
      backgroundRepeat="no-repeat"
      minH={{ base: 'unset', md: '450px' }}
    >
      <Box
        bgImage={{ base: 'none', md: 'linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)' }}
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        zIndex="0"
        opacity="0.8"
      ></Box>
      <Stack
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="center"
        spacing={6}
        maxW="550px"
      >
        <chakra.h1
          fontSize={{ base: '3xl', sm: '5xl' }}
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
        >
          Explore TemplatesKart <br />
        </chakra.h1>
        <Text
          fontSize="1.2rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="400"
          color={useColorModeValue('gray.500', 'gray.700')}
        >
          TemplatesKart is a set of more than 100 responsive components built with chakraUI. All
          components support dark/light color scheme and chakraUI theme customizations.
          TemplatesKart is free for everyone.
        </Text>
        <HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap">
          <chakra.button
            h={10}
            px={6}
            color="white"
            variant="solid"
            fontSize="md"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            bg="blue.400"
            _hover={{ bg: 'blue.600' }}
          >
            View Components
          </chakra.button>
          <Flex
            as={Link}
            justifyContent="center"
            h={10}
            px={6}
            lineHeight={1.18}
            rounded="md"
            fontWeight="bold"
            alignItems="center"
            bg={useColorModeValue('gray.200', 'gray.600')}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
          >
            <Icon as={FaGithub} h={4} w={4} />
            <chakra.span ml={1}> Source code</chakra.span>
          </Flex>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
