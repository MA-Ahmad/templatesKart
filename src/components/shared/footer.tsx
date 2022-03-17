import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
  Container
} from '@chakra-ui/react';
import siteConfig from '../../utils/site-config';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Footer = () => {
  return (
    <Container maxW={'1280px'}>
      <Stack
        as="footer"
        isInline
        spacing={[1, 2]}
        p={6}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          flexDirection={['column', 'column', 'row']}
          flexFlow={['column-reverse', 'column-reverse']}
          justifyContent={['center', 'space-between']}
          alignItems="center"
          w="100%"
        >
          <Text textAlign="center" fontSize="sm" color={useColorModeValue('gray.500', 'gray.200')}>
            {siteConfig.copyright}
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
                {...iconProps}
              />
            ))}
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Footer;
