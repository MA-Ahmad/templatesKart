import { Container, Heading, Flex, Text } from '@chakra-ui/react';
import Card from './card';

const reviewData = {
  imageSrc: '/assets/images/projects/airbnb/review-image.jpg',
  avatarSrc: '',
  review: `What a wonderful little cottage! More spacious and adorable than the
            pictures show. We never met our hosts, but we felt welcomed and...`,
  name: 'Lesley',
  country: 'United Kingdom'
};

const Reviews = () => {
  return (
    <Container maxW={'5xl'} p={10}>
      <Heading as="h3" size="lg" fontWeight="bold" textAlign="left" mb={{ base: '4', md: '2' }}>
        What guests are saying about homes in the United States
      </Heading>
      <Flex alignItems={{ base: 'start', md: 'center' }}>
        <svg
          viewBox="0 0 24 24"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{ height: '24px', width: '24px', fill: '#FFB400' }}
        >
          <path
            d="m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01"
            fill="#484848"
          ></path>
          <path d="m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z"></path>
        </svg>
        <Text pl={2} textAlign="left">
          United States homes were <strong>rated 4.8 out of 5 stars</strong> with{' '}
          <strong>42,500,000+ reviews</strong>
        </Text>
      </Flex>
      <Flex
        as="section"
        alignItems="start"
        justifyContent="between"
        flexDirection={{ base: 'column', md: 'row' }}
        my={{ base: '1.5rem', md: '2.5rem' }}
      >
        {Array.from(Array(3).keys()).map((id) => {
          return <Card key={id} {...reviewData} />;
        })}
      </Flex>
    </Container>
  );
};

export default Reviews;
