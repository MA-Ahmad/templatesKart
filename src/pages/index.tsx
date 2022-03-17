import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import { useLinkColor } from 'components/theme';
import UnderlinedText from 'components/shared/underlined-text';
import { projects } from 'data/projects';
import Card from 'components/home/Card';
import { SEO } from 'components/SEO';

export default function Index() {
  const linkColor = useLinkColor();

  return (
    <RootLayout>
      <SEO />
      <Box textAlign="center">
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} mb={5}>
          <UnderlinedText color={linkColor}>TemplatesKart</UnderlinedText>
        </Heading>
        <Text fontSize="lg" fontWeight="semibold" mt={2}>
          Beautiful and responsive React components to build your application
        </Text>
        <Text fontSize="lg" fontWeight="semibold" mt={2}>
          Copy code from live websites
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={12} mb={4}>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </SimpleGrid>
    </RootLayout>
  );
}
