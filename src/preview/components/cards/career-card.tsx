import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Container,
  Tag,
  StackProps
} from '@chakra-ui/react';

const companies = [
  {
    title: 'Google',
    alt: 'company image',
    role: 'Senior Software Engineer',
    skills: ['ruby', 'rails', 'typescript', 'javascript', 'react', 'aws'],
    period: '2019 - Present',
    logo: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80'
  }
];

const Index = () => {
  return (
    <Container maxW="4xl" p={{ base: 5, md: 12 }}>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]}>
        {companies.map(({ title, role, skills, period, logo, alt }, index) => (
          <Box
            key={index}
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: 'lg' }}
            bg={useColorModeValue('white', 'gray.800')}
            position="relative"
            rounded="md"
          >
            <Flex justifyContent="space-between">
              <Flex>
                <Image
                  rounded="full"
                  w={16}
                  h={16}
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/150"
                  src={logo}
                  alt={alt}
                />
                <Stack spacing={2} pl={3} align="left">
                  <Heading align="left" fontSize="xl">
                    {title}
                  </Heading>
                  <Heading align="left" fontSize="sm">
                    {role}
                  </Heading>
                  <Tags skills={skills} display={['none', 'none', 'flex', 'flex']} />
                </Stack>
              </Flex>
              <Stack display={['none', 'none', 'flex', 'flex']}>
                <Text fontSize={14} color="gray.400">
                  {period}
                </Text>
              </Stack>
            </Flex>

            <Tags skills={skills} display={['flex', 'flex', 'none', 'none']} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

interface TagsProps extends StackProps {
  skills: string[];
}

const Tags = ({ skills, ...props }: TagsProps) => {
  return (
    <Stack spacing={1} mt={3} isInline alignItems="center" flexWrap="wrap" {...props}>
      {skills.map((skill) => (
        <Tag key={skill} m="2px" size="sm">
          {skill}
        </Tag>
      ))}
    </Stack>
  );
};
export default Index;
