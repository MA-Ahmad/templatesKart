import { PropsWithChildren, Fragment, ReactNode } from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
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
      <Footer />
    </Fragment>
  );
}

export default AppLayout;
