import * as React from 'react';
import { SimpleGrid, Stack, Flex, Tooltip, useColorModeValue } from '@chakra-ui/react';
import AppLayout from 'components/layouts/appLayout';
import HCard from 'components/layouts/components-preview/HorizontalCard';
import VCard from 'components/layouts/components-preview/VerticalCard';
import { components } from 'data/components';
import { SEO_TITLE } from 'data/constants';
import { SEO } from 'components/SEO';
import HeroSection from 'components/HomePagesSections/hero-section';
import Header from 'components/HomePagesSections/header';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import { useLinkColor } from 'preview/projects/my-website/pages/theme';

const heroSectionData = {
  heading: 'ComponentsKart',
  content:
    '80+ Beautiful and responsive React components help you to build your application faster and to focus more on your business logic.',
  label: 'Focus more on your business logic',
  heroImage: '/assets/images/layouts/ckart.png'
};

export default function Index() {
  const [viewTypeId, setViewTypeId] = React.useState(1);
  const seoTitle = `Components - ${SEO_TITLE}`;

  return (
    <AppLayout maxW="1280px" mt="32" py={2} mb={4}>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />
      <PageLayout>
        <PageSlideFade>
          <HeroSection {...heroSectionData} />
          <Stack my={20} spacing={12}>
            <Header textAlign="center">Components</Header>
            <Stack px={10} direction="row" w="100%" justifyContent="flex-end">
              <Tooltip hasArrow label="Large cards" placement="top">
                <Flex
                  p={3}
                  alignItems="center"
                  bg={viewTypeId === 1 ? '#3985d0' : useColorModeValue('#a0aebf', '#4a5567')}
                  lineHeight={1}
                  rounded="md"
                  onClick={() => setViewTypeId(1)}
                  cursor="pointer"
                >
                  <VerticalIcon view={viewTypeId} />
                </Flex>
              </Tooltip>
              <Tooltip hasArrow label="Small cards" placement="top">
                <Flex
                  p={3}
                  alignItems="center"
                  bg={viewTypeId === 2 ? '#3985d0' : useColorModeValue('#a0aebf', '#4a5567')}
                  lineHeight={1}
                  rounded="md"
                  onClick={() => setViewTypeId(2)}
                  cursor="pointer"
                >
                  <HorizontalIcon view={viewTypeId} />
                </Flex>
              </Tooltip>
            </Stack>

            <SimpleGrid
              columns={
                viewTypeId === 1 ? { base: 1, sm: 2, md: 3, lg: 4 } : { base: 1, md: 2, lg: 3 }
              }
              spacing={30}
              mt={12}
              mb={4}
              px={10}
            >
              {components.map((component, index) =>
                viewTypeId === 1 ? (
                  <VCard key={index} component={component} />
                ) : (
                  <HCard key={index} component={component} />
                )
              )}
            </SimpleGrid>
          </Stack>
        </PageSlideFade>
      </PageLayout>
    </AppLayout>
  );
}

const VerticalIcon = ({ view }) => {
  return (
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        width="24"
        height="21"
        rx="2"
        fill={view === 1 ? '#3985d0' : useColorModeValue('#a0aebf', '#4a5567')}
      />
      <rect x="3" y="3" width="18" height="10" fill="#ffffff" />
      <path d="M3 16H19" stroke="#ffffff" stroke-width="2" />
      <path d="M3 19.5H15" stroke="#ffffff" />
    </svg>
  );
};

const HorizontalIcon = ({ view }) => {
  return (
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 0H2C0.89543 0 0 0.89543 0 2V19C0 20.1046 0.89543 21 2 21H22C23.1046 21 24 20.1046 24 19V2C24 0.89543 23.1046 0 22 0Z"
        fill={view === 2 ? '#3985d0' : useColorModeValue('#a0aebf', '#4a5567')}
      />
      <rect x="2" y="6" width="12" height="10" fill="#ffffff" />
      <line x1="15.5" y1="8" x2="23.5" y2="8" stroke="#ffffff" stroke-width="2" />
      <line x1="16" y1="13.5" x2="22" y2="13.5" stroke="#ffffff" />
    </svg>
  );
};
