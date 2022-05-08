import { useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Link,
  Stack,
  Text,
  StackProps,
  useColorModeValue,
  Box,
  Icon,
  Flex,
  BoxProps
} from '@chakra-ui/react';
import { useLinkColor, useHoverLinkColor } from 'components/theme';
import { MotionBox } from 'components/shared/animations/motion';
import { projects } from 'data/projects';
import { Project } from 'data/projects/types';
import UnderlinedText from '../../shared/underlined-text';
import { IconType } from 'react-icons';
import { BiLinkExternal } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';
import { fadeInUp } from 'components/shared/animations/framerAnimations';

interface NavigationLinkProps {
  href: string;
  children: ReactNode;
  asPath?: string;
  icon: IconType;
  componentsCount?: string;
  isExternal?: boolean;
}
const NavigationLink = ({
  href,
  children,
  asPath,
  icon,
  componentsCount,
  isExternal
}: NavigationLinkProps) => {
  const isActive = asPath === href;
  const linkColor = useLinkColor();
  const hoverLinkColor = useHoverLinkColor();

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize="sm"
        rounded="md"
        px={3}
        py={1}
        bg={isActive ? linkColor : undefined}
        color={isActive ? 'white' : undefined}
        fontWeight={isActive ? 'bold' : 400}
        _hover={{
          bg: isActive
            ? useColorModeValue(hoverLinkColor, '')
            : useColorModeValue('gray.100', 'gray.700'),
          color: isActive ? 'white' : linkColor
        }}
        isExternal={isExternal || false}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Icon as={icon} w={5} h={5} />
          <Box as="span" fontSize="md" ml={3} fontWeight={isActive ? 'bold' : 'medium'}>
            {children}
          </Box>
        </Flex>
        {componentsCount && (
          <Flex
            ml={5}
            fontWeight="normal"
            color={isActive ? 'gray.700' : undefined}
            rounded="full"
            bg={isActive ? 'white' : useColorModeValue('gray.200', 'gray.600')}
            justifyContent="center"
            alignItems="center"
            lineHeight="1"
            w={5}
            h={5}
          >
            <Text fontSize="sm">{componentsCount}</Text>
          </Flex>
        )}
      </Link>
    </NextLink>
  );
};

export const Sidebar = (props: StackProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const { asPath } = useRouter();
  const categoryColor = useColorModeValue('gray.800', 'gray.200');
  const linkColor = useLinkColor();

  useEffect(() => {
    setProject(projects.filter((p) => p.id === asPath.split('/')[2])[0]);
  }, [asPath]);

  return (
    <Stack as="nav" spacing={6} maxW={{ md: '3xs' }} w={'full'} flexShrink={0} {...props}>
      {project && (
        <Stack key={project.id}>
          <NextLink href={`${project.id}`} passHref>
            <Link>
              <CustomMotionBox whileHover={{ translateX: 5 }}>
                <Text
                  textTransform="uppercase"
                  color={categoryColor}
                  fontWeight="extrabold"
                  fontSize="md"
                  letterSpacing={1}
                >
                  <UnderlinedText color={linkColor}>{project.name}</UnderlinedText>
                </Text>
              </CustomMotionBox>
            </Link>
          </NextLink>
          <Stack spacing={1} mt="1.5rem !important">
            {project.pages?.map((page) => (
              <CustomMotionBox
                key={page.id}
                whileHover={{ translateX: 3 }}
                _hover={{ shadow: 'sm' }}
              >
                <NavigationLink
                  asPath={asPath}
                  key={page.id}
                  href={`/projects/${project.id}/pages/${page.id}`}
                  icon={page.icon}
                  componentsCount={String(page.components?.length)}
                >
                  {page.name}
                </NavigationLink>
              </CustomMotionBox>
            ))}
            {project.themeCodeLink && (
              <CustomMotionBox whileHover={{ translateX: 3 }} _hover={{ shadow: 'sm' }}>
                <NavigationLink
                  href={project.themeCodeLink}
                  icon={BiLinkExternal}
                  isExternal={true}
                >
                  Theme
                </NavigationLink>
              </CustomMotionBox>
            )}
          </Stack>
        </Stack>
      )}
      <Stack>
        <CustomMotionBox>
          <Text
            textTransform="uppercase"
            color={categoryColor}
            fontWeight="extrabold"
            fontSize="md"
            letterSpacing={1}
          >
            <UnderlinedText color={linkColor}>Other Projects</UnderlinedText>
          </Text>
        </CustomMotionBox>
        <Stack spacing={1} mt="1.5rem !important">
          {project &&
            projects
              .filter((p) => p.id !== project.id)
              .map((project) => (
                <NextLink key={project.id} href={`${project.id}`} passHref>
                  <Link
                    px={2}
                    py={1}
                    _hover={{
                      color: linkColor
                    }}
                  >
                    <CustomMotionBox whileHover={{ translateX: 5 }}>
                      <Flex alignItems="center">
                        <Icon as={FaChevronRight} w={3} h={3} />
                        <Box as="span" fontSize="md" ml={1}>
                          <Text
                            textTransform="uppercase"
                            fontSize="md"
                            letterSpacing={1}
                            _hover={{
                              color: linkColor
                            }}
                          >
                            {project.name}
                          </Text>
                        </Box>
                      </Flex>
                    </CustomMotionBox>
                  </Link>
                </NextLink>
              ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

interface CustomMotionBoxProps extends BoxProps {
  children: ReactNode;
  whileHover?: any;
}

const CustomMotionBox = ({ children, ...props }: PropsWithChildren<CustomMotionBoxProps>) => {
  return (
    <MotionBox
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition="all 0.3s ease-in-out"
      {...props}
    >
      {children}
    </MotionBox>
  );
};
