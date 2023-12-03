import {
  Container,
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';

const BookingSection = () => {
  return (
    <Container maxW={'5xl'} p={10}>
      <Heading as="h3" size="lg" mb="4" fontWeight="bold" textAlign="left">
        Book unique homes and experiences
      </Heading>
      <Box mb={{ base: '2.5rem', lg: '4rem' }}>
        <form>
          <Flex
            justifyContent="start"
            alignItems="start"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <FormControl
              id="where"
              width={{ base: '100%', lg: 1 / 3 }}
              pr={{ lg: '2' }}
              mb={{ base: '4', lg: '0' }}
            >
              <FormLabel fontSize="0.75rem" fontWeight="bold">
                Where
              </FormLabel>
              <Input placeholder="Anywhere" />
            </FormControl>
            <FormControl
              id="checkIn"
              width={{ base: '100%', lg: 1 / 3 }}
              pr={{ lg: '2' }}
              mb={{ base: '4', lg: '0' }}
            >
              <FormLabel fontSize="0.75rem" fontWeight="bold">
                CHECK-IN - CHECKOUT
              </FormLabel>
              <Input placeholder="mm/dd/yyyy - mm/dd/yyyy" />
            </FormControl>
            <FormControl
              id="guests"
              width={{ base: '100%', lg: 1 / 3 }}
              pr={{ lg: '2' }}
              mb={{ base: '4', lg: '0' }}
            >
              <FormLabel fontSize="0.75rem" fontWeight="bold">
                GUESTS
              </FormLabel>
              <Select>
                <option value="1 guest">1 guest</option>
                <option value="2 guest">2 guests</option>
                <option value="3 guest">3 guests</option>
              </Select>
            </FormControl>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default BookingSection;
