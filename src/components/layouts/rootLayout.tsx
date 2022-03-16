import { Fragment, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import TopNav from '../shared/top-nav';
import Footer from '../shared/footer';

interface AppLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: AppLayoutProps) {
  return (
    <Fragment>
      <TopNav />
      <Container maxW={'1280px'} mt={'32'} py={2} mb={4}>
        {children}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default RootLayout;
