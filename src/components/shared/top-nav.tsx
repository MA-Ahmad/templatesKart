import { Box, Flex, HStack, useColorModeValue, Heading, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../theme/ColorModeSwitcher';
import NextLink from 'next/link';
import { AccentPicker } from 'components/theme/Accent';

export default function TopNav() {
  return (
    <>
      <Box
        as={'header'}
        bg={useColorModeValue('white', 'gray.700')}
        px={4}
        boxShadow={'lg'}
        position="fixed"
        width="100%"
        zIndex="55"
        top="0"
      >
        <Container maxW={'1280px'}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mx="auto">
            <HStack spacing={8} alignItems={'center'}>
              <NextLink href={'/'} passHref>
                <Heading as="h1" fontSize={['xl', '2xl']}>
                  TemplatesKart
                </Heading>
              </NextLink>
            </HStack>
            <Flex alignItems={'center'}>
              <AccentPicker aria-label="Accent Color Picker" />
              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
