import React, { ReactNode } from 'react';
import { Container, Text, Flex, Icon, FlexProps, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const PaginationContainer = () => {
  return (
    <Container d="flex" w="full" h="100px" justifyContent="space-between" alignItems="center">
      <Pagination />
    </Container>
  );
};

// Ideally, only the Pagination component should be used. The PaginationContainer component is used to style the preview.
const Pagination = () => {
  return (
    <Flex direction="column" justifyContent="space-between" alignItems="center" w="full">
      <Flex as="nav" aria-label="Pagination" alignItems="center" mt={3}>
        <PaginationButton borderTopLeftRadius="md" borderBottomLeftRadius="md" isDisabled>
          <Icon as={FaChevronLeft} w={3.5} h={3.5} />
        </PaginationButton>
        <PaginationButton isActive>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>...</PaginationButton>
        <PaginationButton>1441</PaginationButton>
        <PaginationButton>1442</PaginationButton>
        <PaginationButton borderTopRightRadius="md" borderBottomRightRadius="md">
          <Icon as={FaChevronRight} w={3.5} h={3.5} />
        </PaginationButton>
      </Flex>
    </Flex>
  );
};

interface PaginationButtonProps extends FlexProps {
  children: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
}

const PaginationButton = ({ children, isDisabled, isActive, ...props }: PaginationButtonProps) => {
  const activeStyle = {
    bg: useColorModeValue('gray.300', 'gray.700')
  };

  return (
    <Flex
      p={3}
      px={4}
      fontSize="md"
      fontWeight="500"
      lineHeight="1rem"
      height="2.5rem"
      opacity={isDisabled && 0.7}
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      border="1px solid"
      mr="-1px"
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default PaginationContainer;
