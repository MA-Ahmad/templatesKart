import * as React from 'react';
import { Container, Heading, Box, SimpleGrid, Flex } from '@chakra-ui/react';
import projectsList from './data';
import ProjectCard from './card';

const Index = () => {
  return (
    <Container maxW={'7xl'} p={10}>
      <Box minH={'50vh'}>
        <Flex p="2" justifyContent="center">
          <Heading
            as="h1"
            size="xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            _focus={{ boxShadow: 'none', outline: 'none' }}
            _hover={{
              textDecoration: 'none',
              bgGradient: 'linear(to-r, red.500, yellow.500)'
            }}
          >
            Repositories
          </Heading>
        </Flex>
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          mt="40px"
          gridGap="10px"
          position="relative"
          overflow="hidden"
        >
          {projectsList().map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
