import React from 'react';
import { Stack, IconButton, Link, Container, useColorModeValue } from '@chakra-ui/react';
import siteConfig from './site-config';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Footer = (props) => {
  return (
    <Container maxW="7xl" px={[6, 12, 12]} py={16}>
      <Stack
        as="footer"
        isInline
        spacing={[1, 2]}
        p={4}
        justifyContent="center"
        alignItems="center"
        bg={useColorModeValue('gray.100', 'gray.700')}
        rounded="md"
        {...props}
      >
        {siteConfig().author.accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            size="lg"
            colorScheme={sc.type}
            icon={sc.icon}
            {...iconProps}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Footer;
