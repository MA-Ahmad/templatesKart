import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { MdOutlineContentCopy } from 'react-icons/md';

const DetailSection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={2} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="500px"
          mb={{ base: 3, md: 0 }}
        >
          <Box>
            <Text lineHeight={1} fontSize="md" fontWeight="semibold" mb={2}>
              Start now
            </Text>
            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
              Ship your next project <br />
              <chakra.span color="teal">faster</chakra.span>
            </chakra.h1>
          </Box>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Find out why chakraUI are trusted by thousands of open source developers and teams
            around the world.
          </Text>
          <HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap">
            <Button
              rightIcon={<GoChevronRight />}
              colorScheme="blue"
              variant="solid"
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
            >
              Get started
            </Button>
            <Button
              rightIcon={<MdOutlineContentCopy />}
              size="lg"
              rounded="md"
              colorScheme="gray"
              variant="outline"
              mb={{ base: 2, sm: 0 }}
            >
              npm i @chakra-ui/react
            </Button>
          </HStack>
        </Stack>
        <Stack
          spacing={{ base: 5, sm: 2 }}
          direction={{ base: 'column', sm: 'row' }}
          alignItems="center"
        >
          <Card
            heading="Showcase"
            detail="Check out some great examples of chakraui products in action."
          />
          <Card heading="Blog" detail="Read the latest updates about our company and products." />
        </Stack>
      </Stack>
    </Container>
  );
};

const Card = ({ heading, detail }: { heading: string; detail: string }) => {
  return (
    <Stack
      as={Link}
      href="#"
      direction="column"
      _hover={{
        boxShadow: useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )
      }}
      bg={useColorModeValue('gray.200', 'gray.700')}
      p={3}
      rounded="lg"
      spacing={1}
      maxW="450px"
      h="max-content"
    >
      <Text fontSize="md" fontWeight="semibold">
        {heading}
      </Text>
      <Text fontSize="sm" textAlign="left" color="gray.500" lineHeight={1.3} noOfLines={2}>
        {detail}
      </Text>
      <HStack color="gray.500" alignItems="center">
        <Text fontSize="sm" textAlign="left" fontWeight="600">
          Learn more
        </Text>
        <Icon as={GoChevronRight} w={4} h={4} />
      </HStack>
    </Stack>
  );
};
export default DetailSection;
