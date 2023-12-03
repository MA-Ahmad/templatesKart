import { Stack, Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import AppLayout from 'components/layouts/appLayout';
import { useLinkColor, useHoverLinkColor } from 'components/theme';

export const NotFound = () => {
  const color = useLinkColor();
  const hoverColor = useHoverLinkColor();

  return (
    <AppLayout maxW="1280px" mt="32" py={2} mb={4}>
      <Flex align={'center'} justifyContent={'center'} h={'calc(100vh - 16rem)'} w={'full'}>
        <Stack spacing={2}>
          <Heading size={'lg'} color="red.200">
            404 Error
          </Heading>
          <Heading>Page not found</Heading>
          <Text>Sorry, the page you are looking for doesn't exist or has been moved.</Text>
          <Box>
            <NextLink href={'/'} passHref>
              <Button
                as={'a'}
                color={'white'}
                rounded={'md'}
                bg={color}
                _hover={{ bg: hoverColor, color: 'white' }}
              >
                Take me home
              </Button>
            </NextLink>
          </Box>
        </Stack>
      </Flex>
    </AppLayout>
  );
};

export default NotFound;
