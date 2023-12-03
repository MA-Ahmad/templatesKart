import { Box, Link, Heading, Flex, Text, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      position="relative"
      bgImage="url('/assets/images/projects/airbnb/airbnb-home.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={6}
    >
      <Link to="/">
        <Heading as="h1" size="4xl">
          <Box as="span" height="1px" width="1px" position="absolute" overflow="hidden">
            AirBnb
          </Box>
          <svg
            viewBox="0 0 1000 1000"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style={{
              height: '32px',
              width: '32px',
              display: 'block',
              fill: '#ffffff'
            }}
          >
            <title>AirBnb</title>
            <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
          </svg>
        </Heading>
      </Link>
      <Box margin="0 auto" maxW="64rem" py={{ base: '1rem', lg: '8rem' }}>
        <Heading as="h2" fontSize={{ base: '2.25rem', lg: '3rem' }} mb="4" color="#fff">
          Book a trip. Host travels. All on Airbnb.
        </Heading>
        <Flex
          justifyContent="start"
          flexDirection={{ base: 'column', lg: 'row' }}
          align-items="center"
          maxWidth="42rem"
          marginX={{ base: 'auto', lg: '0' }}
        >
          <Box
            pr={{ base: 0, lg: 5 }}
            width={{ base: '100%', lg: '50%' }}
            mb={{ base: '1rem', lg: '0' }}
          >
            <Text mb="0.5rem" color="#fff">
              Find places to stay and things to do
            </Text>
            <Button
              as={Link}
              bg="#fff"
              color="#000000"
              fontWeight="bold"
              px="2.5rem"
              py="1.5rem"
              width="full"
              border="2px solid #fff"
              rounded="md"
              _hover={{ bg: 'gray.300', textDecoration: 'none' }}
            >
              Explore
            </Button>
          </Box>
          <Box pl={{ base: 0, lg: 5 }} width={{ base: '100%', lg: '50%' }}>
            <Text mb="0.5rem" color="#fff">
              Earn money from your extra space
            </Text>
            <Button
              as={Link}
              bg="transparent"
              color="#fff"
              fontWeight="bold"
              px="2.5rem"
              py="1.5rem"
              width="full"
              border="2px solid #fff"
              rounded="md"
              _hover={{ bg: 'gray.800', textDecoration: 'none' }}
            >
              Host
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
