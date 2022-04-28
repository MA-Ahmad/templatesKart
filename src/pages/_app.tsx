import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from 'components/theme';
import { AccentGlobal } from 'components/theme/Accent';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import * as gtag from 'lib/gtag';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <AccentGlobal />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Box key={router.route}>
          <Component {...pageProps} />
        </Box>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
