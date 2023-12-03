import {
  chakra,
  Box,
  Text,
  Stack,
  Flex,
  Link,
  Badge,
  Avatar,
  Heading,
  Container,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiMessenger } from 'react-icons/si';

const userProfile = {
  name: 'Muhammad Ahmad',
  username: '@ahmad',
  desciption:
    'Actress, musician, songwriter and artist. PM for work inquires or Actress, musician, songwriter and artist. PM for work inquires or',
  accounts: [
    {
      url: '#',
      label: 'Github Account',
      type: 'gray',
      icon: <FaGithub />
    },
    {
      url: '#',
      label: 'Twitter Account',
      type: 'twitter',
      icon: <FaTwitter />
    },
    {
      url: '#',
      label: 'Messenger Account',
      type: 'messenger',
      icon: <SiMessenger />
    },
    {
      url: '#',
      label: 'LinkedIn Account',
      type: 'linkedin',
      icon: <FaLinkedin />
    },
    {
      url: '#',
      label: 'Facebook Account',
      type: 'facebook',
      icon: <FaFacebook />
    }
  ]
};

export default function TrainerProfile() {
  return (
    <Container maxW={'6xl'} p={10}>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Trainer profile
      </chakra.h1>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="lg"
        rounded="lg"
        p={{ base: 4, md: 6 }}
        textAlign="center"
      >
        <Stack direction="column" alignItems="center" flex={1}>
          <Avatar
            size="xl"
            src={
              'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&w=200&h=200&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
            }
            alt="Avatar Alt"
            mb={2}
            pos="relative"
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3
            }}
          />
          <Heading fontSize="2xl" fontFamily="body">
            {userProfile.name}
          </Heading>
          <Text fontWeight={600} color="gray.500" mb={4}>
            {userProfile.username}
          </Text>
        </Stack>
        <Stack direction="column" flex={2} justifyContent="center" spacing={3}>
          <Text
            textAlign="center"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            noOfLines={4}
          >
            {userProfile.desciption}
          </Text>

          <Flex align="center" justifyContent="center" direction="row" flexWrap="wrap">
            <Badge
              px={2}
              py={1}
              m={1}
              bg={useColorModeValue('gray.100', 'gray.800')}
              fontWeight="400"
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              m={1}
              bg={useColorModeValue('gray.100', 'gray.800')}
              fontWeight="400"
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              m={1}
              bg={useColorModeValue('gray.100', 'gray.800')}
              fontWeight="400"
            >
              #music
            </Badge>
          </Flex>
          <Stack direction="row" justifyContent="center">
            {userProfile.accounts.map((sc, index) => (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                size="md"
                rounded="md"
                colorScheme={sc.type}
                icon={sc.icon}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
