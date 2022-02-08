import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'components/theme';
import { AccentGlobal } from 'components/theme/Accent';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <AccentGlobal />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
