import React, { Fragment } from 'react';
import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Divider,
  Avatar,
  AvatarGroup,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';

const articles = [
  {
    id: 1,
    tags: ['News'],
    title: 'Build a Modern User Interface with Chakra UI',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    usernames: 'Danilo, Sam, Olivier, and more.',
    created_at: 'Wed Apr 06 2022'
  },
  {
    id: 2,
    tags: ['Web Development', 'Video'],
    title: 'The Complete Guide to Ruby on Rails Encrypted Credentials',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    userAvatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    usernames: 'Timo Delangle, Olivier, and more.',
    created_at: 'Sun Apr 03 2022'
  }
];

const Posts = () => {
  return (
    <Container p={{ base: 5, md: 10 }}>
      <chakra.h1 p={4} mb={5} fontSize="3xl" lineHeight={1.2} fontWeight="bold" w="100%">
        Posts
      </chakra.h1>
      <VStack spacing={8} w={{ base: 'auto', md: '2xl' }}>
        {articles.map((article, index) => (
          <Fragment key={index}>
            <Stack direction="column" spacing={4} p={4}>
              <HStack spacing={2} mb={1}>
                {article.tags.map((cat) => (
                  <Tag
                    key={cat}
                    colorScheme={useColorModeValue('blackAlpha', 'gray')}
                    borderRadius="full"
                  >
                    {cat}
                  </Tag>
                ))}
              </HStack>
              <Box textAlign="left">
                <Link
                  fontSize="xl"
                  lineHeight={1.2}
                  fontWeight="bold"
                  w="100%"
                  _hover={{ color: 'blue.400', textDecoration: 'underline' }}
                >
                  {article.title}
                </Link>
                <Text fontSize="md" color="gray.500" noOfLines={2} lineHeight="normal">
                  {article.content}
                </Text>
              </Box>
              <Box>
                <AvatarGroup size="sm" max={3} mb={1}>
                  <Avatar name="Ryan Florence" src={article.userAvatar} />
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                </AvatarGroup>
                <Stack justifyContent="space-between" direction={{ base: 'column', sm: 'row' }}>
                  <Box>
                    <Text fontSize="sm" fontWeight="bold">
                      {article.usernames}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {article.created_at}
                    </Text>
                  </Box>
                  <HStack
                    as={Link}
                    spacing={1}
                    p={1}
                    alignItems="center"
                    height="2rem"
                    w="max-content"
                    margin="auto 0"
                    rounded="md"
                    color="blue.400"
                    _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
                  >
                    <Text fontSize="sm"> Read more</Text>
                    <Icon as={GoChevronRight} w={4} h={4} />
                  </HStack>
                </Stack>
              </Box>
            </Stack>
            {articles.length - 1 !== index && <Divider />}
          </Fragment>
        ))}
      </VStack>
    </Container>
  );
};

export default Posts;
