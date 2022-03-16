import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Link,
  Stack,
  Text,
  StackProps,
  useColorModeValue,
  Box,
  Icon,
  Flex
} from '@chakra-ui/react';
import { useLinkColor, useHoverLinkColor } from 'components/theme';
import { MotionBox } from 'components/shared/animations/motion';
import { projects } from 'data/projects';
import { components } from 'data/components';
import { Project } from 'data/projects/types';
import { ComponentContainer } from 'data/components/types';
import UnderlinedText from 'components/shared/underlined-text';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Sidebar = (props: StackProps) => {
  const [component, setComponent] = useState<ComponentContainer | null>(null);
  const { asPath } = useRouter();
  const categoryColor = useColorModeValue('gray.800', 'gray.200');
  const linkColor = useLinkColor();

  useEffect(() => {
    setComponent(components.filter((c) => c.id === asPath.split('/')[2])[0]);
  }, [asPath]);

  return (
    <Stack as={'nav'} spacing={6} maxW={{ md: '3xs' }} w={'full'} flexShrink={0} {...props}>
      {component && (
        <Stack key={component.id}>
          <NextLink href={`${component.id}`} passHref>
            <Link>
              <MotionBox whileHover={{ translateX: 5 }}>
                <Flex alignItems="center">
                  <Flex alignItems="center">
                    <Box as="span" fontSize="md">
                      <Text
                        textTransform={'uppercase'}
                        color={categoryColor}
                        fontWeight="extrabold"
                        fontSize={'md'}
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
              </MotionBox>
            </Link>
          </NextLink>
          {/* TODO:  */}
          <Stack spacing={1} mt={'1.5rem !important'}>
            {component.data.map((c) => (
              <MotionBox key={c.id} whileHover={{ translateX: 3 }} _hover={{ shadow: 'sm' }}>
                <Box
                  fontSize={'sm'}
                  rounded={'md'}
                  px={3}
                  py={1}
                  _hover={{
                    bg: useColorModeValue('gray.100', 'gray.700')
                  }}
                  d="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="md" ml={3}>
                    {c.name}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </Stack>
        </Stack>
      )}
      <Stack>
        <Text
          textTransform={'uppercase'}
          color={categoryColor}
          fontWeight={'extrabold'}
          fontSize={'md'}
          letterSpacing={1}
        >
          <UnderlinedText color={linkColor}>Other Components</UnderlinedText>
        </Text>
        <Stack spacing={1} mt={'1.5rem !important'}>
          {component &&
            components
              .filter((c) => c.id !== component.id)
              .map((component) => (
                <NextLink key={component.id} href={`${component.id}`} passHref>
                  <Link
                    px={3}
                    py={1}
                    _hover={{
                      color: linkColor
                    }}
                  >
                    <MotionBox whileHover={{ translateX: 5 }}>
                      <Flex alignItems="center">
                        <Icon as={AiOutlineArrowRight} w={5} h={5} />
                        <Box as="span" fontSize="md" ml={3}>
                          <Text
                            textTransform={'uppercase'}
                            fontWeight={'semibold'}
                            fontSize={'md'}
                            letterSpacing={1}
                            _hover={{
                              color: linkColor
                            }}
                          >
                            {component.name}
                          </Text>
                        </Box>
                      </Flex>
                    </MotionBox>
                  </Link>
                </NextLink>
              ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
