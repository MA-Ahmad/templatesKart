import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Heading,
  Container,
  Icon,
  Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../theme/ColorModeSwitcher';
import NextLink from 'next/link';
import { AccentPicker } from 'components/theme/Accent';
import DropDownMenu from './menu-list';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useLinkColor } from 'components/theme';

const valuePageYOffset = 20;

export default function TopNav() {
  const linkColor = useLinkColor();
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsVisible(position > valuePageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        as="header"
        transition="all 0.3s ease-in-out"
        bg={isVisible ? useColorModeValue('white', 'gray.800') : 'inherit'}
        px={4}
        boxShadow={
          isVisible
            ? useColorModeValue(
                '0 4px 6px rgba(160, 174, 192, 0.6)',
                '0 4px 6px rgba(9, 17, 28, 0.9)'
              )
            : 'none'
        }
        position="fixed"
        width="100%"
        zIndex="55"
        top="0"
      >
        <Container maxW="1280px" p={{ base: 0, md: 'inherit' }}>
          <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
            <HStack spacing={{ base: 0, sm: 3 }} alignItems="center">
              <NextLink href="/" passHref>
                <Heading as="h1" fontSize={['lg', 'md', 'xl', '3xl']} cursor="pointer">
                  <Flex position="relative">
                    <Icon
                      position="relative"
                      as={GoChevronLeft}
                      transform="rotate(-15deg)"
                      w={7}
                      h={7}
                      color={linkColor}
                      top={1}
                    />
                    <HStack d={{ base: 'none', sm: 'flex' }} spacing={2}>
                      <Text textShadow="1px 2px #179c40">
                        Templates{' '}
                        <Box
                          as="span"
                          position="relative"
                          _before={{
                            content: '""',
                            bg: linkColor,
                            position: 'absolute',
                            top: '-0.15rem',
                            right: '-0.15rem',
                            bottom: '-0.15rem',
                            left: '-0.15rem',
                            transform: 'rotate(-4deg)'
                          }}
                        >
                          <Box
                            as="span"
                            textShadow="1px 2px #179c40"
                            color={useColorModeValue('white', 'black')}
                            position="relative"
                          >
                            Kart
                          </Box>
                        </Box>
                      </Text>
                    </HStack>
                    <Icon
                      position="relative"
                      as={GoChevronRight}
                      transform="rotate(-15deg)"
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
            <Flex alignItems="center">
              <AccentPicker aria-label="Accent Color Picker" />
              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
