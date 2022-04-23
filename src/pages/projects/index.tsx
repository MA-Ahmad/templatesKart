import { SimpleGrid } from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import HeadingSection from 'components/shared/heading-section';
import { projects } from 'data/projects';
import Card from 'components/home/Card';
import { SEO } from 'components/SEO';

export default function Index() {
  return (
    <RootLayout>
      <SEO />
      <HeadingSection title="Projects" />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={12} mb={4}>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </SimpleGrid>
    </RootLayout>
  );
}
