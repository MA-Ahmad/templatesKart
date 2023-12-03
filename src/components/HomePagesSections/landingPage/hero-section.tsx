import React from 'react';
import {
  Flex,
  Stack,
  Text,
  chakra,
  Icon,
  Button,
  Link,
  Container,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useLinkColor } from 'components/theme';

// Hero Section
const heroSectionFeatures = [
  {
    title: 'Free and open source',
    detail: 'All components have MIT license, you can use in any project',
    icon: (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={`M12.75 2.75a.75.75 0 00-1.5 0V4.5H9.276a1.75 1.75 0 00-.985.303L6.596 5.957A.25.25 0 016.455 
          6H2.353a.75.75 0 100 1.5H3.93L.563 15.18a.762.762 0 00.21.88c.08.064.161.125.309.221.186.121.452.278.792.433.68.311 
          1.662.62 2.876.62a6.919 6.919 0 002.876-.62c.34-.155.606-.312.792-.433.15-.097.23-.158.31-.223a.75.75 0 
          00.209-.878L5.569 7.5h.886c.351 0 .694-.106.984-.303l1.696-1.154A.25.25 0 019.275 6h1.975v14.5H6.763a.75.75 
          0 000 1.5h10.474a.75.75 0 000-1.5H12.75V6h1.974c.05 0 .1.015.14.043l1.697 1.154c.29.197.633.303.984.303h.886l-3.368 
          7.68a.75.75 0 00.23.896c.012.009 0 0 .002 0a3.154 3.154 0 00.31.206c.185.112.45.256.79.4a7.343 7.343 0 
          002.855.568 7.343 7.343 0 002.856-.569c.338-.143.604-.287.79-.399a3.5 3.5 0 00.31-.206.75.75 0 00.23-.896L20.07 
          7.5h1.578a.75.75 0 000-1.5h-4.102a.25.25 0 01-.14-.043l-1.697-1.154a1.75 1.75 0 00-.984-.303H12.75V2.75zM2.193 
          15.198a5.418 5.418 0 002.557.635 5.418 5.418 0 002.557-.635L4.75 9.368l-2.557 5.83zm14.51-.024c.082.04.174.083.275.126.53.223 
          1.305.45 2.272.45a5.846 5.846 0 002.547-.576L19.25 9.367l-2.547 5.807z`}
        ></path>
      </svg>
    )
  },
  {
    title: 'TypeScript based',
    detail: 'Build type safe applications',
    icon: (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={`M3 3a2 2 0 012-2h9.982a2 2 0 011.414.586l4.018 4.018A2 2 0 0121 7.018V21a2 2 0 01-2 2H4.75a.75.75 
          0 010-1.5H19a.5.5 0 00.5-.5V8.5h-4a2 2 0 01-2-2v-4H5a.5.5 0 00-.5.5v6.25a.75.75 0 01-1.5 0V3zm12-.5v4a.5.5 
          0 00.5.5h4a.5.5 0 00-.146-.336l-4.018-4.018A.5.5 0 0015 2.5z`}
        ></path>
        <path
          d={`M4.53 12.24a.75.75 0 01-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 11-1.022 1.1l-3.23-3a.75.75 0 
        010-1.1l3.23-3a.75.75 0 011.06.04zm3.979 1.06a.75.75 0 111.02-1.1l3.231 3a.75.75 0 010 1.1l-3.23 3a.75.75 
        0 11-1.021-1.1l2.639-2.45-2.64-2.45z`}
        ></path>
      </svg>
    )
  },
  {
    title: 'Easy to customize',
    detail: 'Customize components as you want',
    icon: (
      <svg
        aria-hidden="true"
        role="img"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={`M10.157 1.154a11.07 11.07 0 013.686 0 .75.75 0 01-.25 1.479 9.568 9.568 0 00-3.186 0 .75.75 0 
          01-.25-1.48zM6.68 3.205a.75.75 0 01-.177 1.046A9.558 9.558 0 004.25 6.503a.75.75 0 01-1.223-.87 
          11.058 11.058 0 012.606-2.605.75.75 0 011.046.177zm10.64 0a.75.75 0 011.046-.177 11.058 11.058 0 
          012.605 2.606.75.75 0 11-1.222.869 9.558 9.558 0 00-2.252-2.252.75.75 0 01-.177-1.046zM2.018 
          9.543a.75.75 0 01.615.864 9.568 9.568 0 000 3.186.75.75 0 01-1.48.25 11.07 11.07 0 010-3.686.75.75 
          0 01.865-.614zm19.964 0a.75.75 0 01.864.614 11.066 11.066 0 010 3.686.75.75 0 01-1.479-.25 9.56 9.56 
          0 000-3.186.75.75 0 01.615-.864zM3.205 17.32a.75.75 0 011.046.177 9.558 9.558 0 002.252 2.252.75.75 
          0 11-.87 1.223 11.058 11.058 0 01-2.605-2.606.75.75 0 01.177-1.046zm17.59 0a.75.75 0 01.176 1.046 
          11.057 11.057 0 01-2.605 2.605.75.75 0 11-.869-1.222 9.558 9.558 0 002.252-2.252.75.75 0 011.046-.177zM9.543 
          21.982a.75.75 0 01.864-.615 9.56 9.56 0 003.186 0 .75.75 0 01.25 1.48 11.066 11.066 0 01-3.686 0 .75.75 0 01-.614-.865z`}
        ></path>
      </svg>
    )
  }
];

const HeroSection = () => {
  const linkColor = useLinkColor();

  return (
    <Container maxW="1280px" px={{ base: 6, md: 10 }} py={14}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Stack direction="column" spacing={10} justifyContent="center">
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight={{ base: 'bold', md: 'extrabold' }}
            textAlign="left"
          >
            Production-ready
            <chakra.span bgGradient={`linear(to-r, ${linkColor}, #1e4f7c)`} bgClip="text">
              {' '}
              Projects and Components{' '}
            </chakra.span>{' '}
            <br /> built on top of Chakra UI
          </chakra.h1>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize="lg"
            textAlign="left"
            fontWeight="400"
            maxW="700px"
          >
            Build fully functional accessible web applications faster than ever – TemplatesKart
            includes more than 80 customizable components and 6 projects to cover you in any
            situation
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 5, md: 10 }}
            flexWrap="wrap"
          >
            {heroSectionFeatures.map((feature, index) => (
              <Stack key={index} direction={{ base: 'row', md: 'column' }} spacing={2}>
                <Flex
                  p={3}
                  maxH="52px"
                  w="max-content"
                  color="white"
                  bgGradient={`linear(to-r, ${linkColor}, #1e4f7c)`}
                  rounded="md"
                >
                  {feature.icon}
                </Flex>
                <Stack direction="column" spacing={2}>
                  <Text fontSize="md" fontWeight="500">
                    {feature.title}
                  </Text>
                  <Text fontSize="sm" color="gray.400" maxW={{ base: '100%', md: '200px' }}>
                    {feature.detail}
                  </Text>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: 0, sm: 2 }}
            flexWrap="wrap"
          >
            <NextLink href="/components" passHref>
              <chakra.button
                d="flex"
                bgGradient={`linear(to-r, ${linkColor}, #1e4f7c)`}
                color="white"
                _hover={{ bgGradient: `linear(to-l, ${linkColor}, #1e4f7c)` }}
                boxShadow="md"
                variant="solid"
                size="lg"
                rounded="md"
                fontWeight="bold"
                lineHeight={1.2}
                alignItems="center"
                justifyContent="center"
                h={12}
                px={6}
                mb={{ base: 2, sm: 0 }}
                as={Link}
              >
                Get started
              </chakra.button>
            </NextLink>
            <Flex
              border="1px solid"
              borderColor="gray.700"
              justifyContent="center"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }}
              p={3}
              px={4}
              lineHeight={1.18}
              rounded="md"
              boxShadow="md"
              fontWeight="bold"
              alignItems="center"
              as={Link}
              href="https://github.com/MA-Ahmad/templatesKart"
              isExternal
            >
              <Icon as={FaGithub} h={4} w={4} />
              <chakra.span ml={1}> Github</chakra.span>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
