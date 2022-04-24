import * as React from 'react';
import {
  SimpleGrid,
  Flex,
  Box,
  Image,
  Stack,
  HStack,
  Text,
  chakra,
  Icon,
  Divider
} from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import { SEO } from 'components/SEO';
import { useLinkColor } from 'components/theme';
import { TiTick } from 'react-icons/ti';
import HeroSection from 'components/shared/hero-section';

const heroSectionData = {
  heading: 'TemplatesKart',
  subHeading: 'Production-ready hand crafted Projects and Components built on top of Chakra UI',
  label: 'Deliver your projects faster',
  heroImage: '/assets/images/layouts/hero_image.png',
  buttonLinks: [
    { label: 'Projects', url: '/projects' },
    { label: 'Components', url: '/components' }
  ]
};

const overviewData = [
  {
    id: 1,
    heading: 'Project Screen',
    content: 'Live project view on right side and project pages on left side.',
    image: '/assets/images/layouts/project_screen.png'
  },
  {
    id: 2,
    heading: 'Project Components',
    content: 'Check components responsiveness and copy code by clicking on code button.',
    image: '/assets/images/layouts/project_components.png'
  },
  {
    id: 3,
    heading: 'Components Screen',
    content: 'Choose component from 12+ categories and copy code by clicking on code button.',
    image: '/assets/images/layouts/components_screen.png'
  }
];

const features: string[] = [
  '6 Projects',
  '50+ Components',
  'Production Ready',
  'Light and Dark Mode',
  'Fully Responsive',
  'Typescript Support',
  'Ease of Use',
  'Open Source',
  'Easy to Customize'
];

export default function Index() {
  const linkColor = useLinkColor();
  const [selectedId, setSelectedId] = React.useState(1);

  const getSelectedContentImageUrl = () => {
    return overviewData.filter((data) => data.id === selectedId)[0].image;
  };

  return (
    <RootLayout>
      <SEO />
      <HeroSection {...heroSectionData} />
      <Stack my={28} spacing={8}>
        <chakra.h1
          fontSize="5xl"
          textAlign="center"
          color={linkColor}
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
        >
          Key Features
        </chakra.h1>

        <Flex justify="center" fontSize="2xl" fontWeight="600">
          <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={5}>
            {features.map((feature, index) => (
              <HStack spacing={2} key={index}>
                <Icon as={TiTick} w={7} h={7} color={linkColor} />
                <Flex textAlign="left">{feature}</Flex>
              </HStack>
            ))}
          </SimpleGrid>
        </Flex>
      </Stack>

      <Stack
        my={20}
        spacing={8}
        pos="relative"
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          width: '50%',
          filter: 'blur(20rem)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          right: 0,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80")'
        }}
      >
        <chakra.h1
          fontSize="5xl"
          textAlign="center"
          color={linkColor}
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
        >
          Overview
        </chakra.h1>
        <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing={10} justify="center">
          <Stack direction="column" w={{ base: '100%', md: '30%' }}>
            <Divider />
            {overviewData.map((data, index) => (
              <React.Fragment key={index}>
                <Box
                  p={5}
                  cursor="pointer"
                  rounded="lg"
                  color={data.id === selectedId ? 'white' : 'inherit'}
                  bgGradient={
                    data.id === selectedId ? `linear(to-r, ${linkColor}, #1e4f7c)` : 'initial'
                  }
                  _hover={{
                    bgGradient: `linear(to-l, ${linkColor}, #103e68)`,
                    color: 'white'
                  }}
                  onClick={() => setSelectedId(data.id)}
                >
                  <chakra.h3 fontSize="2xl" fontWeight="bold" mb={1}>
                    {data.heading}
                  </chakra.h3>
                  {data.id === selectedId && <Text fontSize="sm">{data.content}</Text>}
                  {data.id === selectedId && (
                    <Stack w="auto" mt={2} d={{ base: 'flex', md: 'none' }}>
                      <Image
                        zIndex={5}
                        src={getSelectedContentImageUrl()}
                        width={{ md: '30rem', lg: '50rem' }}
                        rounded="lg"
                      />
                    </Stack>
                  )}
                </Box>
                <Divider />
              </React.Fragment>
            ))}
          </Stack>
          <Stack w="auto" d={{ base: 'none', md: 'flex' }}>
            <Image
              zIndex={5}
              src={getSelectedContentImageUrl()}
              width={{ md: '30rem', lg: '50rem' }}
              rounded="lg"
            />
          </Stack>
        </Stack>
      </Stack>
    </RootLayout>
  );
}
