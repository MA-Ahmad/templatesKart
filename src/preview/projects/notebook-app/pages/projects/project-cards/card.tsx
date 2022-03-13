import * as React from 'react';
import {
  Box,
  Badge,
  Flex,
  Center,
  Link,
  HStack,
  Tooltip,
  useColorModeValue,
  Icon,
  Image
} from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import getTagColor from './helpers';

type project = {
  id: number;
  title: string;
  desc: string;
  technologies: string[];
  stars: number;
  githubLink: string;
  liveLink: string;
  coverImage: string;
};

interface ProjectCardProps {
  project: project;
}

const ProjectCard: React.SFC<ProjectCardProps> = ({ project }) => {
  const bg = useColorModeValue('white', '#2f3244');
  const textColor = useColorModeValue('gray.600', '#b5b1b1');

  return (
    <>
      <Center>
        <Box
          maxW="sm"
          height="fit-content"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          mx="5px"
          mb="10px"
          mt="10px"
          _hover={{ boxShadow: 'lg' }}
        >
          <Image
            height={'auto'}
            cursor={project.coverImage ? 'pointer' : 'auto'}
            width={'100%'}
            src={project.coverImage}
            objectFit="cover"
            alt="cover image"
            fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
          />
          <Box p="5" bg={bg}>
            <Flex justifyContent="space-between" alignItems="center">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h6"
                fontSize="md"
                lineHeight="tight"
                textAlign="left"
                isTruncated
              >
                <Link
                  href={project.liveLink || project.githubLink}
                  textDecoration={'none !important'}
                  isExternal
                >
                  <HStack alignItems="center">
                    <Box as="span" ml="2" color={textColor} fontSize="sm">
                      {project.title}
                    </Box>
                    <Icon as={BiLinkExternal} mx="3px" />
                  </HStack>
                </Link>
              </Box>
              <Box mt="1">
                {project.stars ? (
                  <Link href={project.githubLink} textDecoration={'none !important'} isExternal>
                    <Tooltip hasArrow label="Github stars" placement="top-end">
                      <HStack alignItems="center">
                        <Icon as={AiOutlineStar} color="teal.300" fontSize="sm" />
                        <Box as="span" ml="2" color={textColor} fontSize="sm">
                          {project.stars}
                        </Box>
                      </HStack>
                    </Tooltip>
                  </Link>
                ) : (
                  ''
                )}
              </Box>
            </Flex>
            <Box textAlign="left">
              <HStack spacing="1" mt="2" mb="2">
                {project.technologies.map((tech, index) => (
                  <Badge
                    borderRadius="full"
                    px="1"
                    colorScheme={getTagColor(tech)}
                    textTransform="lowercase"
                    key={index}
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </Box>
            <Box color={textColor} fontSize="md" textAlign="left">
              {project.desc}
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default ProjectCard;
