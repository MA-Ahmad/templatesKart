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
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <VStack
        spacing={3}
        p={{ base: 4, sm: 8 }}
        bg={useColorModeValue('white', 'blackAlpha.600')}
        borderTop="2px solid"
        borderColor="green.400"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius="lg"
        maxW="25rem"
        margin="0 auto"
        boxShadow="lg"
      >
        <Icon as={FaQuoteRight} w={8} h={8} color="green.400" />
        <Text p={5} color="gray.500">
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

export default Testimonial;
