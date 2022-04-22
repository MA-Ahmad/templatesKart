import { Fragment, ReactNode } from 'react';
import { Container, Flex, Stack } from '@chakra-ui/react';
import TopNav from '../../shared/top-nav';
import Footer from '../../shared/footer';
import { Sidebar } from './sidebar';

interface ProjectLayoutProps {
  children: ReactNode;
}

function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <Fragment>
      <TopNav />
      <Container maxW="1280px" mt={28} flex="1 0 auto" py={8}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 0, lg: 8 }}>
          <Sidebar display={{ base: 'none', lg: 'block' }} />
          <Flex direction="column" w="full" maxW={{ lg: 'calc(100% - 16rem)' }}>
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ProjectLayout;
