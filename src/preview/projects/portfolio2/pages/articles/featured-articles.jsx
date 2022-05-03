import React from 'react';
import { Box, Stack, Heading, Text, Tag, Link, Tooltip, IconButton } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FiBookmark, FiGithub } from 'react-icons/fi';

const articles = [
  {
    title: 'Create an app with react(context api) and ruby on rails by using chakraUI and Formik',
    desc: 'The main goal of this app to understand how to create a react app on the basis of rails back-end api with the mixture of context-api(react) and chakraUI.',
    tags: 'ruby, rails, react, chakraUi, formik',
    article_url:
      'https://dev.to/m_ahmad/create-an-app-with-react-context-api-and-ruby-on-rails-by-using-chakraui-and-formik-40c1',
    github_url: 'https://github.com/MA-Ahmad/blog-app-react-frontend'
  },
  {
    title: 'Create ROR+React(RR) App with Tailwindcss',
    desc: "RailsReactBlog is a CRUD app. It'll help you to integrate tailwindcss with ROR+React app.",
    tags: 'ruby, rails, react, tailwindcss',
    article_url: 'https://dev.to/m_ahmad/create-ror-react-rr-app-with-tailwindcss-3ccf',
    github_url: 'https://github.com/MA-Ahmad/react_rails_blog'
  }
];

const FeaturedArticles = () => {
  return (
    <Stack
      as="main"
      padding="1.5rem"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={4}>
        {articles.map((article, index) => (
          <Card article={article} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};

function Card(props) {
  const { title, desc, tags, article_url, github_url } = props.article;
  const openUrl = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <Box
      p={5}
      isExternal
      as={Link}
      href={article_url}
      _hover={{ shadow: 'md', textDecoration: 'none' }}
      cursor="pointer"
      borderWidth="1px"
      position="relative"
      rounded="md"
    >
      <Box
        as={FiBookmark}
        size="25px"
        width="1.5rem"
        height="1.5rem"
        position="absolute"
        right="0.5rem"
        top="-8px"
        marginBottom="1rem"
      />
      <Heading fontSize="xl">{title}</Heading>
      <Stack spacing={2} mt={1} isInline alignItems="center">
        {tags &&
          tags.split(',').map((tag) => (
            <Tag size="sm" padding="0 3px" key={tag}>
              {tag}
            </Tag>
          ))}
        <div style={{ marginLeft: '5px', paddingBottom: '3px' }}>
          <Tooltip label="Source Code" placement="right">
            <IconButton
              aria-label="Github Link"
              size="lg"
              icon={<FiGithub />}
              variant="unstyled"
              height="auto"
              minWidth="auto"
              onClick={(e) => openUrl(e, github_url)}
            />
          </Tooltip>
        </div>
      </Stack>
      <Text mt={3} fontSize={['sm', 'md', 'md']}>
        {desc}
      </Text>
    </Box>
  );
}

export default FeaturedArticles;
