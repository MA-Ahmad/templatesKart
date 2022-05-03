import { Fragment } from 'react';
import {
  VStack,
  useColorModeValue,
  Container,
  IconButton,
  Flex,
  Box,
  Text,
  List,
  ListItem,
  AspectRatio,
  Image,
  Skeleton
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { HiOutlineExternalLink } from 'react-icons/hi';

interface Project {
  title: string;
  imageLight: string;
  site: string;
  description: string;
  techStack: string[];
}

interface ProjectProps {
  project: Project;
}

const projects: Project[] = [
  {
    title: 'Project1',
    imageLight: '/assets/images/projects/my-website.png',
    site: 'https://mahmad.me',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    techStack: ['Rails', 'React', 'Javascript']
  },
  {
    title: 'Project2',
    imageLight: '/assets/images/projects/blog.png',
    site: 'https://mahmad.me',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,
    techStack: ['Rails', 'React', 'Javascript']
  }
];

const ProjectsList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <VStack spacing={8}>
        {projects.map((project, index) => (
          <Fragment key={index}>
            <ProjectLayoutMed project={project} />
            {index % 2 === 0 ? (
              <LeftProjectLayoutLarge project={project} />
            ) : (
              <RightProjectLayoutLarge project={project} />
            )}
          </Fragment>
        ))}
      </VStack>
    </Container>
  );
};

const ProjectLayoutMed = ({ project }: ProjectProps) => {
  return (
    <Flex
      display={['flex', 'flex', 'none']}
      rounded="xl"
      borderColor={useColorModeValue('gray.600', 'gray.700')}
      w="full"
      h="20rem"
      textAlign="left"
      align="start"
      shadow="md"
      _hover={{ border: 'md', shadow: 'lg' }}
      overflow="hidden"
      position="relative"
    >
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
          <Image
            src={project.imageLight}
            fallback={<Skeleton />}
            size="lg"
            width={'full'}
            height={'full'}
            position="absolute"
            rounded="xl"
            objectFit="cover"
            alt="cover image"
            opacity={0.5}
            _hover={{ opacity: 1 }}
          />
        </AspectRatio>
        <Box
          width={'full'}
          height={'full'}
          position="absolute"
          bg={useColorModeValue('gray.100', 'gray.900')}
          opacity={useColorModeValue('0.5', '1')}
        ></Box>
      </a>
      <Box
        width={['full', '70%']}
        rounded="lg"
        my="auto"
        px="6"
        py="3"
        position="relative"
        zIndex="10"
      >
        <Box>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color={useColorModeValue('gray.900', 'gray.100')}
            >
              {project.title}
            </Text>
            <Box width="full">
              <Text
                bg={useColorModeValue('gray.200', 'gray.700')}
                rounded="lg"
                align="left"
                p="4"
                fontSize="sm"
              >
                {project.description}
              </Text>
              {project.techStack && (
                <List
                  display="flex"
                  fontSize="xs"
                  justifyContent="start"
                  mt="3"
                  color={useColorModeValue('gray.900', 'gray.100')}
                  fontWeight="bold"
                >
                  {project.techStack.map((s, index) => (
                    <ListItem key={index} mr="2">
                      <i>{s}</i>
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          </a>
          <Flex pt={2} mt={1} justifyContent="start">
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <IconButton
                colorScheme="gray"
                rounded="full"
                size="md"
                aria-label="medal"
                icon={<HiOutlineExternalLink />}
              />
            </a>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const LeftProjectLayoutLarge = ({ project }: ProjectProps) => {
  return (
    <Flex width="full" display={['none', 'none', 'flex']}>
      <Box
        rounded="xl"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="80%"
        h="24rem"
        textAlign="left"
        align="start"
        spacing={4}
        shadow="md"
        _hover={{ border: 'md', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
            <Image
              src={project.imageLight}
              fallback={<Skeleton />}
              size="lg"
              width={'full'}
              height={'full'}
              position="absolute"
              rounded="xl"
              objectFit="cover"
              alt="cover image"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            />
          </AspectRatio>
        </a>
      </Box>
      <Box width="40%" rounded="lg" my="auto" zIndex="10" ml="-6rem" align="right">
        <a href={project.site} target="_blank" rel="noopener noreferrer" className="text-right">
          <Text fontSize="3xl" fontWeight="bold" color={useColorModeValue('gray.900', 'gray.100')}>
            {project.title}
          </Text>
        </a>
        <Box width="full">
          <Text
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded="lg"
            align="right"
            p="4"
            fontSize="md"
          >
            {project.description}
          </Text>
          {project.techStack && (
            <List
              display="flex"
              fontSize="sm"
              justifyContent="end"
              mt="3"
              color={useColorModeValue('gray.900', 'gray.100')}
              fontWeight="bold"
            >
              {project.techStack.map((s, index) => (
                <ListItem key={index} mr="3">
                  <i>{s}</i>
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        <Flex pt={2} mt={1} justifyContent="end">
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <IconButton
              colorScheme="gray"
              rounded="full"
              size="md"
              aria-label="medal"
              icon={<HiOutlineExternalLink />}
            />
          </a>
        </Flex>
      </Box>
    </Flex>
  );
};

const RightProjectLayoutLarge = ({ project }: ProjectProps) => {
  return (
    <Flex width="full" display={['none', 'none', 'flex']}>
      <Box width="40%" rounded="lg" my="auto" zIndex="10" mr="-6rem" align="left">
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <Text fontSize="3xl" fontWeight="bold" color={useColorModeValue('gray.900', 'gray.100')}>
            {project.title}
          </Text>
        </a>
        <Box width="full">
          <Text
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded="lg"
            align="left"
            p="4"
            fontSize="md"
          >
            {project.description}
          </Text>
          {project.techStack && (
            <List
              display="flex"
              fontSize="sm"
              justifyContent="start"
              mt="3"
              color={useColorModeValue('gray.900', 'gray.100')}
              fontWeight="bold"
            >
              {project.techStack.map((s, index) => (
                <ListItem key={index} mr="3">
                  <i>{s}</i>
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        <Flex pt={2} mt={1} justifyContent="start">
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <IconButton
              colorScheme="gray"
              rounded="full"
              size="md"
              aria-label="medal"
              icon={<HiOutlineExternalLink />}
            />
          </a>
        </Flex>
      </Box>
      <Box
        rounded="xl"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="80%"
        h="24rem"
        textAlign="left"
        align="start"
        spacing={4}
        shadow="md"
        _hover={{ border: 'md', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
            <Image
              src={project.imageLight}
              fallback={<Skeleton />}
              size="lg"
              width={'full'}
              height={'full'}
              position="absolute"
              rounded="xl"
              objectFit="cover"
              alt="cover image"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            />
          </AspectRatio>
        </a>
      </Box>
    </Flex>
  );
};

export default ProjectsList;
