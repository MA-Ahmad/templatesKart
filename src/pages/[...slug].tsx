import { ReactNode } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Stack, Heading, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { ResizableContainer } from 'components/ResizeSections/ResizableContainer';
import { projects } from 'data/projects';
import AppLayout from 'components/layouts/appLayout';
import { Project, Page, Component } from 'data/types';
import { useLinkColor } from 'components/theme';
import ScrollToTop from 'components/shared/scrollToTop';
import { BiLinkExternal } from 'react-icons/bi';
import fs from 'fs';
import path from 'path';
import { CodeContainer } from 'components/ResizeSections/CodeContainer';

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

    if (components && components[0].page_id === 'theme') {
      url = components[0].codeLink || '';
    }
    return url;
  };

  return (
    <AppLayout>
      <Stack mb={5}>
        <Link fontWeight="semibold" href={externalUrl()} _hover={{ color: linkColor }} isExternal>
          <HStack spacing={2} alignItems="center">
            <Heading size={'xl'}>{page ? page.name : project.name}</Heading>
            <Icon as={BiLinkExternal} w={6} h={6} position="relative" top="0.125em" />
          </HStack>
        </Link>
        {page?.description ? <Text color={'gray.600'}>{page.description}</Text> : null}
      </Stack>

      <Stack spacing={12}>
        {components?.length ? (
          components?.map((component) =>
            component.page_id === 'theme' ? (
              <CodeContainer
                key={component.filename}
                component={component}
                project={project}
                page={page}
                componentsFileList={componentsFileList}
              />
            ) : (
              <ResizableContainer
                key={component.filename}
                component={component}
                project={project}
                page={page}
                componentsFileList={componentsFileList}
              />
            )
          )
        ) : (
          <ResizableContainer project={project} page={page} componentsFileList={[]} />
        )}
      </Stack>
      <ScrollToTop />
    </AppLayout>
  );
};

const getComponentsFileList = (
  projectId: string,
  pageData: Page | null,
  components: Component[] | null | undefined
) => {
  let componentsFileList: { componentName: string; files: string[] }[] = [];

  if (pageData && components) {
    components.map((component) => {
      let file_path = path.join(process.cwd(), 'src', 'pages', 'preview', 'projects', projectId);
      const directoryPath =
        component.page_id === 'theme'
          ? path.join(file_path, component.filename)
          : path.join(file_path, 'pages', pageData.id, component.filename);
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
  const project = params!.slug[1];
  const page = params!.slug[3] || params!.slug[2];

  const projectData = projects.filter((p) => p.id === project)[0];
  const pageData = page ? projectData.pages.filter((p) => p.id === page)[0] : null;
  const components = pageData ? pageData.components : null;

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
  // TODO get rid of ! operator and make more failsafe
  const paths = projects
    .map((project) =>
      project
        .pages!.map((page) => ({
          params: {
            slug:
              page.id === 'theme'
                ? ['projects', project.id, page.id]
                : ['projects', project.id, 'pages', page.id]
          }
        }))
        .flat()
    )
    .flat();
  const project_paths = projects.map((project) => ({
    params: {
      slug: ['projects', project.id]
    }
  }));
  return {
    paths: [...paths, ...project_paths],
    fallback: false
  };
};

export default Templates;
