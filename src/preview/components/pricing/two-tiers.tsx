import {
  chakra,
  Stack,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  Button,
  Divider,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiCheck } from 'react-icons/bi';

const plansList = [
  {
    title: 'Android Single Site',
    subLabel: 'Build one application',
    price: 150,
    features: [
      'Authentication',
      'Tab Bar Navigation',
      'Push Notifications',
      'API Integration Built-in',
      'Easy Upgrades'
    ]
  },
  {
    title: 'Android Unlimited',
    subLabel: 'Build unlimited apps',
    price: 799,
    features: [
      'Authentication',
      'Tab Bar Navigation',
      'Push Notifications',
      'API Integration Built-in',
      'Easy Upgrades',
      'Build Unlimited Android Apps'
    ]
  }
];

const TwoTiersPricing = () => {
  return (
    <Container maxW="5xl" p="6">
      <chakra.h2 fontSize="5xl" fontWeight="bold" textAlign="center" mb={5}>
        Android Pricing
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

interface PricingCardProps {
  title: string;
  subLabel: string;
  price: number;
  features: string[];
}

const PricingCard = ({ title, subLabel, price, features }: PricingCardProps) => {
  return (
    <Box
      minW={{ base: 'xs', sm: 'sm' }}
      border="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      rounded="md"
      marginInline="auto"
      my={3}
      _hover={{
        boxShadow: useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.4)'
        )
      }}
    >
      <Box p={6}>
        <chakra.h2 fontSize="2xl" fontWeight="400">
          {title}
        </chakra.h2>
        <Text fontSize="sm">{subLabel}</Text>
        <Text fontSize="4xl" fontWeight="bold" my={4}>
          ${price}
          <Text as="sub" fontSize="md" fontWeight="normal">
            /year
          </Text>
        </Text>
        <Button colorScheme="blue" variant="solid" size="md" rounded="md" w="100%">
          Get Started
        </Button>
      </Box>
      <Divider />
      <VStack p={6} spacing={4} alignItems="flex-start">
        <Text fontSize="sm" fontWeight="semibold">
          WHAT'S INCLUDED
        </Text>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={BiCheck} h={4} w={4} color="green.500" />
            <Text fontSize="sm" color="gray.500">
              {feature}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default TwoTiersPricing;
