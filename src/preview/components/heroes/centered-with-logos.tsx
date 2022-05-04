import * as React from 'react';
import { Container, Heading, Stack, HStack, Text, Button, Image } from '@chakra-ui/react';

const companiesImages = [
  'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80'
];

const HeroSection = () => {
  return (
    <Container maxW="7xl" p={4}>
      <Stack direction="column" spacing={6} alignItems="center" mt={8} mb={16}>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="center" maxW="600px">
          We're on a mission to make <br /> building UIs more accessible
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Our mission is to empower anyone to build UIs, faster. We're reducing the entry barrier,
          making design skills accessible.
        </Text>
        <HStack spacing={5}>
          <Button colorScheme="teal" variant="solid" rounded="md" size="lg">
            Get Started
          </Button>
        </HStack>
      </Stack>
      <Stack spacing={5} alignItems="center" mb={8}>
        <HStack
          spacing={{ base: 0, md: 10 }}
          justifyContent="center"
          maxW={{ base: '500px', md: '100%' }}
          flexWrap="wrap"
        >
          {companiesImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="company logo"
              w={{ base: '8rem', md: '5rem' }}
              p={{ base: 5, md: 0 }}
            />
          ))}
        </HStack>
        <Text maxW="500px" fontSize="md" textAlign="center" color="gray.500">
          The world's best product teams trust us to deliver an unrivaled experience for both
          developers and users.
        </Text>
      </Stack>
    </Container>
  );
};

export default HeroSection;
