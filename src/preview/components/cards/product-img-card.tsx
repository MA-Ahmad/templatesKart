import { PropsWithChildren, Fragment } from 'react';
import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Flex,
  Text,
  Image,
  Container,
  Icon,
  StackProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineHeart, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsTelephoneX } from 'react-icons/bs';

interface ProductCardProps {
  id: number;
  title: string;
  detail: string[];
  location: string;
  updated_at: string;
  price: string;
  image: string;
  isFeatured?: boolean;
}

const productsList: ProductCardProps[] = [
  {
    id: 1,
    title: 'Ford F-150 SUV 2021',
    location: 'Paris',
    detail: ['2021', 'Petrol', '4500 cc', 'Automatic'],
    updated_at: '17 days ago',
    price: '$ 400k',
    isFeatured: true,
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
  },
  {
    id: 2,
    title: 'Haval Jolion Top',
    location: 'New York',
    detail: ['2021', 'Petrol', '3500 cc', 'Automatic'],
    updated_at: '1 days ago',
    price: '$ 450k',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
  }
];

const Index = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={4}>
        {productsList.map((product, index) => (
          <Stack
            key={index}
            spacing={{ base: 0, md: 4 }}
            direction={{ base: 'column', md: 'row' }}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{ base: 'auto', md: '2xl' }}
            overflow="hidden"
            pos="relative"
          >
            {product.isFeatured && (
              <Flex
                alignItems="center"
                p={1}
                bg="red.400"
                pos="absolute"
                fontSize="xs"
                fontWeight="500"
                color="white"
                top={0}
                left={0}
              >
                <Text>FEATURED</Text> &nbsp; <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
              </Flex>
            )}
            <Flex ml="0 !important">
              <Image
                rounded="md"
                w={{ base: '100%', md: '18rem' }}
                h="auto"
                objectFit="cover"
                src={product.image}
                alt="product image"
              />
            </Flex>
            <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }}>
              <Flex justifyContent="space-between">
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.title}
                </chakra.h3>
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.price}
                </chakra.h3>
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="500">
                  {product.location}
                </Text>
              </Box>
              <Flex alignItems="center" color="gray.500">
                {product.detail.map((data, index) => (
                  <Fragment key={index}>
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>{data}</Text>
                    {product.detail.length - 1 != index && (
                      <chakra.span mx={2} fontSize={{ base: 'sm', sm: 'md' }}>
                        |
                      </chakra.span>
                    )}
                  </Fragment>
                ))}
              </Flex>
              <Stack
                direction={{ base: 'column-reverse', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
                  Updated {product.updated_at}
                </Text>
                <Stack direction="row" spacing={1} mb="0 !important">
                  <IconButton>
                    <Icon as={AiOutlineHeart} w={4} h={4} />
                  </IconButton>
                  <IconButton spacing={2} bg="green.500" color="white">
                    <Icon as={BsTelephoneX} w={4} h={4} />
                    <Text fontSize="sm">Show Phone no.</Text>
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </VStack>
    </Container>
  );
};

const IconButton = ({ children, ...props }: PropsWithChildren<StackProps>) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Index;
