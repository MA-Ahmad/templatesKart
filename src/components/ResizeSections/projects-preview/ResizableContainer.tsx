import React, { useState } from 'react';
import {
  Box,
  Text,
  HStack,
  Stack,
  IconButton,
  Tabs,
  TabList,
  Heading,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Center,
  useRadioGroup,
  useBreakpointValue,
  Icon,
  Divider
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import { AiOutlineMobile, AiOutlineTablet } from 'react-icons/ai';
import { IoIosDesktop } from 'react-icons/io';
import { ResizableFrame } from 'components/ResizeSections/projects-preview/ResizableFrame';
import { Project, Page, Component } from 'data/projects/types';
import RadioCard from '../RadioCard';
import { getProjectFileUrl } from 'utils';
import { CodeSample } from './CodeSample';
import { SiTypescript, SiReact } from 'react-icons/si';

type ResizableContainerProps = {
  project: Project;
  component?: Component;
  page?: Page;
  componentsFileList: { componentName: string; files: string[] }[];
};

const TABS = [
  { label: 'Preview', icon: AiFillEye },
  { label: 'Code', icon: HiCode }
];

export const ResizableContainer = ({
  component,
  project,
  page,
  componentsFileList
}: ResizableContainerProps) => {
  const IsNotSmartPhoneWidth = useBreakpointValue<boolean>([false, true]);
  const [viewWidth, setviewWidth] = useState('full');
  const [tabIndex, setTabIndex] = React.useState(0);

  const filterFiles = (fileName: string) => {
    return componentsFileList
      .filter((fileObj) => fileObj.componentName === fileName)[0]
      ?.files.sort((a, b) => {
        if (['index.ts', 'index.tsx', 'index.js', 'index.jsx'].includes(a)) return -1;

        return 1;
      });
  };

  const options = [
    {
      label: 'Mobile',
      type: 'preview',
      width: '380px',
      icon: AiOutlineMobile
    },
    {
      label: 'Tablet',
      type: 'preview',
      width: '600px',
      icon: AiOutlineTablet
    },
    {
      label: 'Desktop',
      type: 'preview',
      width: 'full',
      icon: IoIosDesktop
    }
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'displaySize',
    defaultValue: options[2].width,
    onChange: setviewWidth
  });

  return (
    <>
      <Stack spacing={2}>
        <Heading size={'md'} ml={1}>
          {component?.name}
        </Heading>
        <Box
          borderRadius="2xl"
          borderWidth={1}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          id={component?.filename || project.id}
          height={'full'}
          style={{
            scrollMarginTop: '2rem'
          }}
        >
          <Tabs
            overflow="hidden"
            position="relative"
            borderRadius="md"
            border="none"
            w="100%"
            onChange={(index) => {
              setTabIndex(index);
            }}
          >
            <HStack justifyContent={'space-between'} w="100%" p={3}>
              {page ? (
                <TabList
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius="md"
                  p={1}
                  bg={useColorModeValue('gray.200', 'gray.700')}
                  color={useColorModeValue('blackAlpha.500', 'whiteAlpha.600')}
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                >
                  {TABS.map((tab, index) => (
                    <Tab
                      key={tab.label}
                      id={tab.label}
                      aria-controls={tab.label}
                      _selected={{
                        bg: useColorModeValue('white', 'whiteAlpha.300'),
                        color: useColorModeValue('black', 'white'),
                        borderRadius: 'md',
                        boxShadow: 'md'
                      }}
                      py={2}
                      px={4}
                      borderBottom="none"
                    >
                      <HStack spacing={1}>
                        <Icon as={tab.icon} w={6} h={6} />
                        <Text fontSize={'sm'}>{tab.label}</Text>
                      </HStack>
                    </Tab>
                  ))}
                </TabList>
              ) : (
                <Box></Box>
              )}
              <HStack>
                {tabIndex === 0 && (
                  <Box
                    d={['none', 'none', 'flex']}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius="md"
                    p={1}
                    bg={useColorModeValue('gray.200', 'gray.700')}
                    color={useColorModeValue('blackAlpha.500', 'whiteAlpha.600')}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                  >
                    <HStack>
                      {options.map((value) => {
                        const label = value.width;
                        const radio = getRadioProps({ value: label });
                        return (
                          <RadioCard key={value.label} {...radio}>
                            <HStack spacing={1}>
                              <Icon as={value.icon} w={6} h={6} />
                              <Text fontSize={'sm'}>{value.label}</Text>
                            </HStack>
                          </RadioCard>
                        );
                      })}
                    </HStack>
                  </Box>
                )}
                <Link
                  href={
                    page && component
                      ? getProjectFileUrl(project.id, page.id, component.filename)
                      : project.liveLink
                  }
                  passHref
                >
                  <IconButton
                    as={'a'}
                    cursor={'pointer'}
                    icon={<BiLinkExternal />}
                    size={'lg'}
                    borderRadius="md"
                    variant="outline"
                    aria-label={'Open in Fullscreen'}
                    title={'Open in Fullscreen'}
                    target="_blank"
                  />
                </Link>
              </HStack>
            </HStack>
            <Divider color={useColorModeValue('gray.200', 'gray.700')} />

            <TabPanels>
              <TabPanel p={0}>
                <Center
                  w="full"
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  borderBottomLeftRadius="2xl"
                  borderBottomRightRadius="2xl"
                  overflow="hidden"
                >
                  <Box w={{ base: 'auto', md: viewWidth }} bg={'transparent'}>
                    <ResizableFrame project={project} page={page} component={component} />
                  </Box>
                </Center>
              </TabPanel>
              {page && component && componentsFileList && filterFiles(component.filename) ? (
                <TabPanel p="0">
                  <Tabs variant="unstyled">
                    <Box
                      alignItems={'center'}
                      p={'0.225rem'}
                      bg={useColorModeValue('gray.200', 'gray.700')}
                      color={useColorModeValue('blackAlpha.500', 'whiteAlpha.600')}
                      borderColor={useColorModeValue('gray.200', 'gray.700')}
                    >
                      <TabList>
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
                    </Box>
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
                </TabPanel>
              ) : (
                <TabPanel>
                  <Box
                    w="full"
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    borderRadius="2xl"
                    overflow="hidden"
                  >
                    <CodeSample project={project} page={page} component={component} />
                  </Box>
                </TabPanel>
              )}
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </>
  );
};
