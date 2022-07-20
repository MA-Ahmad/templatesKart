import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Stack, Heading, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { ResizableContainer } from 'components/ResizeSections/projects-preview/ResizableContainer';
import { projects } from 'data/projects';
import ProjectLayout from 'components/layouts/projects-preview/projectLayout';
import { Project, Page, Component } from 'data/projects/types';
import { useLinkColor } from 'components/theme';
import ScrollToTop from 'components/shared/scrollToTop';
import { BiLinkExternal } from 'react-icons/bi';
import { SEO_TITLE } from 'data/constants';
import { SEO } from 'components/SEO';
import fs from 'fs';
import path from 'path';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import SettingsDrawerWrapper from 'components/settings/SettingsDrawer';

type PageProps = {
  project: Project;
  page: Page;
  components?: Component[];
  componentsFileList: { componentName: string; files: string[] }[];
};

const Templates: NextPage<PageProps> = ({ project, page, components, componentsFileList }) => {
  const linkColor = useLinkColor();

  const externalUrl = () => {
    let url = '';
    if (page && page.name !== 'Home') {
      url = `${project.liveLink}/${page.id}`;
    } else {
      url = project.liveLink;
    }

    return url;
  };

  const seoTitle = `${project.name}(${project.techStack.join(', ')}) - ${SEO_TITLE}`;

  return (
    <ProjectLayout>
      <SEO title={seoTitle} ogTitle={seoTitle} twitterTitle={seoTitle} />
      <PageLayout>
        <PageSlideFade>
          <Stack mb={5}>
            <Link
              fontWeight="semibold"
              href={externalUrl()}
              _hover={{ color: linkColor }}
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Heading size={'xl'}>{page ? page.name : project.name}</Heading>
                <Icon as={BiLinkExternal} w={6} h={6} position="relative" top="0.125em" />
              </HStack>
            </Link>
            {page?.description ? <Text color={'gray.600'}>{page.description}</Text> : null}
          </Stack>

          <Stack spacing={12}>
            {components?.length ? (
              components?.map((component) => (
                <ResizableContainer
                  key={component.filename}
                  component={component}
                  project={project}
                  page={page}
                  componentsFileList={componentsFileList}
                />
              ))
            ) : (
              <ResizableContainer project={project} page={page} componentsFileList={[]} />
            )}
          </Stack>
          <ScrollToTop />
          <SettingsDrawerWrapper />
        </PageSlideFade>
      </PageLayout>
    </ProjectLayout>
  );
};

const getComponentsFileList = (
  projectId: string,
  pageData: Page | null,
  components: Component[] | undefined
) => {
  let componentsFileList: { componentName: string; files: string[] }[] = [];

  if (pageData && components!.length) {
    components!.map((component) => {
      let file_path = path.join(process.cwd(), 'src', 'preview', 'projects', projectId);
      const directoryPath = path.join(file_path, 'pages', pageData.id, component.filename);
      if (fs.existsSync(directoryPath)) {
        const files = fs.readdirSync(directoryPath);
        let obj = { componentName: component.filename, files: files };
        componentsFileList.push(obj);
      }
    });
  }

  return componentsFileList;
};

export const getStaticProps: GetStaticProps<PageProps, { slug: string[] }> = async ({ params }) => {
  const project = params!.slug[0];
  const page = params!.slug[2] || params!.slug[1];

  const projectData = projects.filter((p) => p.id === project)[0];
  const pageData = page ? projectData.pages.filter((p) => p.id === page)[0] : null;
  const components = pageData ? pageData.components : [];

  return {
    props: {
      project: JSON.parse(JSON.stringify(projectData)),
      page: JSON.parse(JSON.stringify(pageData)),
      componentsFileList: getComponentsFileList(projectData.id, pageData, components),
      components: components
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects
    .map((project) =>
      project
        .pages!.map((page) => ({
          params: {
            slug: [project.id, 'pages', page.id]
          }
        }))
        .flat()
    )
    .flat();
  const project_paths = projects.map((project) => ({
    params: {
      slug: [project.id]
    }
  }));

  return {
    paths: [...paths, ...project_paths],
    fallback: false
  };
};

export default Templates;
