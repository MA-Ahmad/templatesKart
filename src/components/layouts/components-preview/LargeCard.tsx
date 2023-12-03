import React from 'react';
import {
  HStack,
  VStack,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  Tag
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import { ComponentContainer } from 'data/components/types';
import { MotionBox } from 'components/shared/animations/motion';

const Card = ({ component }: { component: ComponentContainer }) => {
  const linkColor = useLinkColor();

  return (
    <NextLink href={`/components/${component.id}`} passHref>
      <Link rounded="lg">
        <MotionBox whileHover={{ translateY: -5 }} transition={{ duration: 0.3 }}>
          <Stack
            direction="column"
            padding={2}
            rounded="lg"
            _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }}
            role="group"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              rounded="lg"
              p={2}
              pt={7}
              pb={5}
              bg={useColorModeValue('gray.200', 'gray.700')}
              _groupHover={{ border: '1px solid', borderColor: linkColor }}
              position="relative"
              h="10rem"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              {component.svgIcon}
            </Flex>
            <VStack spacing={1} align="start" maxW="lg" h="100%">
              <HStack spacing={2}>
                <Text as="h3" fontWeight="bold" fontSize="md" noOfLines={2} color={linkColor}>
                  {component.name}
                </Text>
                {component.hasAnyNewComponent && (
                  <Tag size="xs" colorScheme="red">
                    New
                  </Tag>
                )}
              </HStack>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.200')}>
                {component.data.length} Components
              </Text>
            </VStack>
          </Stack>
        </MotionBox>
      </Link>
    </NextLink>
  );
};

export default Card;
