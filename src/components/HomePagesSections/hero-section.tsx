import {
  Flex,
  Box,
  Image,
  Stack,
  VStack,
  HStack,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import Header from './header';

interface HeroSection {
  heading: string;
  content: string;
  subContent?: string;
  label: string;
  heroImage: string;
  buttonLinks?: { label: string; url: string }[];
}

const HeroSection = ({
  label,
  heading,
  content,
  subContent,
  heroImage,
  buttonLinks
}: HeroSection) => {
  const linkColor = useLinkColor();

  return (
    <Flex w="100%" direction={{ base: 'column', md: 'row' }} pos="relative">
      <Image
        filter="blur(20rem)"
        zIndex="-1"
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
          spacing={4}
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
        >
          <Text fontSize="lg" fontWeight="bold">
            {label}
          </Text>
          <VStack spacing={0} mb={6} textAlign="left">
            <Header bgGradient={`linear(to-r, ${linkColor}, cyan.700)`} bgClip="text">
              {heading}
            </Header>
            <Text fontSize="lg" w="100%">
              {content}
            </Text>
            {subContent && (
              <Text fontSize="lg" w="100%">
                {subContent}
              </Text>
            )}
          </VStack>
          <HStack spacing={2}>
            {buttonLinks?.map((link, index) => (
              <CustomLink key={index} link={link} linkColor={linkColor} />
            ))}
          </HStack>
        </Stack>
      </Box>
      <Flex
        w={{ base: '100%', md: '50%' }}
        h={{ base: '100%', md: 'auto' }}
        pos={{ base: 'absolute', md: 'relative' }}
        alignItems="center"
        justifyContent="center"
        bgGradient={`linear(to-r, ${linkColor}, #1e4f7c)`}
        direction="column"
        p={{ base: 3, sm: '4rem' }}
        pl={{ base: 0, lg: '7rem' }}
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        rounded="lg"
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
        <Image src={heroImage} w={{ base: '10rem', md: '28rem' }} minH="14rem" />
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

interface CustomLinkProps {
  link: { label: string; url: string };
  linkColor: string;
}

const CustomLink = ({ link, linkColor }: CustomLinkProps) => {
  return (
    <NextLink href={link.url} passHref={true}>
      <Link
        d="inline-flex"
        alignItems="center"
        justifyContent="center"
        fontSize="md"
        fontWeight="500"
        p={3}
        lineHeight={1.2}
        h={10}
        w="max-content"
        rounded="md"
        textDecoration="none"
        color="white"
        bgGradient={`linear(to-r, ${linkColor}, #1e4f7c)`}
        _hover={{
          bgGradient: `linear(to-l, ${linkColor}, #103e68)`,
          color: 'white'
        }}
        shadow="lg"
      >
        {link.label}
      </Link>
    </NextLink>
  );
};

export default HeroSection;
