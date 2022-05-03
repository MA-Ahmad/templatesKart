import * as React from 'react';
import {
  Box,
  VStack,
  Heading,
  Flex,
  Text,
  Link,
  HStack,
  ListItem,
  useColorModeValue,
  ListIcon,
  Divider,
  List,
  Container
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiFillCheckCircle } from 'react-icons/ai';
import { GoIssueReopened } from 'react-icons/go';
import { Tag } from './Tag';

const prData = [
  {
    title: 'Add new blog post',
    body: 'I made changelog page for my portfolio website',
    labels: ['blog post 📋'],
    state: 'closed',
    created_at: '31st January 2022',
    merged_at: '2022-02-17 19:47:25.695537'
  },
  {
    title: 'Feature/create changelog page',
    body: 'test',
    labels: ['enhancement ✍️', 'feature 🚀'],
    state: 'open',
    created_at: '30th January 2022',
    merged_at: ''
  }
];

const PrList = () => {
  const textColor = useColorModeValue('gray.500', 'gray.200');

  return (
    <Container maxW="7xl" p="12">
      <List>
        {prData?.map((pr, index) => (
          <VStack key={index} spacing={4} align="left" mx={[0, 0, 6]} mt={8}>
            <ListItem>
              <Box align="left">
                <Heading fontSize="lg" align="left" mt={0} mb={1}>
                  {pr.state === 'closed' && pr.merged_at ? (
                    <ListIcon as={AiFillCheckCircle} color="green.500" />
                  ) : (
                    <ListIcon as={GoIssueReopened} color="gray.500" />
                  )}
                  <Text as={Link} color="blue.400" target="_blank">
                    {pr.title}
                  </Text>
                </Heading>
                <HStack spacing={2} isInline ml={[0, 0, 6]}>
                  <Text fontSize="sm" fontWeight="600" color={textColor}>
                    {pr.created_at}
                  </Text>
                  <HStack spacing={1} alignItems="center" d={['none', 'none', 'flex']}>
                    <Flex alignItems="center" flexWrap="wrap" m="-2px">
                      {pr.labels.map((label) => (
                        <Tag key={label} name={label} m="2px" padding="0 3px" size="sm" />
                      ))}
                    </Flex>
                  </HStack>
                </HStack>
                <Box ml={6} mt={2}>
                  {pr.body}
                </Box>
              </Box>
            </ListItem>
            {prData.length - 1 !== index && <Divider />}
          </VStack>
        ))}
      </List>
    </Container>
  );
};

export default PrList;
