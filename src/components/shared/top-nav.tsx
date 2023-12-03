import React, { useEffect, useState } from 'react';
import {
  Link,
  Box,
  Flex,
  Stack,
  Icon,
  Text,
  HStack,
  Tooltip,
  Heading,
  Container,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import DropDownMenu from './dropDownMenu';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useLinkColor } from 'components/theme';
import { FaGithub } from 'react-icons/fa';
import { GITHUB_REPO_LINK } from 'data/constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const valuePageYOffset = 2;

const menuData = [
  {
    id: 1,
    label: 'ProjectsKart',
    subLabel: 'Explore responsive Projects',
    href: '/projects'
  },
  {
    id: 2,
    label: 'ComponentsKart',
    subLabel: 'Explore responsive Components',
    href: '/components'
  }
];

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        transition="all 0.1s ease-in-out"
        bg={{
          base: useColorModeValue('white', 'gray.800'),
          sm: isVisible ? useColorModeValue('white', 'gray.800') : 'inherit'
        }}
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
            <HStack spacing={3} alignItems="center">
              <IconButton
                size="md"
                icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                aria-label="Open Menu"
                d={{ base: 'inherit', sm: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
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
              <DropDownMenu menuData={menuData} />
            </HStack>
            <HStack spacing={2} alignItems="center">
              <Tooltip label="Github Code" placement="left" aria-label="Github code">
                <Link href={GITHUB_REPO_LINK} isExternal>
                  <Flex
                    as="button"
                    p="0.6rem"
                    rounded="lg"
                    cursor="pointer"
                    _hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}
                    bg={useColorModeValue('gray.200', 'gray.700')}
                    justifyContent="center"
                  >
                    <Icon as={FaGithub} color={linkColor} />
                  </Flex>
                </Link>
              </Tooltip>
            </HStack>
          </Flex>
        </Container>

        {isOpen ? (
          <Box pb={4} d={{ base: 'inherit', sm: 'none' }}>
            <Stack as="nav" spacing={1}>
              {menuData.map((data, index) => (
                <NextLink key={index} href={data.href} passHref>
                  <Link
                    px={3}
                    py={1}
                    lineHeight="inherit"
                    rounded="md"
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.100', 'gray.900')
                    }}
                    onClick={() => onClose()}
                  >
                    {data.label}
                  </Link>
                </NextLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
