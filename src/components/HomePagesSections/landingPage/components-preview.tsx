import React from 'react';
import { chakra, Box, SimpleGrid, VStack, Link, Button } from '@chakra-ui/react';
import MagicLink from './components/magic-link';
import StatsWithIcons from './components/stats';
import Testimonial from './components/testimonial';
import ProductCard from './components/product-card';
import UserCard from './components/user-card';
import Pagination from './components/pagination';
import NotificationsList from './components/notifications';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';

const ComponentsPreview = () => {
  const linkColor = useLinkColor();

  return (
    <Box maxW="1280px" marginInline="auto" pt={{ base: 5, md: 0 }} pb={14}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 12, md: 3 }}>
        <MagicLink />
        <StatsWithIcons />
        <UserCard />
        <ProductCard />
        <Testimonial />
        <VStack spacing={8}>
          <Pagination />
          <NotificationsList />
        </VStack>
      </SimpleGrid>
      <NextLink href="/components" passHref>
        <chakra.button
          d="flex"
          w="max-content"
          marginInline="auto"
          mt={10}
          bg={linkColor}
          color="white"
          lineHeight={1.2}
          alignItems="center"
          h={12}
          px={6}
          size="lg"
          rounded="md"
          fontWeight="bold"
          textTransform="uppercase"
          boxShadow="md"
          _hover={{ opacity: 0.8 }}
          as={Link}
        >
          See all components
        </chakra.button>
      </NextLink>
    </Box>
  );
};

export default ComponentsPreview;
