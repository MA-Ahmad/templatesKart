import React from 'react';
import { Container, Stack, Heading, Text, HStack, Avatar } from '@chakra-ui/react';

const IntroSection = () => {
  return (
    <Container maxW="7xl" p={['4', '8', '12']}>
      <Stack as="main" mx="auto" marginTop="3rem">
        <Stack spacing={2} marginBottom={8}>
          <Heading display="flex">Hi, I'm Ahmad </Heading>
          <HStack alignItems="center">
            <Text>
              I am a Full Stack developer, an open source lover and a writer from Pakistan
            </Text>
            <Avatar
              d={['none', 'block', 'block']}
              size="sm"
              borderRadius="0"
              backgroundColor="transparent"
              name="Pakistan Flag"
              src="https://www.flaticon.com/premium-icon/icons/svg/1863/1863138.svg"
            />
          </HStack>
          <Text>
            This is my digital garden, where I write about the things I'm working on and share what
            I've learned.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default IntroSection;
