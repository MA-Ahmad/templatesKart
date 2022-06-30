import { Fragment, ReactNode } from 'react';
import {
  Container,
  Flex,
  Stack,
  ScaleFade,
  SlideFade,
  Divider,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import TopNav from '../../shared/top-nav';
import Footer from '../../shared/footer';
import { Sidebar } from './sidebar';
import SidebarButton from '../sidebarButton';

interface ProjectLayoutProps {
  children: ReactNode;
}

function ProjectLayout({ children }: ProjectLayoutProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fragment>
      <TopNav />
      <Container maxW="1280px" mt={28} flex="1 0 auto" py={8}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          spacing={{ base: 0, lg: isOpen ? 0 : 8 }}
        >
          <SidebarButton onToggle={onToggle} isOpen={isOpen} />

          <ScaleFade initialScale={0.9} in={!isOpen}>
            <Sidebar d={{ base: 'none', lg: isOpen ? 'none' : 'block' }} />
          </ScaleFade>
          <Flex direction="column" w="full" maxW={{ lg: isOpen ? '100%' : 'calc(100% - 16rem)' }}>
            <SlideFade in={true}> {children}</SlideFade>
          </Flex>
        </Stack>
      </Container>
      <Divider mt={14} borderColor={useColorModeValue('gray.900', 'gray.600')} />
      <Footer />
    </Fragment>
  );
}

export default ProjectLayout;
