import React from 'react';
import { HStack, VStack, Text, useColorModeValue, Box, Link, Icon } from '@chakra-ui/react';
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
            p={{ base: 2, sm: 6 }}
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
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Box
                bg={'gray.400'}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              ></Box>
              <Icon as={component.icon} w={5} h={5} />
            </Box>
            <VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
              <VStack spacing={0} align="start" flexGrow={1}>
                <Text fontWeight="bold" fontSize="md" noOfLines={2} color={linkColor}>
                  {component.name}
                </Text>
                <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.200')}>
                  {component.data.length} Components
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </MotionBox>
      </Link>
    </NextLink>
  );
};

export default Card;
