import * as React from 'react';
import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Center,
  Checkbox,
  Link
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { BiLockAlt } from 'react-icons/bi';

const SignInForm = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Sign in to your account</Heading>
          </Stack>
          <VStack as="form" spacing={8} w={{ base: 'sm', sm: 'lg' }} p={{ base: 5, sm: 6 }}>
            <VStack spacing={0} w="100%">
              <FormControl id="email">
                <Input
                  type="email"
                  placeholder="Email Address"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="password" position="relative" bottom="1px">
                <Input
                  type="password"
                  placeholder="Password"
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justifyContent="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
              </Stack>
              <Button
                leftIcon={<BiLockAlt />}
                bg="green.300"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w="100%"
              >
                Sign in
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default SignInForm;
