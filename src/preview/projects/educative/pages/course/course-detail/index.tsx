import { Container } from '@chakra-ui/react';
import DetailSection from './DetailSection';

const course = {
  id: '1',
  name: 'Bamboo Tan',
  currency: 'USD',
  price: 199,
  flag: 'new',
  imageUrl:
    'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  rating: 4,
  ratingCount: 1,
  description:
    'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.'
};

const Index = () => (
  <Container maxW={'6xl'} p={10}>
    <DetailSection course={course} />
  </Container>
);

export default Index;
