import {
  Box,
  Heading,
  Spacer,
  Button,
  VStack,
  HStack,
  Grid,
  Text,
  Link,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';

interface CardProps {
  title: string;
  username: string;
  userProfile: string;
  publishedDate: string;
  tagList: string[];
  headerImage: string;
  postLink: string;
  readingTime: number;
  reactionsCount: number;
  commentsCount: number;
}

function Card({
  title,
  username,
  userProfile,
  publishedDate,
  tagList,
  headerImage,
  postLink,
  readingTime,
  reactionsCount,
  commentsCount
}: CardProps) {
  return (
    <Box
      mt="3"
      as="article"
      bg="white"
      borderRadius="md"
      overflow="hidden"
      border="1px solid #08090a1a"
    >
      {headerImage ? <Image alt="header image" src={headerImage} /> : ''}

      <Grid
        templateColumns={{ base: '1fr', sm: 'max-content 1fr' }}
        gap={2}
        p={4}
        bg={useColorModeValue('gray.100', 'gray.800')}
      >
        <HStack d={{ base: 'flex', sm: 'block' }}>
          <Image alt="user profile" src={userProfile} w="8" borderRadius="full" />
          <VStack align="flex-start" spacing={0} d={{ base: 'flex', sm: 'none' }}>
            <Text color="#4d5760" fontSize="14px" fontWeight="500">
              {username}
            </Text>
            <Text color="#4d5760" fontSize="12px">
              {publishedDate}
            </Text>
          </VStack>
        </HStack>
        <Box>
          <VStack align="flex-start" spacing={0} d={{ base: 'none', sm: 'flex' }}>
            <Text color="#4d5760" fontSize="14px" fontWeight="500">
              {username}
            </Text>
            <Text color="#4d5760" fontSize="12px">
              {publishedDate}
            </Text>
          </VStack>
          <Heading fontSize={{ base: 'xl', sm: '3xl' }} mt="3">
            <Link href={postLink} _hover={{ color: '#323ebe', textDecoration: 'none' }} isExternal>
              {title}
            </Link>
          </Heading>
          <HStack mt="3" fontSize="14px" color="#64707d">
            {tagList!.map((tag, idx) => (
              <Text as={Link} key={idx}>
                #{tag}
              </Text>
            ))}
          </HStack>
          <HStack mt={3}>
            <Button
              leftIcon={<BsHeart />}
              ml={-2}
              bg="transparent"
              padding="6px 8px"
              height="auto"
              fontWeight="normal"
              fontSize="14px"
              lineHeight="1.2"
              rounded="md"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
            >
              {reactionsCount}
              <Box ml="2" as="span" d={{ base: 'none', sm: 'block' }}>
                reactions
              </Box>
            </Button>
            <Button
              leftIcon={<FaRegComment />}
              bg="transparent"
              padding="6px 8px"
              height="auto"
              fontWeight="normal"
              fontSize="14px"
              lineHeight="1.2"
              rounded="md"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
            >
              {commentsCount}{' '}
              <Box ml="2" as="span" d={{ base: 'none', sm: 'block' }}>
                comments
              </Box>
            </Button>
            <Spacer />
            <Text fontSize="12px">{readingTime} min read</Text>
            <Button
              bg={useColorModeValue('gray.200', 'gray.600')}
              padding="8px 12px"
              height="auto"
              fontWeight="normal"
              fontSize="14px"
              rounded="md"
              _hover={{ bg: useColorModeValue('gray.300', 'gray.500') }}
            >
              Save
            </Button>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
}

export default Card;
