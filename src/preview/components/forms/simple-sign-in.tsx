import { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link
} from '@chakra-ui/react';

const SimpleSignIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container maxW={'7xl'} py={10} px={10}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
          </Stack>
          <Box
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={8}>
              <VStack spacing={4} w="100%">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input type={show ? 'text' : 'password'} />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        rounded="md"
                        bg={useColorModeValue('gray.300', 'gray.700')}
                        _hover={{
                          bg: useColorModeValue('gray.400', 'gray.800')
                        }}
                        onClick={handleClick}
                      >
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justify="space-between" w="100%">
                  <Checkbox size="md">Remember me</Checkbox>
                  <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
                </Stack>
                <Button
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
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default SimpleSignIn;