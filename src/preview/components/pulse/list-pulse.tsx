import { Container, Box, Flex, Link, Heading, Spacer, Skeleton } from '@chakra-ui/react';

const ListHeading = () => {
  return (
    <Box borderBottom="1px solid #E2E4E6">
      <Flex align="center" p="3">
        <Heading fontSize="1.25rem">Listings</Heading>
        <Spacer />
        <Link fontSize="14px" color="#3b49df" fontWeight="medium">
          See all
        </Link>
      </Flex>
    </Box>
  );
};

const pulseBoxes = Array.from(Array(3).keys());

const ListingSkeleton = () => {
  return (
    <Container maxW="md" px={4} py={8} mx="auto">
      <Box as="section" bg="white" borderRadius="md" border="1px solid #E2E4E6" width="100%">
        <ListHeading />
        {pulseBoxes.map((id, index) => {
          return (
            <Box
              borderBottom={pulseBoxes.length - 1 === index ? 'none' : '1px solid #E2E4E6'}
              width="100%"
              p="3"
              key={index}
            >
              <Skeleton height="15vh" borderRadius="5px" width="100%" />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ListingSkeleton;
