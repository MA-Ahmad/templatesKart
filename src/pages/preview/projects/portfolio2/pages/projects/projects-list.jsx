import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  Grid,
  Skeleton,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react';

const projects = [
  {
    title: 'Project1',
    image_url: '/assets/images/projects/my-website.png',
    site: 'https://mahmad.me',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    tech: 'Rails, React, Javascript'
  },
  {
    title: 'Project2',
    image_url: '/assets/images/projects/blog.png',
    site: 'https://mahmad.me',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    tech: 'Rails, React, Javascript'
  }
];

const ProjectsList = () => {
  return (
    <Stack
      as="main"
      padding="1.5rem"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={2}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
          />
        ))}
      </Stack>
    </Stack>
  );
};

function Project({ title, desc, tech, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md">
        <Flex alignItems="center">
          <Text as="span">{title}</Text>
        </Flex>
      </Heading>
      <Grid
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={2}
        p={5}
        _hover={{ shadow: 'md' }}
        position="relative"
        rounded="md"
        backgroundColor={useColorModeValue('gray.400', 'gray.700')}
      >
        <Flex w="100%" h="100%" alignItems="center">
          <AspectRatio ratio={1.85 / 1} w="100%" borderBottomWidth="1px">
            <Image
              rounded="md"
              src={'https://bit.ly/2k1H1t6'}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="100%">
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text fontSize="lg" fontWeight="semibold" lineHeight="short">
              {desc}
            </Text>
            <Stack isInline>
              {tech.split(',').map((tag) => (
                <Tag size="sm" padding="0 3px" key={tag} color="#4299E1" fontWeight="bold">
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

export default ProjectsList;
