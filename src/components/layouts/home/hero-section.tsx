import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Stack,
  VStack,
  HStack,
  Text,
  chakra,
  Button,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';

interface HeroSection {
  heading: string;
  subHeading: string;
  label: string;
  heroImage: string;
  buttonLinks: { label: string; url: string }[];
}

const heroSection: HeroSection = {
  heading: 'TemplatesKart',
  subHeading: 'Production-ready hand crafted Projects and Components built on top of Chakra UI',
  label: 'Deliver your projects faster',
  heroImage: '/hero_image.png',
  buttonLinks: [
    { label: 'Projects', url: '/projects' },
    { label: 'Components', url: '/components' }
  ]
};

const HeroSection = () => {
  const linkColor = useLinkColor();
  const { label, heading, subHeading, buttonLinks } = heroSection;

  return (
    <Flex w="100%" direction={{ base: 'column', md: 'row' }} pos="relative">
      <Image
        filter="blur(20rem)"
        w="50%"
        h="100%"
        pos="absolute"
        src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=334"
      />
      <Box w={{ base: '100%', md: '50%' }} margin="auto">
        <Stack
          zIndex={5}
          w="100%"
          h="max-content"
          direction="column"
          spacing={5}
          p={{ base: 3, sm: '1rem', lg: '3rem' }}
          ml={{ base: 0, md: 6, lg: 20 }}
          bg={useColorModeValue('gray.100', 'gray.800')}
          boxShadow={useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          css={{
            backdropFilter: 'saturate(180%) blur(5px)',
            backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
          }}
          rounded="lg"
          pos="relative"
          transition="all .25s ease-in-out"
          _hover={{ transform: 'rotate(2deg)' }}
        >
          <Text fontSize="lg">{label}</Text>
          <VStack spacing={0} mb={6} textAlign="left">
            <chakra.h1 fontSize="5xl" color={linkColor} lineHeight={1.2} fontWeight="bold" w="100%">
              {heading}
            </chakra.h1>
            <Text fontSize="lg" noOfLines={2}>
              {subHeading}
            </Text>
          </VStack>
          <HStack spacing={2}>
            {buttonLinks.map((link, index) => (
              <NextLink key={index} href={link.url} passHref={true}>
                <Button
                  as={Link}
                  w="max-content"
                  rounded="md"
                  bgGradient={`linear(to-r, ${linkColor}, #1e4f7c)`}
                  _hover={{
                    bgGradient: `linear(to-l, ${linkColor}, #103e68)`,
                    color: 'white'
                  }}
                  color="white"
                  shadow="lg"
                >
                  {link.label}
                </Button>
              </NextLink>
            ))}
          </HStack>
        </Stack>
      </Box>
      <Flex
        w={{ base: '100%', md: '50%' }}
        h={{ base: '100%', md: 'auto' }}
        pos={{ base: 'absolute', md: 'relative' }}
        alignItems="center"
        justify="center"
        bg={linkColor}
        direction="column"
        p={{ base: 3, sm: '4rem' }}
        pl={{ base: 0, lg: '7rem' }}
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        rounded="lg"
        transition="all .25s ease-in-out"
        _hover={{ transform: 'rotate(-2deg)' }}
      >
        <Box
          pos="absolute"
          top={{ base: '2rem', lg: '4rem' }}
          right="4rem"
          fontSize="3rem"
          fontWeight="bold"
          transform="rotate(-15deg)"
          color="#ffc65c"
        >
          &lt;<span>&#47;</span>&gt;
        </Box>
        <Image src="/hero_image.png" w={{ base: '10rem', md: '25rem' }} />
        <Box
          pos="absolute"
          bottom={{ base: '2rem', lg: '5rem' }}
          left={{ base: '5rem', lg: '7rem' }}
          fontSize="3rem"
          fontWeight="bold"
          transform="rotate(15deg)"
          color="#ffc65c"
        >
          &#123; &#125;
        </Box>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
