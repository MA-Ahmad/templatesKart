import { Fragment } from 'react';
import { Container, Box, chakra, Flex, Text, VStack, Avatar, Divider } from '@chakra-ui/react';

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: 'Ben Parker',
    position: 'CEO',
    company: 'Foodtesla',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
  {
    name: 'Jena Karlis',
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
      <Flex justifyContent="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3}>
          Testimonials
        </chakra.h3>
      </Flex>

      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <VStack spacing={3} pt={1} justifyContent="center">
            <Avatar
              size="xl"
              showBorder={true}
              borderColor="green.400"
              name="avatar"
              src={obj.image}
            />
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="lg">
                {obj.name}
              </Text>
              <Text fontWeight="medium" fontSize="sm" color="gray.400">
                {obj.position}, {obj.company}
              </Text>
            </Box>
            <Box textAlign="center" maxW="4xl">
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
            </Box>
          </VStack>
          {testimonials.length - 1 !== index && <Divider my={6} />}
        </Fragment>
      ))}
    </Container>
  );
};

export default Testimonials;
