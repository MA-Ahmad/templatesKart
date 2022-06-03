import { Fragment, ReactNode } from 'react';
import {
  Container,
  Flex,
  Stack,
  SlideFade,
  ScaleFade,
  Divider,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import Footer from 'components/shared/footer';
import TopNav from 'components/shared/top-nav';
import { Sidebar } from './sidebar';
import SidebarButton from '../sidebarButton';

interface ComponentLayoutProps {
  children: ReactNode;
}

function ComponentLayout({ children }: ComponentLayoutProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fragment>
      <TopNav />
      <Container maxW="1280px" mt={28} flex="1 0 auto" py={8}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 0, lg: isOpen ? 0 : 6 }}
          pos="relative"
        >
          <SidebarButton onToggle={onToggle} isOpen={isOpen} />

          <ScaleFade initialScale={0.9} in={!isOpen}>
            <Sidebar display={{ base: 'none', lg: isOpen ? 'none' : 'block' }} />
          </ScaleFade>
          <Flex direction="column" w="full" maxW={{ lg: isOpen ? '100%' : 'calc(100% - 16rem)' }}>
            <SlideFade in={true}>{children}</SlideFade>
          </Flex>
        </Stack>
      </Container>
      <Divider mt={14} borderColor={useColorModeValue('gray.900', 'gray.600')} />
      <Footer />
    </Fragment>
  );
}

export default ComponentLayout;
