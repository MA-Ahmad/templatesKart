import * as React from 'react';
import {
  Container,
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
  Image
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

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
    logo: '',
    link: 'https://test.com/',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    technologies: ['rails', 'react']
  },
  {
    id: 2,
    title: 'Project2',
    link: 'https://www.test.com',
    logo: '',
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
      <Container maxW={'7xl'} py={10} px={10}>
        <VStack spacing={4}>
          {projectsList.map(({ id, title, desc, logo, link, technologies }) => (
            <motion.div layout onClick={toggleOpen} key={id}>
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
                <VStack align="start" justify="flex-start">
                  <VStack spacing={0} align="start">
                    <motion.div layout>
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
                          {technologies.map((tech) => (
                            <Tag size="sm" colorScheme={'gray'}>
                              {tech}
                            </Tag>
                          ))}
                        </HStack>
                      </HStack>
                    </motion.div>
                    <AnimatePresence>
                      <motion.div
                        layout
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                      >
                        {!isOpen && (
                          <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                            {desc}
                          </Text>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                      >
                        {isOpen && (
                          <Text fontSize="sm" color={textColor}>
                            {desc}
                          </Text>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </VStack>
                </VStack>
              </HStack>
            </motion.div>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default ProjectCard;
