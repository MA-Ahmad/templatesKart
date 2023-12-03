import React, { ReactNode } from 'react';
import { chakra, Container, Box, Stack, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const PaginationContainer = () => {
  return (
    <Container
      d="flex"
      maxWidth="7xl"
      w="full"
      h="218px"
      alignItems="center"
      p={{ base: 5, sm: 10 }}
    >
      <Pagination />
    </Container>
  );
};

// Ideally, only the Pagination component should be used. The PaginationContainer component is used to style the preview.
const Pagination = () => {
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      as="nav"
      aria-label="Pagination"
      spacing={2}
      w="full"
      justifyContent="center"
      alignItems="center"
      mt={{ base: 3, md: 0 }}
    >
      <Box>
        <PaginationButton>Previous</PaginationButton>
      </Box>
      <Stack direction="row" spacing={2}>
        <PaginationButton>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton isActive>5</PaginationButton>
      </Stack>
      <Box>
        <PaginationButton isDisabled>Next</PaginationButton>
      </Box>
    </Stack>
  );
};

interface PaginationButtonProps {
  children: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
}

const PaginationButton = ({ children, isDisabled, isActive }: PaginationButtonProps) => {
  const activeStyle = {
    bg: useColorModeValue('gray.500', 'gray.700'),
    color: 'white'
  };

  return (
    <chakra.button
      py={1}
      px={3}
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      rounded="md"
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled && 'not-allowed'}
      {...(isActive && activeStyle)}
    >
      {children}
    </chakra.button>
  );
};

export default PaginationContainer;
