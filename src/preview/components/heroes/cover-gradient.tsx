import { chakra, Link, Stack, Box, Button, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Index = () => {
  return (
    <Box pb={8}>
      <Stack
        pos="relative"
        bgGradient={`linear(to-l, blue.500, blue.400 , cyan.400)`}
        height="250px"
        w="100%"
      ></Stack>
      <Box maxW="3xl" p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
        <Box
          boxShadow={useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
        >
          <Stack pos="relative" zIndex={1} direction="column" spacing={5} textAlign="left">
            <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              Explore TemplatesKart
            </chakra.h1>
            <chakra.h1 color="gray.400" fontSize="xl" maxW="600px" lineHeight={1.2}>
              TemplatesKart is a set of more than 100 responsive components built with chakraUI. All
              components support dark/light color scheme and chakraUI theme customizations.
              TemplatesKart is free for everyone.
            </chakra.h1>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
              <chakra.button
                h={10}
                px={6}
                color="white"
                fontSize="md"
                variant="solid"
                rounded="md"
                lineHeight={1}
                bg="blue.400"
                _hover={{ bg: 'blue.600' }}
              >
                View Components
              </chakra.button>
              <Button
                leftIcon={<FaGithub />}
                as={Link}
                href="#"
                rounded="md"
                colorScheme="gray"
                variant="solid"
              >
                Github Discussions
              </Button>
              <Button
                leftIcon={<BsDiscord />}
                as={Link}
                href="#"
                rounded="md"
                color="white"
                variant="solid"
                colorScheme="purple"
                _hover={{ bg: 'purple.600' }}
              >
                Discord community
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
