import * as React from 'react';
import {
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Box,
  useColorModeValue
} from '@chakra-ui/react';

const NoteForm = () => {
  return (
    <Container maxW={'2xl'} py={10} mx="auto">
      <VStack
        spacing={2}
        border="1px solid"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        p={5}
        rounded="lg"
        shadow="md"
      >
        <Box width="100%">
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input name="title" placeholder="Title" />
          </FormControl>
          <FormControl size="lg" mt={4} isRequired>
            <FormLabel>Body</FormLabel>
            <Textarea name="body" placeholder="Body" size="md" borderRadius="5px" />
          </FormControl>
        </Box>
        <Box w="100%" textAlign="end">
          <Button type="submit" colorScheme="blue" rounded="md">
            Save
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default NoteForm;
