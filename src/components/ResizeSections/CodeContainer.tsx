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
import { SiTypescript, SiReact, SiJavascript } from 'react-icons/si';
import { IconType } from 'react-icons';

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
        if (['index.ts', 'index.tsx', 'index.js', 'index.jsx'].includes(a)) return -1;

        return 1;
      });
  };

  const getFileIconColor = (name: string) => {
    let icon_color: { icon: IconType; color: string };
    if (name.endsWith('.ts') || name.endsWith('.js')) {
      icon_color = name.endsWith('.ts')
        ? { icon: SiTypescript, color: 'blue.600' }
        : { icon: SiJavascript, color: 'yellow.400' };
    } else {
      icon_color = { icon: SiReact, color: 'blue.600' };
      if (name.endsWith('.js')) icon_color['color'] = 'blue.300';
    }
    return icon_color;
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
                      as={getFileIconColor(name).icon}
                      w={4}
                      h={4}
                      color={getFileIconColor(name).color}
                      bg={name.endsWith('.js') ? 'black' : 'auto'}
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
