import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Stack, Heading, HStack } from '@chakra-ui/react';
import { ResizableContainer } from 'components/ResizeSections/components-preview/ResizableContainer';
import { components } from 'data/components';
import ComponentLayout from 'components/layouts/components-preview/componentLayout';
import { Component, ComponentContainer } from 'data/components/types';
import { useLinkColor } from 'components/theme';
import ScrollToTop from 'components/shared/scrollToTop';
import { sortFilesByIndexName } from 'utils';
import { SEO_TITLE } from 'data/constants';
import { SEO } from 'components/SEO';
import fs from 'fs';
import path from 'path';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import SettingsDrawerWrapper from 'components/settings/SettingsDrawer';

type PageProps = {
  component: ComponentContainer;
  componentData: { id: string; filename: string; files: string[] }[];
};

const Page: NextPage<PageProps> = ({ component, componentData }) => {
  const linkColor = useLinkColor();

  const seoTitle = `${component.name} - ${SEO_TITLE}`;

  return (
    <ComponentLayout>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />
      <PageLayout>
        <PageSlideFade>
          <Stack mb={5}>
            <HStack
              spacing={2}
              alignItems="center"
              fontWeight="semibold"
              _hover={{ color: linkColor }}
            >
              <Heading size={'xl'}>{component.name}</Heading>
            </HStack>
          </Stack>

          <Stack spacing={12}>
            {component.data.map((c) => (
              <ResizableContainer key={c.filename} component={c} componentData={componentData} />
            ))}
          </Stack>
          <ScrollToTop />
          <SettingsDrawerWrapper />
        </PageSlideFade>
      </PageLayout>
    </ComponentLayout>
  );
};

const getComponentData = (id: string, components: Component[]) => {
  let componentData: { id: string; filename: string; files: string[] }[] = [];

  if (id) {
    components.map((component) => {
      const directoryPath = path.join(
        process.cwd(),
        'src',
        'preview',
        'components',
        id,
        component.filename
      );

      if (fs.existsSync(directoryPath)) {
        const files = fs.readdirSync(directoryPath);

        let obj = {
          id: component.id,
          filename: component.filename,
          files: sortFilesByIndexName(files)
        };
        componentData.push(obj);
      }
    });
  }

  return componentData;
};

export const getStaticProps: GetStaticProps<PageProps, { slug: string[] }> = async ({ params }) => {
  const component = components.filter((c) => c.id === params!.slug[0])[0];

  return {
    props: {
      component: JSON.parse(JSON.stringify(component)),
      componentData: getComponentData(component.id, component.data)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = components.map((component) => ({
    params: {
      slug: [component.id]
    }
  }));

  return {
    paths: [...paths],
    fallback: false
  };
};

export default Page;
