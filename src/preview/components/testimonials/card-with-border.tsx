import { Container, Text, VStack, Stack, Avatar, Icon, useColorModeValue } from '@chakra-ui/react';
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

const TestimonialCard = () => {
  return (
    <Container maxW="5xl" p={{ base: 10, md: 14 }}>
      <VStack
        spacing={3}
        p={4}
        bg={useColorModeValue('white', 'blackAlpha.600')}
        border="3px solid"
        borderColor="green.400"
        maxW="xl"
        margin="0 auto"
        boxShadow="lg"
        pos="relative"
      >
        <Icon
          as={FaQuoteRight}
          w={10}
          h={10}
          color="green.400"
          left="-1.3rem"
          position="absolute"
          top="-1.5rem"
        />
        <Stack direction="column" spacing={5}>
          <Text color="gray.500">
            Ahmad’s work is detailed and overwhelming. He guided me step-by-step, from basics to
            advanced concepts. He ensured I understood everything before going deeper.
          </Text>
          <Text color="gray.500">Thanks to Ahmad, I got a frontend job!</Text>
          <Text fontWeight="bold" fontSize="lg" align="right" mr="3rem !important">
            {testimonial.username}
          </Text>
        </Stack>
        <Avatar
          name="avatar"
          src={testimonial.image}
          showBorder={true}
          borderColor="green.400"
          size="xl"
          pos="absolute"
          right="-48px"
          bottom="-20px"
          shadow="lg"
        />
      </VStack>
    </Container>
  );
};

export default TestimonialCard;
