import * as React from 'react';
import {
  chakra,
  Container,
  HStack,
  VStack,
  Text,
  Tag,
  Link,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

interface ProjectCardProps {
  id: number;
  title: string;
  desc: string;
  logo: string;
  link: string;
  technologies: string[];
}

const projectsList: ProjectCardProps[] = [
  {
    id: 1,
    title: 'Project1',
    logo: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    link: 'https://www.test.com',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    technologies: ['rails', 'react']
  },
  {
    id: 2,
    title: 'Project2',
    link: 'https://www.test.com',
    logo: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
    technologies: ['ruby', 'javascript']
  }
];

const ProjectCard = () => {
  const textColor = useColorModeValue('gray.500', 'gray.200');
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Container maxW="4xl" p={{ base: 5, md: 10 }}>
        <VStack spacing={4}>
          {projectsList.map(({ id, title, desc, logo, link, technologies }) => (
            <chakra.div onClick={toggleOpen} key={id}>
              <HStack
                p={4}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="xl"
                borderWidth="1px"
                borderColor={useColorModeValue('gray.100', 'gray.700')}
                w="100%"
                h="100%"
                textAlign="left"
                align="start"
                spacing={4}
                cursor="pointer"
                _hover={{ shadow: 'lg' }}
              >
                <Image
                  src={logo}
                  size="sm"
                  width={33}
                  height={33}
                  layout="fixed"
                  rounded="md"
                  objectFit="cover"
                  alt="cover image"
                  fallbackSrc="https://via.placeholder.com/150"
                />
                <VStack align="start" justifyContent="flex-start">
                  <VStack spacing={0} align="start">
                    <HStack>
                      <Text
                        as={Link}
                        href={link}
                        fontWeight="bold"
                        fontSize="md"
                        noOfLines={1}
                        onClick={(e) => e.stopPropagation()}
                        isExternal
                      >
                        {title}
                      </Text>
                      <HStack spacing="1">
                        {technologies.map((tech, index) => (
                          <Tag key={index} size="sm" colorScheme="gray">
                            {tech}
                          </Tag>
                        ))}
                      </HStack>
                    </HStack>

                    {!isOpen && (
                      <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                        {desc}
                      </Text>
                    )}

                    {isOpen && (
                      <Text fontSize="sm" color={textColor}>
                        {desc}
                      </Text>
                    )}
                  </VStack>
                </VStack>
              </HStack>
            </chakra.div>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default ProjectCard;
