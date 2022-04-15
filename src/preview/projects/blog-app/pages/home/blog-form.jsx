import React from 'react';
import {
  Container,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Button
} from '@chakra-ui/react';

const BlogForm = () => {
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={6} height={'100%'}>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box p={5} shadow="md" borderWidth="1px" rounded="md" width={['100%', '70%', '50%']}>
          <Stack isInline spacing={8} align="center">
            <form style={{ width: '100%' }}>
              <Box paddingBottom={3}>
                <FormControl>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input id="title" placeholder="Title" />
                </FormControl>
              </Box>
              <Box paddingBottom={3}>
                <FormControl>
                  <FormLabel htmlFor="authorName">Name</FormLabel>
                  <Input id="authorName" placeholder="Author Name" />
                </FormControl>
              </Box>
              <Box paddingBottom={5}>
                <FormLabel htmlFor="content">Content</FormLabel>
                <Textarea height={'20vh'} name="content" />
              </Box>
              <Button
                mt={4}
                variantColor="teal"
                type="submit"
                float="right"
                rounded="md"
                onClick={(e) => e.preventDefault()}
              >
                Create
              </Button>
            </form>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default BlogForm;
