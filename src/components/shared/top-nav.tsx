import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Heading,
  Container,
  Image,
  Icon,
  Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../theme/ColorModeSwitcher';
import NextLink from 'next/link';
import { AccentPicker } from 'components/theme/Accent';
import DropDownMenu from './menu-list';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useLinkColor, useHoverLinkColor } from 'components/theme';

export default function TopNav() {
  const linkColor = useLinkColor();

  return (
    <>
      <Box
        as={'header'}
        bg={useColorModeValue('white', 'gray.700')}
        px={4}
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        position="fixed"
        width="100%"
        zIndex="55"
        top="0"
      >
        <Container maxW={'1280px'} p={{ base: 0, md: 'inherit' }}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mx="auto">
            <HStack spacing={{ base: 0, sm: 3 }} alignItems={'center'}>
              <NextLink href={'/'} passHref>
                <Heading as="h1" fontSize={['lg', 'md', 'xl', '3xl']} cursor="pointer">
                  <Flex position="relative">
                    <Icon
                      position="relative"
                      as={GoChevronLeft}
                      transform={'rotate(-15deg)'}
                      w={7}
                      h={7}
                      color={linkColor}
                      top={1}
                    />
                    <HStack d={{ base: 'none', sm: 'flex' }} spacing={2}>
                      <Text textShadow="1px 2px #179c40">Templates</Text>
                      <Text textShadow="1px 2px #179c40">Kart</Text>
                    </HStack>
                    <Icon
                      position="relative"
                      as={GoChevronRight}
                      transform={'rotate(-15deg)'}
                      w={7}
                      h={7}
                      color={linkColor}
                      bottom={1}
                    />
                  </Flex>
                </Heading>
              </NextLink>
              <DropDownMenu />
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
