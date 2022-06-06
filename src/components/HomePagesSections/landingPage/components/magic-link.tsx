import * as React from 'react';
import {
  chakra,
  Box,
  Input,
  Stack,
  VStack,
  Container,
  FormLabel,
  FormControl,
  useColorModeValue
} from '@chakra-ui/react';

const MagicLinkForm = () => {
  return (
    <Container margin="auto">
      <Stack spacing={4} maxW={{ base: '20rem', sm: '25rem' }} margin="0 auto">
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
            <chakra.button
              w="100%"
              h={10}
              px={6}
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500'
              }}
              type="button"
              fontSize="md"
              rounded="md"
              shadow="md"
            >
              Send magic link
            </chakra.button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default MagicLinkForm;
