import React from 'react';
import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Link,
  Text,
  Icon,
  Tag,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineVideoCamera } from 'react-icons/ai';

const articles = [
  {
    id: 1,
    categories: ['Web Development', 'Video'],
    tag: 'RUBY ON RAILS',
    title: 'Passwordless login with Rails 7',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    created_at: 'MARCH 30, 2022'
  },
  {
    id: 2,
    categories: ['Web Development', 'Video'],
    tag: 'RUBY ON RAILS',
    title: 'The Complete Guide to Ruby on Rails Encrypted Credentials',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    created_at: 'MARCH 30, 2022'
  }
];

const BlogCards = () => {
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <VStack spacing={8} w={{ base: 'auto', md: '2xl' }} margin="0 auto">
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </VStack>
    </Container>
  );
};

interface CardProps {
  title: string;
  content: string;
  tag: string;
  categories: string[];
  created_at: string;
}

const Card = ({ title, content, tag, categories, created_at }: CardProps) => {
  return (
    <Box
      p={{ base: 3, sm: 8 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      boxShadow={useColorModeValue(
        '0 4px 6px rgba(160, 174, 192, 0.6)',
        '0 4px 6px rgba(9, 17, 28, 0.9)'
      )}
      rounded="lg"
      pos="relative"
    >
      <Box
        pos="absolute"
        d={{ base: 'none', sm: 'block' }}
        right={2}
        top={2}
        rounded="3xl"
        as={Link}
        bg="red.500"
        size="md"
        color="white"
        p={1}
        px={3}
        _hover={{ color: 'white' }}
      >
        <Text fontSize={{ base: 'xs', sm: '12px' }} fontWeight="700">
          {tag}
        </Text>
      </Box>
      <HStack spacing={2} mb={1}>
        {categories.map((cat) => (
          <Text fontSize="sm" key={cat}>
            {cat}
          </Text>
        ))}
      </HStack>
      <VStack spacing={0} mb={5} textAlign="left">
        <chakra.h1
          as={Link}
          _hover={{ color: 'blue.400' }}
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
        >
          {title}
        </chakra.h1>
        <Text fontSize="md" noOfLines={2}>
          {content}
        </Text>
      </VStack>
      <HStack justifyContent="space-between">
        <Text fontSize="sm">{created_at}</Text>
        <HStack spacing={2} alignItems="center">
          <Icon as={AiOutlineVideoCamera} w={5} h={5} />
          <Tag
            as={Link}
            color={useColorModeValue('black', 'white')}
            colorScheme={useColorModeValue('blackAlpha', 'whiteAlpha')}
          >
            Save
          </Tag>
        </HStack>
      </HStack>
    </Box>
  );
};

export default BlogCards;
