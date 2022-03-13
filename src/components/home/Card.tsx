import { Key, ReactNode } from 'react';
import {
  Img,
  Text,
  Link,
  useColorModeValue,
  AspectRatio,
  HStack,
  Skeleton,
  Icon,
  VStack,
  Tooltip
} from '@chakra-ui/react';
import { MotionBox } from 'components/shared/animations/motion';
import NextLink from 'next/link';
import { Tag } from 'components/shared/Tags';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { CgComponents, CgFileDocument } from 'react-icons/cg';
import { GITHUB_BASE_URL } from 'data/constants';
import { Project } from 'data/projects/types';
import IconBox from './IconBox';

type ProjectProps = {
  project: Project;
  color: string;
};
const Card = ({ project, color }: ProjectProps) => {
  const cardColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      backgroundColor={cardColor}
      borderRadius={'md'}
      overflow="hidden"
      whileHover={{ y: -3 }}
      _hover={{ shadow: 'md' }}
    >
      <NextLink href={`/projects/${project.id}`} passHref>
        <Link>
          <AspectRatio ratio={1.85 / 1} w="100%" cursor="pointer">
            <Img
              w="100%"
              h="100%"
              objectFit="cover"
              src={project.imageUrl}
              fallback={<Skeleton />}
            />
          </AspectRatio>
        </Link>
      </NextLink>
      <VStack spacing={2} px="4" py="2" w="100%">
        <HStack justify="space-between" align="center" width="100%">
          <NextLink href={`/projects/${project.id}`} passHref>
            <Link fontWeight="semibold">
              <Text fontSize={['xs', null, 'md']} color={color}>
                {project.name}
              </Text>
            </Link>
          </NextLink>

          <HStack>
            <HStack>
              <Stats
                label="Pages"
                length={project.pages.filter((page) => page.id !== 'theme').length}
                icon={<Icon as={CgFileDocument} />}
              />
            </HStack>
            <HStack>
              <Stats
                label="Components"
                length={
                  project.components.filter((component) => component.page_id !== 'theme').length
                }
                icon={<Icon as={CgComponents} />}
              />
            </HStack>
          </HStack>
        </HStack>
        <HStack spacing="1" width="100%" justify="space-between">
          <HStack spacing={1}>
            <IconBox
              link={`${GITHUB_BASE_URL}/${project.githubRepoName}`}
              icon={<Icon as={AiOutlineGithub} />}
            />
            <IconBox link={project.liveLink} icon={<Icon as={BiLinkExternal} />} />
          </HStack>
          <HStack>
            {project.techStack.map((tech: string, index: Key | null | undefined) => (
              <Tag key={index} name={tech} m="2px" padding="0 3px" size="sm" />
            ))}
          </HStack>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

type StatsProps = {
  label: string;
  length: number;
  icon: ReactNode;
};

const Stats = ({ label, length, icon }: StatsProps) => {
  return (
    <Tooltip hasArrow placement="top" label={label} bg="gray.300" color="black">
      <HStack>
        <Text fontSize="md" noOfLines={1} fontWeight="400" align="left">
          {length}
        </Text>
        {icon}
      </HStack>
    </Tooltip>
  );
};

export default Card;
