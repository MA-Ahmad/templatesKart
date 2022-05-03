import { PropsWithChildren } from 'react';
import {
  VStack,
  Heading,
  Box,
  Link,
  LinkProps,
  Container,
  SlideFade,
  LinkBoxProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FiPackage, FiHome, FiEdit2, FiUsers, FiBarChart2 } from 'react-icons/fi';
import { FaTools } from 'react-icons/fa';
import TimelineItem from './timeline-item';

const ExternalLink = ({ children }: PropsWithChildren<LinkBoxProps>) => {
  return (
    <Link color="blue.400" href="#" isExternal>
      {children}
    </Link>
  );
};

const Index = () => {
  return (
    <Container maxW="7xl" p="12">
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FaTools}>
              Learnt <ExternalLink>Typescript</ExternalLink> and{' '}
              <ExternalLink>Next.js</ExternalLink>
            </TimelineItem>
            <TimelineItem icon={FiUsers}>Became a dad ❤️</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published 3 posts on my portfolio website <ExternalLink>Blog</ExternalLink>
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to <ExternalLink>20+ open-source repositories</ExternalLink>
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 34k+ posts views and 1.5k+ total reactions on{' '}
              <ExternalLink>Dev.to</ExternalLink>
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Rebuilt my portfolio website with React, ChakraUI and Framer-motion,{' '}
              <ExternalLink>source on Github</ExternalLink>.
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to <ExternalLink>32 open-source repositories</ExternalLink>
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 650+ post views and 15+ total reactions on{' '}
              <ExternalLink>Dev.to</ExternalLink>
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Built my portfolio website with React and ChakraUI,{' '}
              <ExternalLink>source on Github</ExternalLink>.
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
