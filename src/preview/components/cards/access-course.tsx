import {
  chakra,
  Box,
  Stack,
  Text,
  Image,
  Container,
  Button,
  ButtonProps,
  useColorModeValue
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const Index = () => {
  return (
    <Container p={{ base: 5, md: 10 }}>
      <Box
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        rounded="md"
        overflow="hidden"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Image
          src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
          objectFit="cover"
          w="100%"
        />
        <Box p={{ base: 3, sm: 5 }}>
          <Box mb={6}>
            <chakra.h3
              fontSize={{ base: 'lg', sm: '2xl' }}
              fontWeight="bold"
              lineHeight="1.2"
              mb={2}
            >
              How to customize your Github Profile
            </chakra.h3>
            <Text fontSize={{ base: 'md', sm: 'lg' }} noOfLines={2}>
              How to customize your Github Profile Neque porro quisquam est qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit...
            </Text>
          </Box>
          <Stack
            justifyContent="space-between"
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: 2, sm: 0 }}
          >
            <CustomButton variant="outline">Not a member?</CustomButton>
            <CustomButton colorScheme="teal" variant="solid">
              Access Now
            </CustomButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

const CustomButton = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <Button textTransform="uppercase" lineHeight="inherit" rounded="md" {...props}>
      {children}
    </Button>
  );
};

export default Index;
