import { Container, Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { linksData } from './data';

const Links = () => {
  return (
    <Container maxW="md" px={4} py={5} mx="auto">
      <Box bg={useColorModeValue('gray.100', 'gray.700')} rounded="md" p={2}>
        {linksData.map((data, index) => {
          return (
            <LinkButton key={index}>
              <span>{data.icon}</span>
              <Box as="span" ml="2">
                {data.name}
              </Box>
            </LinkButton>
          );
        })}
        <LinkButton>
          <Text fontWeight="normal" color="#4d5760" ml="2.3rem">
            More...
          </Text>
        </LinkButton>
      </Box>
    </Container>
  );
};

type LinkButtonProps = {
  children: ReactNode;
};

const LinkButton = ({ children }: LinkButtonProps) => {
  return (
    <Button
      _hover={{ color: '#323ebe', bg: '#e2e4e6' }}
      bg="transparent"
      width="100%"
      rounded="md"
      padding="8px"
      fontWeight="normal"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  );
};

export default Links;
