import {
  Container,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';

const newContent = [
  {
    link: 'https://mahmad.me/blog/started-2022-by-updating-portfolio-website-1jde-temp-slug-4553258',
    text: 'Started 2022 by updating portfolio website',
    showNewTag: true
  },
  {
    link: 'https://mahmad.me/changelog',
    text: 'Created changelog page to track meaningful changes',
    showNewTag: true
  }
];

const ContentBox = () => {
  return (
    <Container maxW="7xl" p="12">
      <Stack
        mx={[0, 0, 10]}
        padding={4}
        align="start"
        borderLeft="4px solid"
        borderColor="blue.400"
        color="whatsapp"
        _hover={{ shadow: 'lg' }}
        backgroundColor={useColorModeValue('gray.100', '#1e2533')}
        rounded="sm"
        fontSize="md"
      >
        <Text
          textAlign="center"
          color="#53c8c4"
          fontWeight="bold"
          fontSize={['md', 'lg']}
          variant="gradient"
          fromcolor="blue.400"
          tocolor="red.500"
        >
          New year, new content:
        </Text>
        <UnorderedList textAlign="left" paddingLeft={5} m={0}>
          {newContent.map((content, index) => (
            <ListItem key={index}>
              <Link href="#" color="blue.400">
                {content.text}
                {content.showNewTag && (
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                )}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Stack>
    </Container>
  );
};

export default ContentBox;
