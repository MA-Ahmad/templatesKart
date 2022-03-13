import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Link,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react';
import { AiOutlineStar, AiOutlineShareAlt } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';

const repos = [
  {
    title: 'Portfolio',
    description: 'My personal portfolio to show my skills, experience, and articles I published.',
    languages: 'Nextjs, chakraUi',
    url: 'https://github.com/MA-Ahmad/myPortfolio',
    live: 'https://mahmad.me',
    stars: '102',
    fork: '14'
  },
  {
    title: 'Portfolio2',
    description: 'This portfolio built by using Next.js, ChakraUi and Typescript.',
    languages: 'Typescript, React, ChakraUi',
    url: 'https://github.com/MA-Ahmad/portfolio',
    live: 'https://ma-ahmad.github.io/portfolio',
    stars: '65',
    fork: '12'
  }
];

const ReposList = () => {
  return (
    <Stack
      as="main"
      padding="1.5rem"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={4} marginBottom={6}>
        {repos.map((repo, index) => (
          <Card
            key={index}
            title={repo.title}
            description={repo.description}
            languages={repo.languages}
            url={repo.url}
            live={repo.live}
            stars={repo.stars}
            fork={repo.fork}
          />
        ))}
      </Stack>
    </Stack>
  );
};

function Card({ title, description, languages, url, live, colorMode, stars, fork }) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      position="relative"
      rounded="md"
      shadow="md"
      backgroundColor={useColorModeValue('gray.400', 'gray.700')}
    >
      <Flex justifyContent="space-between" marginBottom={3}>
        <Flex>
          <Box as={BiBookBookmark} size="25px" />
          <Stack spacing={2} pl={3}>
            <Heading
              isExternal
              as={Link}
              href={url}
              fontSize="xl"
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
            >
              {title}
            </Heading>
          </Stack>
        </Flex>
        <Flex>
          {live && (
            <Tooltip hasArrow label="Live" placement="top">
              <Link href={live} isExternal>
                <Box as={HiOutlineExternalLink} size="20px" />
              </Link>
            </Tooltip>
          )}
          <Box as={FiGithub} size="20px" marginLeft={4} />
        </Flex>
      </Flex>
      <Text>{description}</Text>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {languages.split(',').map((language) => (
          <Tag size="sm" padding="0 3px" key={language} fontWeight="bold">
            {language}
          </Tag>
        ))}
        {stars && (
          <Flex alignItems="center">
            <Box as={AiOutlineStar} size="18px" marginLeft={2} />
            <Text marginLeft={2} fontSize={15}>
              {stars}
            </Text>
          </Flex>
        )}
        {fork && (
          <Flex alignItems="center">
            <Box as={AiOutlineShareAlt} size="18px" />
            <Text marginLeft={2} fontSize={15}>
              {fork}
            </Text>
          </Flex>
        )}
      </Stack>
    </Box>
  );
}

export default ReposList;
