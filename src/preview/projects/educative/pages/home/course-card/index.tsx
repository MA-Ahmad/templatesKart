import { Container } from '@chakra-ui/react';
import CourseGrid from './Grid';
import Card from './Card';
import { courses } from './data';

const CardLayout = () => (
  <Container maxW={'6xl'} p={10}>
    <CourseGrid>
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </CourseGrid>
  </Container>
);

export default CardLayout;
