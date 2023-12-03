import * as React from 'react';
import { Flex, Avatar, Box, Container, forwardRef } from '@chakra-ui/react';
// Here we have used framer-motion package for animations
import { motion, isValidMotionProp } from 'framer-motion';

const IntroSection = () => {
  return (
    <Container maxW="7xl" p="12">
      <Flex direction={['column', 'column', 'row']}>
        <Box m="auto" mb={[16, 16, 'auto']}>
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor="blue.400"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            />
          </MotionBox>
        </Box>
        <Flex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          justifyContent="center"
          direction="column"
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Box
                as="h1"
                // mt={10}
                mb={6}
                fontSize="3xl"
                lineHeight="shorter"
                fontWeight="bold"
                mt={0}
                cursor="pointer"
                width="max-content"
                textAlign="left"
              >
                <Box as="span" display="inline-block" position="relative">
                  Hey!
                  <Box
                    as="span"
                    display="block"
                    position="absolute"
                    bg="blue.400"
                    w="100%"
                    h="1px"
                    bottom={-2}
                  />
                </Box>
              </Box>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
              Ahmad
            </Box>{' '}
            and I&apos;m a{' '}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer and
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
              an open source lover&nbsp;
            </Box>
            from{' '}
            <Box as="span" whiteSpace="nowrap">
              Pakistan 🇵🇰
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I&apos;m working on and share
            what I&apos;ve learned. 😊
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export default IntroSection;
