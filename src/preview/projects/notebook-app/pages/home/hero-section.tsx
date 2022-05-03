import * as React from 'react';
import { Container, Heading, Text, SlideFade } from '@chakra-ui/react';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Container maxW="5xl" py={24} mx="auto">
      <SlideFade in={true} offsetY="50vh">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            textAlign="center"
          >
            <Text textShadow="1px 1px #9c1786">Make notes for </Text>
            <Text
              as={'span'}
              color={'green.400'}
              bgGradient="linear(to-r, green.200, pink.500)"
              bgClip="text"
            >
              your daily work
            </Text>
          </Heading>
        </motion.div>
      </SlideFade>
    </Container>
  );
}
