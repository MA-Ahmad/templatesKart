import * as React from 'react';
import {
  Icon,
  HStack,
  Text,
  Tabs,
  TabList,
  Tab,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';

const tabList = [
  {
    name: 'All',
    filterName: '',
    icon: AiTwotoneThunderbolt
  },
  {
    name: 'Web Development',
    filterName: 'development',
    icon: BiDesktop
  },
  {
    name: 'Web Design',
    filterName: 'design',
    icon: GiSpiderWeb
  },
  {
    name: 'Devops',
    filterName: 'devops',
    icon: AiOutlineCloudServer
  }
];

const SkillsList = () => {
  return (
    <Container maxW="7xl" p="0" pt={16} pb={16}>
      <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
        <TabList display="flex" flexWrap="wrap" p={4}>
          {tabList.map((tab, index) => (
            <Tab
              bg={useColorModeValue('gray.100', 'gray.800')}
              color={useColorModeValue('gray.600', 'gray.500')}
              _selected={{
                color: 'white',
                bg: 'teal'
              }}
              mr={2}
              mt={2}
              key={index}
            >
              <HStack spacing={1}>
                <Icon as={tab.icon} />
                <Text>{tab.name}</Text>
              </HStack>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default SkillsList;
