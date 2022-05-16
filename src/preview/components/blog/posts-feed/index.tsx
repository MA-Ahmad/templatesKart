import { Container, Box } from '@chakra-ui/react';
import { postsData } from './data';
import Card from './card';

const Index = () => {
  return (
    <Container maxW="4xl" px={{ base: 5, md: 8 }} py={16} mx="auto">
      <Box borderRadius="md">
        {postsData.map((post, index) => (
          <Card
            key={post.id}
            title={post.title}
            username={post.username}
            tagList={post.tagList}
            readingTime={post.readingTime}
            commentsCount={post.commentsCount}
            reactionsCount={post.reactionsCount}
            postLink={post.postLink}
            publishedDate={post.publishedDate}
            userProfile={post.userProfile}
            headerImage={index === 0 ? post.headerImage : ''}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Index;
