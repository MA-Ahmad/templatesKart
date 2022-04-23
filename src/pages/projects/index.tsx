import { SimpleGrid, chakra, Stack } from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import { projects } from 'data/projects';
import Card from 'components/home/Card';
import { SEO } from 'components/SEO';
import { useLinkColor } from 'components/theme';
import HeroSection from 'components/shared/hero-section';

const heroSectionData = {
  heading: 'ProjectsKart',
  subHeading:
    'Projectskart provide an easy solution to getting the look you want for your website without having to mess around with too much code',
  label: '100% Open Source',
  heroImage: '/assets/images/layouts/pkart.png'
};

export default function Index() {
  const linkColor = useLinkColor();

  return (
    <RootLayout>
      <SEO />
      <HeroSection {...heroSectionData} />
      <Stack my={20} spacing={12}>
        <chakra.h1
          fontSize="5xl"
          textAlign="center"
          color={linkColor}
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
        >
          Projects
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={12} mb={4}>
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </RootLayout>
  );
}
