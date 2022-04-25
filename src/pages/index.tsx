import React, { useState } from 'react';
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
  Divider,
  Spinner
} from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import { SEO } from 'components/SEO';
import { useLinkColor } from 'components/theme';
import { TiTick } from 'react-icons/ti';
import HeroSection from 'components/HomePagesSections/hero-section';
import Header from 'components/HomePagesSections/header';

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
  const [selectedId, setSelectedId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getSelectedContentImageUrl = () => {
    return overviewData.filter((data) => data.id === selectedId)[0].image;
  };

  const handleClick = (id: number) => {
    setIsLoading(true);
    setSelectedId(id);
  };

  const isSelectedTab = (id: number) => {
    return id === selectedId;
  };

  return (
    <RootLayout>
      <SEO />
      <HeroSection {...heroSectionData} />
      <Stack my={28} spacing={8}>
        <Header textAlign="center">Key Features</Header>
        <Flex justify="center" fontSize="2xl" fontWeight="600">
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
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
        <Header textAlign="center">Overview</Header>
        <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing={10} justify="center">
          <Stack direction="column" w={{ base: '100%', md: '30%' }}>
            <Divider />
            {overviewData.map((data, index) => (
              <React.Fragment key={index}>
                <Box
                  p={5}
                  cursor="pointer"
                  rounded="lg"
                  color={isSelectedTab(data.id) ? 'white' : 'inherit'}
                  bgGradient={
                    isSelectedTab(data.id) ? `linear(to-r, ${linkColor}, #1e4f7c)` : 'initial'
                  }
                  _hover={{
                    bgGradient: `linear(to-l, ${linkColor}, #103e68)`,
                    color: 'white'
                  }}
                  onClick={() => handleClick(data.id)}
                >
                  <chakra.h3 fontSize="2xl" fontWeight="bold" mb={1}>
                    {data.heading}
                  </chakra.h3>
                  {isSelectedTab(data.id) && <Text fontSize="sm">{data.content}</Text>}
                  {isSelectedTab(data.id) && (
                    <Stack w="auto" mt={2} d={{ base: 'flex', md: 'none' }}>
                      <Image
                        zIndex={5}
                        opacity={isLoading ? 0.4 : 1}
                        src={getSelectedContentImageUrl()}
                        onLoad={() => setIsLoading(false)}
                        width={{ md: '30rem', lg: '50rem' }}
                        transition="all 0.2s"
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
              opacity={isLoading ? 0.4 : 1}
              src={getSelectedContentImageUrl()}
              onLoad={() => setIsLoading(false)}
              width={{ md: '30rem', lg: '50rem' }}
              transition="all 0.2s"
              rounded="lg"
            />
          </Stack>
        </Stack>
      </Stack>
    </RootLayout>
  );
}
