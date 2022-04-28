import { SimpleGrid, Stack } from '@chakra-ui/react';
import AppLayout from 'components/layouts/appLayout';
import { projects } from 'data/projects';
import Card from 'components/HomePagesSections/projects/Card';
import { SEO } from 'components/SEO';
import HeroSection from 'components/HomePagesSections/hero-section';
import Header from 'components/HomePagesSections/header';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';

const heroSectionData = {
  heading: 'ProjectsKart',
  subHeading:
    'Projectskart provide an easy solution to getting the look you want for your website without having to mess around with too much code',
  label: '100% Open Source',
  heroImage: '/assets/images/layouts/pkart.png'
};

export default function Index() {
  return (
    <AppLayout>
      <SEO />
      <PageLayout>
        <PageSlideFade>
          <HeroSection {...heroSectionData} />
          <Stack my={20} spacing={12}>
            <Header textAlign="center">Projects</Header>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={12} mb={4}>
              {projects.map((project, index) => (
                <Card key={index} project={project} />
              ))}
            </SimpleGrid>
          </Stack>
        </PageSlideFade>
      </PageLayout>
    </AppLayout>
  );
}
