import { Container, Text, VStack, Box, Avatar, Icon, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { FaQuoteRight } from 'react-icons/fa';

interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: 'Ben Parker',
  position: 'CEO',
  company: 'Foodtesla',
  image:
    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
  content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
};

const Testimonial = () => {
  return (
    <Container maxW="2xl" p={5}>
      <DottedBox />
      <VStack spacing={3}>
        <Icon
          as={FaQuoteRight}
          w={8}
          h={8}
          color={useColorModeValue('gray.600', 'gray.300')}
          zIndex={5}
        />
        <Text p={5} color={useColorModeValue('gray.600', 'gray.300')} zIndex={5}>
          {testimonial.content}
        </Text>
        <VStack alignItems="center">
          <Avatar name="avatar" src={testimonial.image} size="lg" />
          <Box textAlign="center">
            <Text fontWeight="bold" fontSize="lg">
              {testimonial.username}
            </Text>
            <Text fontSize="md" color="gray.500">
              {testimonial.position} at {testimonial.company}
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box height="full" maxW="700px" zIndex={-1}>
      <Box position="absolute" left="0" top="-30px">
        <svg
          color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
          width="200"
          height="250"
          fill="none"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
        </svg>
      </Box>
    </Box>
  );
}
export default Testimonial;
