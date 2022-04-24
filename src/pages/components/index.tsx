import { chakra, SimpleGrid, Stack } from '@chakra-ui/react';
import RootLayout from 'components/layouts/rootLayout';
import Card from 'components/layouts/components-preview/card';
import { components } from 'data/components';
import { SEO_TITLE } from 'data/constants';
import { SEO } from 'components/SEO';
import { useLinkColor } from 'components/theme';
import HeroSection from 'components/shared/hero-section';

const heroSectionData = {
  heading: 'ComponentsKart',
  subHeading:
    '40+ Beautiful and responsive React components help you to build your application faster and to focus more on your business logic',
  label: 'Focus more on your business logic',
  heroImage: '/assets/images/layouts/ckart.png'
};

export default function Index() {
  const linkColor = useLinkColor();
  const seoTitle = `Components - ${SEO_TITLE}`;

  return (
    <RootLayout>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />
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
          Components
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={30} mt={12} mb={4} px={10}>
          {components.map((component, index) => (
            <Card key={index} component={component} />
          ))}
        </SimpleGrid>
      </Stack>
    </RootLayout>
  );
}
