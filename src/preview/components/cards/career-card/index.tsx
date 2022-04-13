import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
import { MotionBox } from './motion';
import Tags from './Tags';

export const companies = [
  {
    title: 'Company1',
    alt: 'company1 image',
    role: 'Senior Software Engineer',
    skills: ['ruby', 'rails', 'typescript', 'javascript', 'react', 'aws'],
    period: '2019 - Present',
    logo: ''
  }
];

const Index = () => {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="7xl" p="12">
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]}>
        {companies.map(({ title, role, skills, period, logo, alt }, index) => (
          <MotionBox whileHover={{ y: -5 }} key={index}>
            <Box
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
                    <Heading align="left" fontSize="xl" color={`mode.${colorMode}.career.text`}>
                      {title}
                    </Heading>
                    <Heading align="left" fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
                      {role}
                    </Heading>
                    <Stack
                      spacing={1}
                      mt={3}
                      isInline
                      alignItems="center"
                      display={['none', 'none', 'flex', 'flex']}
                    >
                      <Tags
                        tags={skills}
                        interactive={false}
                        tagProps={{
                          colorScheme: 'gray',
                          padding: '0 3px',
                          size: 'sm'
                        }}
                      />
                    </Stack>
                  </Stack>
                </Flex>
                <Stack display={['none', 'none', 'flex', 'flex']}>
                  <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
                    {period}
                  </Text>
                </Stack>
              </Flex>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['flex', 'flex', 'none', 'none']}
              >
                <Tags
                  tags={skills}
                  interactive={false}
                  tagProps={{
                    colorScheme: 'gray',
                    padding: '0 3px',
                    size: 'sm'
                  }}
                />
              </Stack>
            </Box>
          </MotionBox>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
