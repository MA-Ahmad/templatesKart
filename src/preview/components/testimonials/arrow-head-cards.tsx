import {
  Container,
  Box,
  chakra,
  Flex,
  Text,
  Stack,
  Avatar,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';

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
    company: 'Olpers',
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
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
  {
    name: 'Vicky Hald',
    position: 'CFO',
    company: 'Olpers',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
  {
    name: 'Vicky Hald',
    position: 'CFO',
    company: 'Olpers',
    image:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  }
];

const Testimonials = () => {
  return (
    <Container maxW="5xl" py={10} px={6} bg={useColorModeValue('gray.200', 'gray.600')}>
      <Flex justifyContent="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} textAlign="center">
          What people are saying about Us
        </chakra.h3>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={1} mt={12} mb={4}>
        {testimonials.map((obj, index) => (
          <Stack
            key={index}
            direction={{ base: 'column', sm: 'row' }}
            spacing={2}
            mb={5}
            justifyContent="center"
          >
            <Stack
              maxW="345px"
              boxShadow="lg"
              rounded="md"
              p={6}
              pos="relative"
              bg={useColorModeValue('white', 'gray.800')}
              _after={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('white', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: '10px 0 10px 10px',
                position: 'absolute',
                top: { base: 'unset', sm: '45%' },
                right: { base: 'unset', sm: '-10px' },
                left: { base: '48%', sm: 'unset' },
                bottom: { base: '-15px', sm: 'unset' },
                transform: { base: 'rotate(90deg)', sm: 'unset' },
                display: 'block'
              }}
            >
              <Text fontWeight="medium" fontSize="sm">
                {obj.content}
              </Text>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              p={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Avatar
                size="lg"
                showBorder={true}
                borderColor="green.400"
                name="avatar"
                src={obj.image}
              />
              <Box textAlign="center">
                <Text fontWeight="bold" fontSize="md">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="xs" color="gray.400">
                  {obj.position}, {obj.company}
                </Text>
              </Box>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;
