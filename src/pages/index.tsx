import React, { useState } from 'react';
import {
  Flex,
  Box,
  Image,
  Stack,
  HStack,
  Text,
  chakra,
  Icon,
  Divider,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import AppLayout from 'components/layouts/appLayout';
import { SEO } from 'components/SEO';
import { useLinkColor } from 'components/theme';
import { TiTick } from 'react-icons/ti';
import Header from 'components/HomePagesSections/header';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import HeroSection from 'components/HomePagesSections/landingPage/hero-section';
import ComponentsPreview from 'components/HomePagesSections/landingPage/components-preview';
import SettingsDrawerWrapper from 'components/settings/SettingsDrawer';

const features: string[] = [
  '6 Projects',
  '80+ Components',
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

  return (
    <AppLayout maxW="full" mb={4} px={0}>
      <SEO />
      <PageLayout>
        <PageSlideFade>
          <Box bg={useColorModeValue('#fff', 'rgb(20, 21, 23)')} pt={{ base: 16, md: 28 }}>
            <HeroSection />
          </Box>

          <Box overflow="hidden">
            <svg
              fill={useColorModeValue('#fff', 'rgb(20, 21, 23)')}
              width="150%"
              height="56px"
              transform="scaleX(-1)"
              filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
              ></path>
            </svg>
          </Box>

          <Box my={28}>
            <Header textAlign="center" mb={10}>
              Components Preview
            </Header>
            <ComponentsPreview />
          </Box>

          <Stack my={28} spacing={8} pb={14}>
            <Header textAlign="center" mb={5}>
              Key Features
            </Header>
            <Flex justifyContent="center" fontSize="2xl" fontWeight="600">
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

          <OverviewSection />
          <SettingsDrawerWrapper />
        </PageSlideFade>
      </PageLayout>
    </AppLayout>
  );
}

// Overview Section
const overviewData = [
  {
    id: 1,
    heading: 'Project Screen',
    content: 'Live project view with pages.',
    image: '/assets/images/layouts/project_screen.png'
  },
  {
    id: 2,
    heading: 'Project Components',
    content: 'See page components and copy code.',
    image: '/assets/images/layouts/project_components.png'
  },
  {
    id: 3,
    heading: 'Components Screen',
    content: 'Choose any component from 12+ categories and copy code by just one click.',
    image: '/assets/images/layouts/components_screen.png'
  }
];

const OverviewSection = () => {
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
    <Stack
      maxW="1280px"
      marginInline="auto"
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
      <Stack
        w="100%"
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        justifyContent="center"
      >
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
                  bgGradient: `linear(to-r, ${linkColor}, #1e4f7c)`,
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
                      alt={`${data.heading} Image`}
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
            alt="Project Image"
            onLoad={() => setIsLoading(false)}
            width={{ md: '30rem', lg: '50rem' }}
            transition="all 0.2s"
            rounded="lg"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
