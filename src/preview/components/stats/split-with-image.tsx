import * as React from 'react';
import { Text, SimpleGrid, Box, Image, Flex, Stack } from '@chakra-ui/react';

interface StatData {
  id: number;
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: 'Clients',
    score: '550'
  },
  {
    id: 2,
    label: 'Projects',
    score: '421'
  },
  {
    id: 3,
    label: 'Revenue',
    score: '$5M'
  }
];

const SplitWithImage = () => {
  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image alt="Cover image" objectFit="cover" src="https://bit.ly/2k1H1t6" />
      </Flex>
      <Flex p={8} flex={1} align="center" justifyContent="center">
        <Flex direction="column">
          <Text fontWeight="extrabold" fontSize="x-large" mb={2}>
            <Box as="span" display="inline-block" position="relative">
              Trusted by Our Clients
              <Box as="span" display="block" position="absolute" bg="blue.600" w="100%" h="1px" />
            </Box>
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consecte adipiscing elit. Vestibulum eros ex, mollis eget
            urna eu, convallis interdum ligula. Aenean posuere quam quam, id ultrices nisi vehicula
            et.
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={1} mt={12} mb={4}>
            {statData.map((data) => (
              <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
                <Text fontWeight="extrabold" fontSize="xx-large">
                  {data.score}
                </Text>
                <Text fontSize="sm">{data.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default SplitWithImage;
