import React from 'react';
import {
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';

const articles = [
  {
    id: 1,
    tags: ['News', 'Product'],
    title: 'Build a Modern User Interface with Chakra UI',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    username: 'Danilo Leal',
    created_at: 'Wed Apr 06 2022'
  },
  {
    id: 2,
    tags: ['Web Development', 'Video'],
    title: 'The Complete Guide to Ruby on Rails Encrypted Credentials',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    userAvatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    username: 'Timo Delangle',
    created_at: 'Sun Apr 03 2022'
  }
];

const BlogCards = () => {
  return (
    <Container p={{ base: 5, md: 10 }}>
      <VStack spacing={8} w={{ base: 'auto', md: '2xl' }}>
        {articles.map((article, index) => (
          <Stack
            key={index}
            direction="column"
            spacing={4}
            p={4}
            bg={useColorModeValue('gray.100', 'gray.800')}
            border="1px solid"
            borderColor="blue.100"
            _hover={{
              borderColor: 'blue.300',
              boxShadow: useColorModeValue(
                '0 4px 6px rgba(160, 174, 192, 0.6)',
                '0 4px 6px rgba(9, 17, 28, 0.9)'
              )
            }}
            rounded="lg"
          >
            <HStack spacing={2} mb={1}>
              {article.tags.map((cat, index) => (
                <Tag
                  key={index}
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
              <Avatar size="sm" title="Author" mb={2} src={article.userAvatar} />
              <Stack justifyContent="space-between" direction={{ base: 'column', sm: 'row' }}>
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    {article.username}
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
        ))}
      </VStack>
    </Container>
  );
};

export default BlogCards;
