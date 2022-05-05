import { Stack, HStack, Link, Divider, Image, IconButton } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaTwitter } from 'react-icons/fa';

const links = ['Blog', 'Documentation', 'Careers', 'Sign up', 'Terms of use', 'Privacy policy'];
const accounts = [
  {
    url: 'https://github.com/MA-Ahmad/templateskart',
    label: 'Github Account',
    type: 'gray',
    icon: <FaGithub />
  },
  {
    url: 'https://twitter.com/muhammad_ahmaad',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <FaTwitter />
  },
  {
    url: 'https://linkedin.com/in/muhammad-ahmad20',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <FaLinkedin />
  }
];

const Footer = () => {
  return (
    <Stack
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Image w="100px" src="/assets/images/layouts/hero_image.png" alt="TemplatesKart" />

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: 'none', md: 'flex' }}>
        {links.map((link, index) => (
          <Link key={index} href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            {link}
          </Link>
        ))}
      </HStack>

      {/* Mobile and Tablet Screens */}
      <Stack d={{ base: 'flex', md: 'none' }} alignItems="center">
        <HStack alignItems="center">
          <Link href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            Sign up
          </Link>
          <Divider h="1rem" orientation="vertical" />
          <Link href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            Blog
          </Link>
          <Divider h="1rem" orientation="vertical" />
          <Link href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            Career
          </Link>
        </HStack>
        <HStack alignItems="center">
          <Link href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            Documentation
          </Link>
          <Divider h="1rem" orientation="vertical" />
          <Link href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            Terms of use
          </Link>
        </HStack>
        <HStack alignItems="center">
          <Link href="#" fontSize="md" _hover={{ textDecoration: 'underline' }}>
            Privacy policy
          </Link>
        </HStack>
      </Stack>

      <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
