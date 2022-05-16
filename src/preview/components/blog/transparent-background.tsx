import React from 'react';
import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Link,
  Text,
  Avatar,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';

const articles = [
  {
    id: 1,
    title: 'Rust Is The Future',
    content: `Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?`,
    userAvatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    username: 'Tobias',
    created_at: 'April 10, 2022'
  },
  {
    id: 2,
    title: 'Building with ChakraUI',
    content: `Learn how to create an image gallery with dynamic content from a PostgreSQL database, with support for content updates without needing to redeploy.`,
    userAvatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    username: 'Timo',
    created_at: 'April 1, 2022'
  }
];

const Articles = () => {
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 8 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

interface CardProps {
  title: string;
  content: string;
  userAvatar: string;
  username: string;
  created_at: string;
}

const Card = ({ title, content, username, userAvatar, created_at }: CardProps) => {
  return (
    <Box as={Link} p={4} _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }} rounded="md">
      <VStack spacing={2} mb={5} textAlign="left">
        <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
          {title}
        </chakra.h1>
        <Text fontSize="md" noOfLines={2} color="gray.500">
          {content}
        </Text>
      </VStack>
      <HStack spacing={2} alignItems="center">
        <Avatar size="md" title="Author" src={userAvatar} />
        <Box>
          <Text fontWeight="bold">{username}</Text>
          <Text fontSize="sm" color="gray.500">
            {created_at}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Articles;
