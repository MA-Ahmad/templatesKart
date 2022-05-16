import * as React from 'react';
import {
  Container,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const MagicLinkForm = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Stack spacing={4} maxW={{ base: '20rem', sm: '25rem' }} margin="0 auto">
        <Stack align="center" spacing={2}>
          <Heading fontSize={{ base: 'xl', sm: '3xl' }}>Sign in to your account</Heading>
          <Text fontSize={{ base: 'sm', sm: 'md' }}>Send a magic link with your email below</Text>
        </Stack>
        <Box pos="relative">
          <Box
            pos="absolute"
            top="-7px"
            right="-7px"
            bottom="-7px"
            left="-7px"
            rounded="lg"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            transform="rotate(-2deg)"
          ></Box>
          <VStack
            as="form"
            pos="relative"
            spacing={8}
            p={6}
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
          >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Your email" rounded="md" />
            </FormControl>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500'
              }}
              rounded="md"
              w="100%"
            >
              Send magic link
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default MagicLinkForm;
