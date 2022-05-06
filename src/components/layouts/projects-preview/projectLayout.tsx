import { Fragment, ReactNode } from 'react';
import { Container, Flex, Stack, ScaleFade, SlideFade, useDisclosure } from '@chakra-ui/react';
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
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 0, lg: isOpen ? 0 : 8 }}>
          <SidebarButton onToggle={onToggle} isOpen={isOpen} />

          <ScaleFade initialScale={0.9} in={!isOpen}>
            <Sidebar d={{ base: 'none', lg: isOpen ? 'none' : 'block' }} />
          </ScaleFade>
          <Flex direction="column" w="full">
            <SlideFade in={true}> {children}</SlideFade>
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ProjectLayout;
