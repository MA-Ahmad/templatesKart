import { Fragment, ReactNode } from 'react';
import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import TopNav from '../shared/top-nav';
import Footer from '../shared/footer';
import styles from './appLayout.module.css';
import { Sidebar } from './sidebar';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Fragment>
      <TopNav />
      {/* <DottedSvgs /> */}
      <Container maxW={'1280px'} mt={28} flex={'1 0 auto'} py={8}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 0, lg: 8 }}>
          <Sidebar display={{ base: 'none', lg: 'block' }} />
          <Flex direction={'column'} w={'full'} maxW={{ lg: 'calc(100% - 16rem)' }}>
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </Fragment>
  );
}

function DottedSvgs() {
  return (
    <Box
      position="absolute"
      height="50rem"
      width="100%"
      overflow="hidden"
      display={['none', 'none', 'block']}
      zIndex={0}
    >
      <Box position="relative" height="full" mx="auto" maxW="940px">
        <Box position="absolute" left="100%">
          <svg
            className={`${styles.dottedRightTransform} ${styles.dottedColor}`}
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-700"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
          </svg>
        </Box>
        <Box position="absolute" right="100%">
          <svg
            className={`${styles.dottedLeftTransform} ${styles.dottedColor}`}
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-700"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;
