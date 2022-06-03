import { PropsWithChildren, Fragment, ReactNode } from 'react';
import { Container, ContainerProps, Divider, useColorModeValue } from '@chakra-ui/react';
import TopNav from '../shared/top-nav';
import Footer from '../shared/footer';

interface AppLayoutProps extends ContainerProps {
  children: ReactNode;
}

function AppLayout({ children, ...props }: PropsWithChildren<AppLayoutProps>) {
  return (
    <Fragment>
      <TopNav />
      <Container {...props}>{children}</Container>
      <Divider mt={14} borderColor={useColorModeValue('gray.900', 'gray.600')} />
      <Footer />
    </Fragment>
  );
}

export default AppLayout;
