import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'components/theme';
import { AccentGlobal } from 'components/theme/Accent';
import NProgress from 'nprogress';
import Router from 'next/router';
import * as gtag from 'lib/gtag';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url) => {
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
