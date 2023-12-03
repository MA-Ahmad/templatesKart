import { Container, Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { featuresList } from './features-list';

export default function Home() {
  return (
    <Container maxW={'5xl'} py={8} px={10}>
      <Box
        maxW="64rem"
        marginX="auto"
        py={{ base: '3rem', md: '4rem' }}
        px={{ base: '1rem', md: '0' }}
      >
        <Heading
          as="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          textAlign="left"
          mb={{ base: '4', md: '2' }}
          pb={4}
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          Traveling with AirBnb
        </Heading>
        <Flex
          as="section"
          alignItems="start"
          justifyContent="between"
          flexDirection={{ base: 'column', md: 'row' }}
          my={{ base: '1.5rem', md: '2.5rem' }}
          borderBottom="1px solid"
          borderColor="gray.300"
          pb={8}
        >
          {featuresList.map((feature) => {
            return (
              <Box
                key={feature.id}
                w={{ base: '100%', md: 1 / 3 }}
                px={{ md: '0.5rem' }}
                mb={{ base: '6', md: '0' }}
              >
                {feature.icon}
                <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
                  {feature.title}
                </Text>
                <Text
                  color={useColorModeValue('gray.700', 'gray.400')}
                  fontSize="0.875rem"
                  fontWeight="300"
                  textAlign="left"
                  mt={3}
                  mb={1}
                >
                  {feature.desc}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Container>
  );
}
