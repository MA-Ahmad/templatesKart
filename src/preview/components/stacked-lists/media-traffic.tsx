import * as React from 'react';
import {
  Container,
  Box,
  chakra,
  Flex,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  useColorModeValue
} from '@chakra-ui/react';

interface Network {
  name: string;
  visotors: string;
  visotorsRatio: string;
}

const networks: Network[] = [
  {
    name: 'Instagram',
    visotors: '3,550',
    visotorsRatio: '70%'
  },
  {
    name: 'Twitter',
    visotors: '1,229',
    visotorsRatio: '50%'
  },
  {
    name: 'Facebook',
    visotors: '1,115',
    visotorsRatio: '40%'
  }
];

const MediaTraffic = () => {
  return (
    <Container maxW="3xl" py={10} px={4}>
      <Box border="1px solid" borderColor="gray.400" rounded="md" boxShadow="lg" overflow="hidden">
        <Flex justifyContent="left" p={5}>
          <chakra.h3 fontSize="xl" fontWeight="bold" textAlign="center">
            Social Media Traffic
          </chakra.h3>
        </Flex>
        <Divider />
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr fontWeight="900">
                <Th>Network</Th>
                <Th>Visitors</Th>
                <Th>New Users Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {networks.map((network, index) => (
                <Tr key={index}>
                  <Td fontSize="sm">{network.name}</Td>
                  <Td fontSize="sm">{network.visotors}</Td>
                  <Td>
                    <Box w="100%" bg={useColorModeValue('gray.300', 'gray.600')} rounded="md">
                      <Box w={network.visotorsRatio} h={2} bg="blue.400" rounded="md"></Box>
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default MediaTraffic;
