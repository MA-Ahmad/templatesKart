import React from 'react';
import { HStack, VStack, Text, useColorModeValue, Flex, Link, Icon, Tag } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import { ComponentContainer } from 'data/components/types';
import { MotionBox } from 'components/shared/animations/motion';

const Card = ({ component }: { component: ComponentContainer }) => {
  const linkColor = useLinkColor();

  return (
    <NextLink href={`/components/${component.id}`} passHref>
      <Link rounded="md">
        <MotionBox whileHover={{ translateY: -5 }} transition={{ duration: 0.3 }}>
          <HStack
            p={6}
            bg={useColorModeValue('gray.100', 'gray.800')}
            rounded="md"
            boxShadow={useColorModeValue(
              '0 4px 6px rgba(160, 174, 192, 0.6)',
              '2px 4px 6px rgba(9, 17, 28, 0.9)'
            )}
            w="100%"
            textAlign="left"
            align="start"
            spacing={4}
            role="group"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              rounded="lg"
              p={2}
              bg={useColorModeValue('gray.400', 'gray.600')}
              _groupHover={{ bg: linkColor }}
              position="relative"
              w={12}
              h={12}
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Icon as={component.icon} w={6} h={6} color="white" />
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
          </HStack>
        </MotionBox>
      </Link>
    </NextLink>
  );
};

export default Card;
