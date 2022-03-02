import React from 'react';
import {
  Box,
  Text,
  HStack,
  Stack,
  Tabs,
  TabList,
  Heading,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { Project, Page, Component } from 'data/types';
import { CodeSample } from './CodeSample';
import { SiTypescript, SiReact } from 'react-icons/si';

type ResizableContainerProps = {
  project: Project;
  component?: Component;
  page?: Page;
  componentsFileList: { componentName: string; files: string[] }[];
};

export const CodeContainer = ({
  component,
  project,
  page,
  componentsFileList
}: ResizableContainerProps) => {
  const filterFiles = (fileName: string) => {
    return componentsFileList
      .filter((fileObj) => fileObj.componentName === fileName)[0]
      ?.files.sort((a, b) => {
        if (['index.ts', 'index.tsx'].includes(a)) return -1;

        return 1;
      });
  };

  return (
    <>
      <Stack spacing={2}>
        <Heading size={'md'} ml={1}>
          {component?.name}
        </Heading>
        <Box
          borderRadius="lg"
          borderWidth={1}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          id={component?.filename || project.id}
          height={'full'}
          style={{
            scrollMarginTop: '2rem'
          }}
          overflow="hidden"
        >
          <Tabs variant="unstyled">
            <TabList p={'0.225rem'} bg={useColorModeValue('gray.200', 'gray.700')} border="none">
              {filterFiles(component.filename)?.map((name: string, index: number) => (
                <Tab
                  key={index}
                  _selected={{
                    color: useColorModeValue('black', 'white'),
                    bg: useColorModeValue('white', 'gray.900'),
                    borderRadius: 'sm',
                    boxShadow: 'md'
                  }}
                  px={2.5}
                  py={2}
                >
                  <HStack spacing={2}>
                    <Icon
                      as={name.endsWith('.ts') ? SiTypescript : SiReact}
                      w={4}
                      h={4}
                      color="blue.600"
                    />
                    <Text fontSize={'sm'} fontWeight="normal">
                      {name}
                    </Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {filterFiles(component.filename)?.map((name: string, index: number) => (
                <TabPanel key={index}>
                  <Box
                    w="full"
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    borderRadius="2xl"
                    overflow="hidden"
                  >
                    <CodeSample
                      project={project}
                      page={page}
                      component={component}
                      nestedComponentFile={name}
                    />
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </>
  );
};
