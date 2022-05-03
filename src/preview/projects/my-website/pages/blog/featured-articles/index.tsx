import React from 'react';
import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Container
} from '@chakra-ui/react';
import { CommentIcon, HeartIcon } from './icons';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

const BASE_URL = 'https://mahmad.me';

const posts = [
  {
    title: 'Create professional portfolio website with Nextjs and ChakraUI',
    description: `Currently, I'm learning Nextjs and Typescript. And for learning perspective I decided to rebuilt my...`,
    slug: '/blog/create-professional-portfolio-website-with-nextjs-and-chakraui-4lkn',
    positive_reactions_count: '352',
    comments_count: '26',
    published_at: '20th June 2021'
  },
  {
    title: 'Started 2022 by updating portfolio website',
    description: `I was thinking about making some changes in my portfolio website since past few months. I couldn't...`,
    slug: '/blog/started-2022-by-updating-portfolio-website-1jde-temp-slug-4553258',
    positive_reactions_count: '189',
    comments_count: '26',
    published_at: '21st January 2021'
  }
];

const FeaturedArticles = () => {
  const textColor = useColorModeValue('gray.500', 'gray.200');

  return (
    <Container maxW="7xl" p="12">
      <VStack align="start" spacing={8} width="100%">
        <SimpleGrid columns={1} spacing={4} w="100%">
          {posts &&
            posts.map(
              (
                {
                  description,
                  title,
                  slug,
                  positive_reactions_count,
                  comments_count,
                  published_at
                },
                i
              ) => (
                <motion.div whileHover={{ y: -5 }} key={i}>
                  <VStack
                    spacing={1}
                    p={4}
                    _hover={{ shadow: 'md', textDecoration: 'none' }}
                    borderWidth="1px"
                    position="relative"
                    rounded="md"
                    bg={useColorModeValue('white', 'gray.800')}
                    align="left"
                  >
                    <HStack justifyContent="space-between" isInline>
                      <Heading fontSize="lg" align="left" mt={0}>
                        <Text as={Link} href="#" color="blue.400">
                          {title}
                        </Text>
                      </Heading>
                      <HStack spacing={2} isInline d={['none', 'flex', 'flex']}>
                        <Flex alignItems="center">
                          <Text
                            fontSize="sm"
                            noOfLines={1}
                            fontWeight="400"
                            align="left"
                            color={textColor}
                          >
                            {positive_reactions_count}
                          </Text>
                          &nbsp;
                          <HeartIcon />
                        </Flex>

                        <Flex alignItems="center">
                          <Text
                            fontSize="sm"
                            noOfLines={1}
                            fontWeight="400"
                            align="left"
                            color={textColor}
                          >
                            {comments_count}
                          </Text>
                          &nbsp;
                          <CommentIcon />
                        </Flex>
                      </HStack>
                    </HStack>
                    <HStack spacing={2} isInline>
                      <Text fontSize="sm" fontWeight="600" color={textColor}>
                        {published_at}
                      </Text>
                      <Flex alignItems="center" d={['flex', 'none', 'none']}>
                        <Text
                          fontSize="sm"
                          noOfLines={1}
                          fontWeight="400"
                          align="left"
                          color={textColor}
                        >
                          {positive_reactions_count}
                        </Text>
                        &nbsp;
                        <HeartIcon />
                      </Flex>

                      <Flex alignItems="center" d={['flex', 'none', 'none']}>
                        <Text
                          fontSize="sm"
                          noOfLines={1}
                          fontWeight="400"
                          align="left"
                          color={textColor}
                        >
                          {comments_count}
                        </Text>
                        &nbsp;
                        <CommentIcon />
                      </Flex>
                    </HStack>
                    <Text align="left" fontSize="md" noOfLines={1} color={textColor}>
                      {description}
                    </Text>
                  </VStack>
                </motion.div>
              )
            )}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default FeaturedArticles;
