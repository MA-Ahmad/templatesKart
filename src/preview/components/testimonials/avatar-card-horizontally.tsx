import {
  Container,
  Text,
  HStack,
  Flex,
  Box,
  Avatar,
  Icon,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { ImQuotesRight } from 'react-icons/im';

interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    username: 'Ben Parker',
    position: 'CEO',
    company: 'Foodtesla',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
  {
    username: 'Jena Karlis',
    position: 'GM',
    company: 'Olpers',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.`
  }
];

const Testimonials = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={3} my={2}>
        {testimonials.map((obj, index) => (
          <Flex key={index} direction="column">
            <Box
              p={5}
              bg={useColorModeValue('white', 'blackAlpha.400')}
              color="gray.500"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
            >
              {obj.content}
            </Box>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p={5}
              bg={useColorModeValue('gray.300', 'gray.800')}
              borderBottomLeftRadius="lg"
              borderBottomRightRadius="lg"
            >
              <HStack spacing={2}>
                <Avatar name="avatar" src={obj.image} />
                <Flex direction="column">
                  <Text fontWeight="bold" fontSize="lg">
                    {obj.username}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {obj.position} at {obj.company}
                  </Text>
                </Flex>
              </HStack>
              <Icon as={ImQuotesRight} w={8} h={8} />
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;
