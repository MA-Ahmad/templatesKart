import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import { useLinkColor } from 'components/theme';
import UnderlinedText from 'components/shared/underlined-text';
import { projects } from 'data/projects';
import Card from 'components/home/Card';

export default function Index() {
  const linkColor = useLinkColor();

  return (
    <RootLayout>
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
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6} mb={4}>
        {projects.map((project, index) => (
          <Card key={index} project={project} color={linkColor} />
        ))}
      </SimpleGrid>
    </RootLayout>
  );
}
