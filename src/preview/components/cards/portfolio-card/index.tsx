import * as React from 'react';
import { Container, Box, HStack, useColorModeValue, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MainScreen from './main-screen';
import { container } from './animation-variants';

const Card = () => {
  const bg = useColorModeValue('white', '#2f3244');

  return (
    <Container maxW="7xl" py={10} px={10}>
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
          <motion.div variants={container} initial="hidden" animate="visible">
            <MainScreen />
          </motion.div>
        </Box>
      </Center>
    </Container>
  );
};

export default Card;
