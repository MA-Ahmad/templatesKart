import { useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Link,
  Stack,
  HStack,
  Tag,
  Text,
  StackProps,
  Box,
  Icon,
  Flex,
  BoxProps,
  useColorModeValue
} from '@chakra-ui/react';
import { useLinkColor } from 'components/theme';
import { MotionBox } from 'components/shared/animations/motion';
import { fadeInUp } from 'components/shared/animations/framerAnimations';
import { components } from 'data/components';
import { ComponentContainer } from 'data/components/types';
import UnderlinedText from 'components/shared/underlined-text';
import { FaChevronRight } from 'react-icons/fa';

export const Sidebar = (props: StackProps) => {
  const [component, setComponent] = useState<ComponentContainer | null>(null);
  const { asPath } = useRouter();
  const categoryColor = useColorModeValue('gray.800', 'gray.200');
  const linkColor = useLinkColor();

  useEffect(() => {
    setComponent(components.filter((c) => c.id === asPath.split('/')[2])[0]);
  }, [asPath]);

  const navigateToComponent = (filename: string) => {
    const divElement: HTMLElement | null = document.getElementById(filename);
    window.scrollTo({ top: divElement!.offsetTop, behavior: 'smooth' });
  };

  return (
    <Stack as="nav" spacing={6} maxW={{ md: '3xs' }} w="full" flexShrink={0} {...props}>
      {component && (
        <Stack key={component.id}>
          <NextLink href={`${component.id}`} passHref>
            <Link>
              <CustomMotionBox whileHover={{ translateX: 5 }}>
                <Flex alignItems="center">
                  <Flex alignItems="center">
                    <Box as="span" fontSize="md">
                      <Text
                        textTransform="uppercase"
                        color={categoryColor}
                        fontWeight="extrabold"
                        fontSize="md"
                        letterSpacing={1}
                      >
                        <UnderlinedText color={linkColor}>{component.name}</UnderlinedText>
                      </Text>
                    </Box>
                  </Flex>
                  <Flex
                    ml={5}
                    fontWeight="normal"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    rounded="full"
                    bg={useColorModeValue('gray.200', 'gray.600')}
                    justifyContent="center"
                    alignItems="center"
                    lineHeight="1"
                    w={5}
                    h={5}
                  >
                    <Text fontSize="sm">{component.data.length}</Text>
                  </Flex>
                </Flex>
              </CustomMotionBox>
            </Link>
          </NextLink>
          {/* TODO: Improve Component Sidebar UI */}
          <Stack spacing={1} mt="1.5rem !important">
            {component.data.map((c, index) => (
              <CustomMotionBox key={index} whileHover={{ translateX: 3 }} _hover={{ shadow: 'sm' }}>
                <Box
                  fontSize="sm"
                  rounded="md"
                  px={2}
                  py={1}
                  _hover={{
                    bg: useColorModeValue('gray.100', 'gray.700')
                  }}
                  d="flex"
                  cursor="pointer"
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() => navigateToComponent(c.filename)}
                >
                  <HStack spacing={2} alignItems="center">
                    <Icon as={FaChevronRight} w={3} h={3} color={linkColor} />
                    <HStack spacing={2} justifyContent="space-between">
                      <Text fontSize="md" noOfLines={2}>
                        {c.name}
                      </Text>
                      {c.isNewComponent && (
                        <Tag size="xs" colorScheme="red">
                          New
                        </Tag>
                      )}
                    </HStack>
                  </HStack>
                </Box>
              </CustomMotionBox>
            ))}
          </Stack>
        </Stack>
      )}
      <Stack>
        <CustomMotionBox>
          <Text
            textTransform="uppercase"
            color={categoryColor}
            fontWeight="extrabold"
            fontSize="md"
            letterSpacing={1}
          >
            <UnderlinedText color={linkColor}>Other Components</UnderlinedText>
          </Text>
        </CustomMotionBox>
        <Stack spacing={1} mt="1.5rem !important">
          {component &&
            components
              .filter((c) => c.id !== component.id)
              .map((component) => (
                <NextLink key={component.id} href={`${component.id}`} passHref>
                  <Link
                    px={2}
                    py={1}
                    _hover={{
                      color: linkColor
                    }}
                  >
                    <CustomMotionBox whileHover={{ translateX: 5 }}>
                      <Flex alignItems="center">
                        <Icon as={FaChevronRight} w={3} h={3} />
                        <HStack as="span" spacing={2} fontSize="md" ml={1}>
                          <Text
                            fontSize="md"
                            letterSpacing={1}
                            _hover={{
                              color: linkColor
                            }}
                          >
                            {component.name}
                          </Text>
                          {component.hasAnyNewComponent && (
                            <Tag size="xs" colorScheme="red">
                              <Text>New</Text>
                            </Tag>
                          )}
                        </HStack>
                      </Flex>
                    </CustomMotionBox>
                  </Link>
                </NextLink>
              ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

interface CustomMotionBoxProps extends BoxProps {
  children: ReactNode;
  whileHover?: any;
}

const CustomMotionBox = ({ children, ...props }: PropsWithChildren<CustomMotionBoxProps>) => {
  return (
    <MotionBox
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition="all 0.3s ease-in-out"
      {...props}
    >
      {children}
    </MotionBox>
  );
};
