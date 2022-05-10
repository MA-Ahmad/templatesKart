import { chakra, Stack, HStack, Text, Container, Icon, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsFillCheckCircleFill } from 'react-icons/bs';

const list = [
  '5 new flashcards per day',
  'Full access to reviews',
  'Public profile',
  'Discord community'
];

const SingleTierPricing = () => {
  return (
    <Container maxW="5xl" p="6">
      <chakra.h1 fontSize="5xl" fontWeight="bold" textAlign="center" mb={5}>
        Pricing
      </chakra.h1>
      <PricingCard />
    </Container>
  );
};

const PricingCard = () => {
  return (
    <Stack
      w="max-content"
      spacing={5}
      p={10}
      border="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      rounded="md"
      margin="0 auto"
      textAlign="center"
    >
      <chakra.h1 fontSize="7xl" fontWeight="400">
        $15{' '}
        <Text as="sub" fontSize="md" left="-10px">
          /mon
        </Text>
      </chakra.h1>

      {list.map((text, index) => (
        <HStack key={index} spacing={3}>
          <Icon as={BsFillCheckCircleFill} h={6} w={6} color="green.400" />
          <Text fontSize="lg" color="gray.500">
            {text}
          </Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default SingleTierPricing;
