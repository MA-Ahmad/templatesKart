import * as React from 'react';
import {
  Container,
  Box,
  Link,
  LinkProps,
  SimpleGrid,
  IconButton,
  Stack,
  Text,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { components } from 'data/components';
import { projects } from 'data/projects';
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
    <Container maxW="1280px" pt={10} pb={5} px={{ base: 5, md: 10 }}>
      <SimpleGrid columns={[1, 2, 4, 4]} spacingX="50px" pb={6}>
        <Stack mb={['20px', '20px', 0, 0]}>
          <Text as={Link} href="/components" fontSize="lg" fontWeight="bold">
            Components
          </Text>
          {components.slice(0, 4).map((component) => (
            <CustomLink href={`/components/${component.id}`}>{component.name}</CustomLink>
          ))}
          <CustomLink href="/components">See more ...</CustomLink>
        </Stack>

        <Stack mb={['20px', '20px', 0, 0]}>
          <Text as={Link} href="/projects" fontSize="lg" fontWeight="bold">
            Projects
          </Text>
          {projects.slice(0, 4).map((project) => (
            <CustomLink href={`/projects/${project.id}`}>{project.name}</CustomLink>
          ))}
          <CustomLink href="/projects">See more ...</CustomLink>
        </Stack>
        <Stack mb={['20px', '20px', 0, 0]}>
          <Text as={Link} href="/components" fontSize="lg" fontWeight="bold">
            Social
          </Text>
          <Box>
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
        </Stack>
        <Stack>
          <Text as={Link} href="/components" fontSize="lg" fontWeight="bold">
            Support
          </Text>
          <Link href={BUY_ME_A_COFFEE_LINK} isExternal>
            <NextImage
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              height={40}
              width={142.47}
            />
          </Link>
        </Stack>
      </SimpleGrid>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="center">
        <Text
          textAlign="center"
          fontSize="md"
          color={useColorModeValue('gray.500', 'gray.200')}
          pt={1}
        >
          Made with ❤️ for a better web by{' '}
          <Link href={GITHUB_BASE_URL} _hover={{ textDecoration: 'underline' }} isExternal>
            {' '}
            Muhammad Ahmad{' '}
          </Link>
        </Text>
      </Stack>
    </Container>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      fontSize="md"
      w="max-content"
      fontWeight="light"
      _hover={{ textDecoration: 'underline' }}
      {...props}
    >
      {children}
    </Link>
  );
};
export default Footer;
