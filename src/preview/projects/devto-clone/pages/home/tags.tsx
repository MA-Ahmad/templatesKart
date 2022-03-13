import { Container, Box, Button, Flex, Heading, Spacer, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Tags = () => {
  return (
    <Container maxW="md" px={4} py={5} mx="auto">
      <Box bg={useColorModeValue('gray.100', 'gray.700')} rounded="md" p={2}>
        <Flex pl="2" py="4">
          <Heading as="h3" fontSize="1rem">
            My Tags
          </Heading>
          <Spacer />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
          >
            <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </Flex>
        <Box maxH="50vh" overflowY="auto" w="full">
          <TagList
            list={[
              'Nextjs',
              'react',
              'javascript',
              'ruby',
              'ruby on rails',
              'beginners',
              'typescript'
            ]}
          />
        </Box>
      </Box>
    </Container>
  );
};

type LinkButtonProps = {
  children: ReactNode;
};

const LinkButton = ({ children }: LinkButtonProps) => {
  return (
    <Button
      _hover={{ color: '#323ebe', bg: '#e2e4e6' }}
      bg="transparent"
      width="100%"
      padding="8px"
      rounded="md"
      fontWeight="normal"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  );
};

type TagListProps = {
  list: string[];
};

const TagList = ({ list }: TagListProps) => {
  return <Box>{list && list.map((item, idx) => <LinkButton key={idx}>#{item}</LinkButton>)}</Box>;
};

export default Tags;
