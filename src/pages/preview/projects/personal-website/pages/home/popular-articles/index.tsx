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
  Box,
  Container
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import { MotionBox, CardTransition } from './motion';
import { CommentIcon, HeartIcon } from './icons';

const BASE_URL = 'https://mahmad.me';

const posts = [
  {
    title: 'Create professional portfolio website with Nextjs and ChakraUI',
    description: `Currently, I'm learning Nextjs and Typescript. And for learning perspective I decided to rebuilt my...`,
    slug: 'blog/create-professional-portfolio-website-with-nextjs-and-chakraui-4lkn',
    positive_reactions_count: '352',
    comments_count: '26',
    published_at: '20th June 2021'
  },
  {
    title: 'Started 2022 by updating portfolio website',
    description: `I was thinking about making some changes in my portfolio website since past few months. I couldn't...`,
    slug: 'blog/started-2022-by-updating-portfolio-website-1jde-temp-slug-4553258',
    positive_reactions_count: '189',
    comments_count: '26',
    published_at: '21st January 2021'
  }
];

const PopularArticles = () => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue('gray.500', 'gray.200');

  return (
    <Container maxW={'7xl'} p="12">
      <VStack align="start" spacing={8} width="100%">
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
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
                <MotionBox whileHover={{ y: -5 }} key={i}>
                  <CardTransition>
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
                          <NextLink href={`${BASE_URL}/${slug}`} passHref>
                            <Text as={Link} color={linkColor}>
                              {title}
                            </Text>
                          </NextLink>
                        </Heading>
                        <HStack spacing={2} isInline d={['none', 'none', 'flex']}>
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
                      <HStack spacing={2} isInline justifyContent="space-between">
                        <Text fontSize="sm" fontWeight="600" color={textColor}>
                          {published_at}
                        </Text>
                        <HStack>
                          <Flex alignItems="center" d={['flex', 'flex', 'none']}>
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
                          <Flex alignItems="center" d={['flex', 'flex', 'none']}>
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
                      <Text align="left" fontSize="md" noOfLines={1} color={textColor}>
                        {description}
                      </Text>
                    </VStack>
                  </CardTransition>
                </MotionBox>
              )
            )}
        </SimpleGrid>
        <HStack justifyContent="center" width="100%">
          <NextLink href={`${BASE_URL}/blog`} passHref>
            <HStack spacing={2} as={Link} color={linkColor}>
              <Text fontSize="sm">More Articles</Text>
              <Box height="1.2rem" width="1.2rem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </HStack>
          </NextLink>
        </HStack>
      </VStack>
    </Container>
  );
};

export default PopularArticles;
