import * as React from 'react';
import { Container, Box, HStack, useColorModeValue, Center } from '@chakra-ui/react';
import MainScreen from './main-screen';

const Card = () => {
  const bg = useColorModeValue('white', '#2f3244');

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Box
          maxH="400px"
          minH="354px"
          w="345px"
          boxShadow="lg"
          rounded="md"
          p={6}
          overflow="hidden"
          cursor="pointer"
          _hover={{ boxShadow: 'lg' }}
          bg={bg}
          role="group"
        >
          <MainScreen />
        </Box>
      </Center>
    </Container>
  );
};

export default Card;
