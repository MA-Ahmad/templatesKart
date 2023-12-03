import { Container, Box, Heading, Text, Flex, Link } from '@chakra-ui/react';
import PlaceCard from './place-card';

const places = [
  {
    id: 1,
    detail: 'Entire House • Joshua Tree',
    name: 'The Joshua Tree House',
    image: '/assets/images/projects/airbnb/review-image.jpg',
    charges: '$285/night',
    ratings: 467
  },
  {
    id: 2,
    detail: 'Dome house • Aptos',
    name: 'Mushroom Dome Cabin: #1 on airbnb in the world',
    image: '/assets/images/projects/airbnb/review-image.jpg',
    charges: '$285/night',
    ratings: 1392
  },
  {
    id: 3,
    detail: 'Entire House • Joshua Tree',
    name: 'The Joshua Tree House',
    image: '/assets/images/projects/airbnb/review-image.jpg',
    charges: '$285/night',
    ratings: 467
  },
  {
    id: 4,
    detail: 'Entire House • Joshua Tree',
    name: 'The Joshua Tree House',
    image: '/assets/images/projects/airbnb/review-image.jpg',
    charges: '$285/night',
    ratings: 467
  }
];

const Index = () => {
  return (
    <Container maxW={'5xl'} p={10}>
      <Heading
        as="h3"
        fontSize="1.5rem"
        fontWeight="bold"
        textAlign="left"
        mb={{ base: '4', lg: '2' }}
      >
        Just booked in the United States
      </Heading>

      <Flex
        as="section"
        alignItems="start"
        justifyContent="between"
        flexWrap="wrap"
        my={{ base: '1.5rem', lg: '2rem' }}
      >
        {places.map((place) => {
          return <PlaceCard place={place} key={place.id} />;
        })}
      </Flex>

      <Link
        href="#"
        fontSize="1.125rem"
        fontWeight="500"
        alignItems="center"
        display="flex"
        _hover={{ textDecoration: 'none' }}
      >
        Show all (22,000+){' '}
        <svg
          viewBox="0 0 18 18"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{
            width: '0.75rem',
            height: '0.75rem',
            fill: '#008F94',
            marginLeft: '0.5rem'
          }}
        >
          <path
            d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
            fillRule="evenodd"
          ></path>
        </svg>
      </Link>

      <Box as="section" mt={{ base: '2rem', lg: '4rem' }} textAlign="left">
        <Heading
          as="h3"
          fontSize="1.5rem"
          fontWeight="700"
          textAlign="left"
          mb={{ base: '4', lg: '2' }}
        >
          When are you traveling?
        </Heading>
        <Text fontSize="1rem" fontWeight="300">
          Add dates for updated pricing and availability
        </Text>
        <Link
          href="#"
          bg="#008F94"
          px="1.5rem"
          py="0.75rem"
          my="0.5rem"
          borderRadius="5px"
          color="#fff"
          fontWeight="bold"
          display="inline-block"
          _hover={{ textDecoration: 'none' }}
        >
          Add dates
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
