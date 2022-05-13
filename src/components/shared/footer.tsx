import { Stack, IconButton, Link, Box, Text, useColorModeValue, Container } from '@chakra-ui/react';
import NextImage from 'next/image';
import siteConfig from '../../utils/site-config';
import { BUY_ME_A_COFFEE_LINK, GITHUB_BASE_URL } from 'data/constants';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Footer = () => {
  return (
    <Container maxW="1280px">
      <Stack
        as="footer"
        spacing={3}
        py={6}
        justify="space-between"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <Text textAlign="center" fontSize="sm" color={useColorModeValue('gray.500', 'gray.200')}>
          Made with ❤️ for a better web by{' '}
          <Link href={GITHUB_BASE_URL} _hover={{ textDecoration: 'underline' }} isExternal>
            {' '}
            Muhammad Ahmad{' '}
          </Link>
        </Text>
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="full"
              {...iconProps}
            />
          ))}
        </Box>

        <Link href={BUY_ME_A_COFFEE_LINK} isExternal>
          <NextImage
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            height={40}
            width={142.47}
          />
        </Link>
      </Stack>
    </Container>
  );
};

export default Footer;
