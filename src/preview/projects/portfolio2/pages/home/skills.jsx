import React from 'react';
import { Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const SKILLS_LIST = [
  'Ruby, Ruby on Rails, Javascript, React, Python',
  'MySQL, PostgreSQL, Redis',
  'Heroku, Amazon Web Services, Digital Ocean',
  'Software Architecture, Project Management'
];

const Skills = () => {
  return (
    <Container maxW="7xl" p={['8', '12']}>
      <Stack
        padding={4}
        borderLeft="4px solid"
        borderColor={'blue.500'}
        _hover={{ shadow: 'md' }}
        backgroundColor={useColorModeValue('gray.100', 'gray.700')}
        rounded="md"
        fontWeight="bold"
        fontSize={['sm', 'md', 'lg']}
      >
        {SKILLS_LIST.map((skills, index) => (
          <Text key={index}>{skills}</Text>
        ))}
      </Stack>
    </Container>
  );
};

export default Skills;
