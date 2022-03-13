import { Heading, Text, Flex, Link, Image, useColorModeValue } from '@chakra-ui/react';

interface Place {
  place: {
    id: number;
    image: string;
    name: string;
    detail: string;
    charges: string;
    ratings: number;
  };
}

const PlaceCard = ({ place }: Place) => {
  return (
    <>
      {place && (
        <Link
          key={place.id}
          href="#"
          w={{ base: '100%', md: '50%', lg: 1 / 4 }}
          px={{ md: '0.25rem', lg: '0.25rem' }}
          mb={{ base: '1.5rem', lg: '0' }}
          textAlign="left"
          _hover={{ textDecoration: 'none' }}
        >
          <Image alt="header image" src={place.image} objectFit="cover" w="100%" />
          <Text
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize="0.75rem"
            fontWeight="700"
            textTransform="uppercase"
            pt="0.5rem"
          >
            {place.detail}
          </Text>
          <Heading as="h4" my="0.25rem" fontSize="1.125rem" fontWeight="500" lineHeight="1.375">
            {place.name}
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="0.875rem" mb="0.25rem">
            {place.charges}
          </Text>
          <Flex alignItems="center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="0.75rem">
              {place.ratings}
              <span aria-hidden>•</span> Superhost
            </Text>
          </Flex>
        </Link>
      )}
    </>
  );
};

const Star = () => {
  return (
    <svg
      style={{
        width: '0.5rem',
        height: '0.5rem',
        fill: '#008F94',
        marginRight: '0.25rem'
      }}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
    </svg>
  );
};

export default PlaceCard;
