import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: 'Weekly downloads',
    score: '3.2M'
  },
  {
    label: 'Stars on GitHub',
    score: '77k'
  },
  {
    label: 'Contributors',
    score: '2.4k'
  },
  {
    label: 'Followers on Twitter',
    score: '17k'
  }
];

const planList = [
  'Customer obsessed. We put our customers front & center.',
  'Transparency. Most of our work is public.',
  'Freedom. We work from anywhere in the world.',
  'Autonomy. We want to create a safe, high-trust team.',
  'Excellence. We are aiming high, and we know it.'
];

const BrandStats = () => {
  return (
    <Container maxW="5xl" p={{ base: 4, sm: 10 }}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            Our ultimate goal
          </chakra.h1>
          <Text fontSize="md" color="gray.400" maxW="480px">
            We aim high trying to design the most effective and efficient tool for building UIs, for
            developers and designers. ChakraUI started back in 2019, to unify React. Since then,
            we've become a community of over 2M developers from every corner of the world.
          </Text>

          <Stack spacing={2}>
            <Text fontSize="md" color="gray.400">
              We plan on doing all that cultivating our values:
            </Text>
            {planList.map((data, index) => (
              <HStack key={index} alignItems="center" spacing={1} fontSize="md">
                <Icon as={AiFillCheckCircle} w={4} h={4} color="blue.400" />
                <Text fontSize="md">{data}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <SimpleGrid columns={2} spacing={5} pt={8} pl={{ base: 0, md: 10 }} margin="auto 0">
            {statData.map((data, index) => (
              <Stack
                key={index}
                pl={3}
                py={1}
                pr={1}
                borderLeft="2px solid"
                borderLeftColor="blue.400"
                justifyContent="space-between"
              >
                <Box fontSize="2xl" fontWeight="bold" color="blue.400">
                  {data.score}
                </Box>
                <Text fontSize="md">{data.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default BrandStats;
