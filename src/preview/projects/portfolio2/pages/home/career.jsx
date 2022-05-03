import React from 'react';
import {
  Container,
  Stack,
  Heading,
  Box,
  Text,
  useColorModeValue,
  Flex,
  Image,
  Tag,
  VStack
} from '@chakra-ui/react';

const companies = [
  {
    title: 'Company1',
    alt: 'PS image',
    role: 'Senior Software Engineer',
    skills: 'Ruby, ROR, React, AWS',
    period: '2019 - Present',
    logo: ''
  },
  {
    title: 'Company2',
    alt: 'BT image',
    role: 'Software Engineer',
    skills: 'Ruby, ROR, Javascript, Python',
    period: '2018 - 2019',
    logo: ''
  }
];

const Career = () => {
  return (
    <Container maxW="7xl" p={['8', '12']}>
      <VStack spacing={2}>
        {companies.map((company, index) => (
          <Card
            key={index}
            title={company.title}
            role={company.role}
            skills={company.skills}
            period={company.period}
            logo={company.logo}
          />
        ))}
      </VStack>
    </Container>
  );
};

const Card = ({ title, role, skills, period, logo, alt }) => {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      shadow="md"
      backgroundColor={useColorModeValue('gray.100', 'gray.700')}
      position="relative"
      rounded="md"
      width="100%"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            boxSize={['50px', '70px']}
            fallbackSrc={'https://via.placeholder.com/150'}
            objectFit="cover"
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl">{title}</Heading>
            <Heading fontSize="sm">
              {role}
              <Text display={['block', 'none', 'none', 'none']} fontSize={14}>
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={['none', 'flex', 'flex', 'flex']}>
          <Text fontSize={14}>{period}</Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {skills.split(',').map((skill) => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            fontWeight="bold"
            backgroundColor={useColorModeValue('gray.200', 'gray.500')}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
};

export default Career;
