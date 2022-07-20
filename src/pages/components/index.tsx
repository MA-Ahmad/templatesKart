import * as React from 'react';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import AppLayout from 'components/layouts/appLayout';
import SCard from 'components/layouts/components-preview/SmallCard';
import LCard from 'components/layouts/components-preview/LargeCard';
import { components } from 'data/components';
import { SEO_TITLE } from 'data/constants';
import { SEO } from 'components/SEO';
import HeroSection from 'components/HomePagesSections/hero-section';
import Header from 'components/HomePagesSections/header';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import ToggleView from 'components/layouts/components-preview/toggleView';
import SettingsDrawerWrapper from 'components/settings/SettingsDrawer';

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
            <ToggleView viewTypeId={viewTypeId} setViewTypeId={setViewTypeId} />
            <SimpleGrid
              columns={
                viewTypeId === 1 ? { base: 1, sm: 2, md: 3, lg: 4 } : { base: 1, md: 2, lg: 3 }
              }
              spacing={30}
              mt={12}
              mb={4}
              px={{ base: 0, sm: 10 }}
            >
              {components.map((component, index) =>
                viewTypeId === 1 ? (
                  <LCard key={index} component={component} />
                ) : (
                  <SCard key={index} component={component} />
                )
              )}
            </SimpleGrid>
          </Stack>
          <SettingsDrawerWrapper />
        </PageSlideFade>
      </PageLayout>
    </AppLayout>
  );
}
