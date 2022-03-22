import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import { useLinkColor } from 'components/theme';
import HeadingSection from 'components/shared/heading-section';
import Card from 'components/layouts/components-preview/card';
import { components } from 'data/components';
import { SEO_TITLE } from 'data/constants';
import { SEO } from 'components/SEO';

export default function Index() {
  const linkColor = useLinkColor();
  const seoTitle = `Components - ${SEO_TITLE}`;

  return (
    <RootLayout>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />
      <HeadingSection title="Components" />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={30} mt={12} mb={4} px={10}>
        {components.map((component, index) => (
          <Card key={index} component={component} />
        ))}
      </SimpleGrid>
    </RootLayout>
  );
}
