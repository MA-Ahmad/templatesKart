import { useState, useEffect, ReactNode } from 'react';
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
  Flex
} from '@chakra-ui/react';
import { useLinkColor, useHoverLinkColor } from 'components/theme';
import { MotionBox } from 'components/shared/animations/motion';
import { projects } from 'data/projects';
import { Project } from 'data/types';
import UnderlinedText from '../shared/underlined-text';
import { IconType } from 'react-icons';

interface NavigationLinkProps {
  href: string;
  children: ReactNode;
  asPath: string;
  icon: IconType;
  componentsCount: string;
}
const NavigationLink = ({ href, children, asPath, icon, componentsCount }: NavigationLinkProps) => {
  const isActive = asPath === href;
  const linkColor = useLinkColor();
  const hoverLinkColor = useHoverLinkColor();

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={'sm'}
        rounded={'md'}
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
  }, []);

  return (
    <Stack as={'nav'} spacing={6} maxW={{ md: '3xs' }} w={'full'} flexShrink={0} {...props}>
      {project && (
        <Stack key={project.id}>
          <NextLink href={`projects/${project.id}`} passHref>
            <Link>
              <MotionBox whileHover={{ translateX: 5 }}>
                <Text
                  textTransform={'uppercase'}
                  color={categoryColor}
                  fontWeight={'extrabold'}
                  fontSize={'md'}
                  letterSpacing={1}
                >
                  <UnderlinedText color={linkColor}>{project.name}</UnderlinedText>
                </Text>
              </MotionBox>
            </Link>
          </NextLink>
          <Stack spacing={1} mt={'1.5rem !important'}>
            {project.pages?.map((page) => (
              <MotionBox key={page.id} whileHover={{ translateX: 3 }} _hover={{ shadow: 'sm' }}>
                <NavigationLink
                  asPath={asPath}
                  key={page.id}
                  href={
                    page.id === 'theme'
                      ? `/projects/${project.id}/${page.id}`
                      : `/projects/${project.id}/pages/${page.id}`
                  }
                  icon={page.icon}
                  componentsCount={page.id !== 'theme' ? String(page.components?.length) : ''}
                >
                  {page.name}
                </NavigationLink>
              </MotionBox>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );

  // return (
  //   <Stack as={'nav'} spacing={6} maxW={{ md: '3xs' }} w={'full'} flexShrink={0} {...props}>
  //     {projects.map((project) => (
  //       <Stack key={project.id}>
  //         <NextLink href={`projects/${project.id}`} passHref>
  //           <Link>
  //             <MotionBox whileHover={{ translateX: 5 }}>
  //               <Text
  //                 textTransform={'uppercase'}
  //                 color={categoryColor}
  //                 fontWeight={'extrabold'}
  //                 fontSize={'md'}
  //                 letterSpacing={1}
  //               >
  //                 <UnderlinedText color={linkColor}>{project.name}</UnderlinedText>
  //               </Text>
  //             </MotionBox>
  //           </Link>
  //         </NextLink>
  //         <Stack spacing={1} mt={'1.5rem !important'}>
  //           {project.pages?.map((page) => (
  //             <MotionBox key={page.id} whileHover={{ translateX: 3 }} _hover={{ shadow: 'sm' }}>
  //               <NavigationLink
  //                 asPath={asPath}
  //                 key={page.id}
  //                 href={
  //                   page.id === 'theme'
  //                     ? `/projects/${project.id}/${page.id}`
  //                     : `/projects/${project.id}/pages/${page.id}`
  //                 }
  //                 icon={page.icon}
  //                 componentsCount={page.id !== 'theme' ? String(page.components?.length) : ''}
  //               >
  //                 {page.name}
  //               </NavigationLink>
  //             </MotionBox>
  //           ))}
  //         </Stack>
  //       </Stack>
  //     ))}
  //   </Stack>
  // );
};
