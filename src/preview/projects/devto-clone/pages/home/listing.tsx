import {
  Container,
  Box,
  Flex,
  Link,
  Heading,
  Text,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react';

const data = [
  {
    title: 'Javascript developer (~ 2 YOE) looking for remote work',
    category: 'events',
    slug: '#'
  },
  {
    title: 'Want to know how a JavaScript framework works under the hood?',
    category: 'education',
    slug: '#'
  },
  { title: 'Pair Programming with Jhey', category: 'events', slug: '#' }
];

function ListHeading() {
  return (
    <Box borderBottom="1px solid #E2E4E6">
      <Flex align="center" p="3">
        <Heading fontSize="1.25rem">Listings</Heading>
        <Spacer />
        <Link fontSize="14px" color="#3b49df" fontWeight="medium">
          See all
        </Link>
      </Flex>
    </Box>
  );
}

const Listing = () => {
  return (
    <Container maxW="md" px={4} py={5} mx="auto">
      <Box
        as="section"
        bg={useColorModeValue('gray.100', 'gray.700')}
        borderRadius="md"
        border="1px solid #E2E4E6"
        overflow="hidden"
      >
        <ListHeading />
        {data.map((item, index) => (
          <ListBox
            key={index}
            title={item.title}
            category={item.category}
            slug={item.slug}
            showBorder={data.length - 1 !== index}
          />
        ))}
      </Box>
    </Container>
  );
};

interface ListBoxProps {
  title: string;
  category: string;
  slug: string;
  showBorder: boolean;
}

const ListBox = ({ title, category, slug, showBorder }: ListBoxProps) => {
  return (
    <Link
      href={slug}
      _hover={{ textDecoration: 'none', color: 'blue' }}
      isExternal
      borderRadius="md"
      overflow="hidden"
    >
      <Box
        borderBottom={showBorder ? '1px solid #E2E4E6' : 'none'}
        _hover={{ bg: useColorModeValue('gray.50', 'gray.800') }}
        overflow="hidden"
      >
        <Box p="3">
          <Text>{title}</Text>
          <Text mt="2" color="#4d5760" fontSize="14px">
            {category}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Listing;
